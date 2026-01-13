import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'
import { useToast } from '@/hooks/use-toast'
import { AdminPermissions } from '@/types'

interface AuthContextType {
  user: User | null
  session: Session | null
  role: string | null
  isAdmin: boolean
  permissions: AdminPermissions
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ error: any; data: any }>
  signOut: () => Promise<{ error: any }>
  resetPassword: (email: string) => Promise<{ error: any }>
  updatePassword: (password: string) => Promise<{ error: any }>
  verifyMfa: (
    factorId: string,
    code: string,
  ) => Promise<{ error: any; data: any }>
  loading: boolean
  refreshRole: () => Promise<void>
  hasPermission: (permission: keyof AdminPermissions) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [permissions, setPermissions] = useState<AdminPermissions>({})
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Helper to determine if user is admin
  const checkIsAdmin = (roleName: string | null) => {
    return roleName === 'admin' || roleName === 'super_admin'
  }

  const fetchUserRole = async (userId: string, userEmail?: string) => {
    try {
      // Use maybeSingle to avoid errors if no row exists
      let { data, error } = await supabase
        .from('profiles')
        .select('role, is_banned, permissions')
        .eq('id', userId)
        .maybeSingle()

      // Self-healing: If profile is missing, try to create it
      if (!data && !error) {
        console.warn('Profile not found for user. Attempting to create...')

        const { error: insertError } = await supabase.from('profiles').insert([
          {
            id: userId,
            email: userEmail || '',
            role: 'user', // Default role
          },
        ])

        if (insertError) {
          console.error('Failed to auto-create profile:', insertError)
          setRole('user')
          setPermissions({})
          return
        } else {
          // Retry fetch
          const retryResult = await supabase
            .from('profiles')
            .select('role, is_banned, permissions')
            .eq('id', userId)
            .maybeSingle()

          data = retryResult.data
          error = retryResult.error
        }
      }

      if (error) {
        console.error('Error fetching role:', error)
        setRole('user') // Fallback to safe default
        setPermissions({})
        return
      }

      if (data) {
        if (data.is_banned) {
          await supabase.auth.signOut()
          setRole(null)
          setUser(null)
          setSession(null)
          setPermissions({})
          toast({
            title: 'Acesso Negado',
            description: 'Sua conta foi banida ou desativada.',
            variant: 'destructive',
          })
          return
        }
        setRole(data.role)
        setPermissions((data.permissions as AdminPermissions) || {})
      } else {
        setRole('user')
        setPermissions({})
      }
    } catch (error) {
      console.error('Unexpected error fetching role:', error)
      setRole('user')
      setPermissions({})
    }
  }

  useEffect(() => {
    let mounted = true

    // Initialize Auth Listener FIRST to catch any immediate events (like password recovery)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (!mounted) return

      // console.log('Auth event:', event)

      if (event === 'SIGNED_OUT') {
        setSession(null)
        setUser(null)
        setRole(null)
        setPermissions({})
        setLoading(false)
      } else if (newSession?.user) {
        setSession(newSession)
        setUser(newSession.user)
        await fetchUserRole(newSession.user.id, newSession.user.email)
        setLoading(false)
      } else {
        setSession(null)
        setUser(null)
        setLoading(false)
      }
    })

    // Then check for existing session
    const checkSession = async () => {
      try {
        const {
          data: { session: initialSession },
        } = await supabase.auth.getSession()

        if (mounted && initialSession?.user) {
          setSession(initialSession)
          setUser(initialSession.user)
          await fetchUserRole(initialSession.user.id, initialSession.user.email)
        } else if (mounted && !initialSession) {
          // If no session found and no event fired yet, stop loading
          setLoading(false)
        }
      } catch (error) {
        console.error('Error checking initial session:', error)
        if (mounted) setLoading(false)
      }
    }

    checkSession()

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl },
    })
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data?.user) {
      // Force fetch role immediately
      await fetchUserRole(data.user.id, data.user.email)
    }

    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      setRole(null)
      setUser(null)
      setSession(null)
      setPermissions({})
    }
    return { error }
  }

  const resetPassword = async (email: string) => {
    // Explicitly point to the reset-password route
    const redirectUrl = `${window.location.origin}/admin/reset-password`
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    })
    return { error }
  }

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password })
    return { error }
  }

  const verifyMfa = async (factorId: string, code: string) => {
    const { data: challengeData, error: challengeError } =
      await supabase.auth.mfa.challenge({ factorId })
    if (challengeError) return { error: challengeError, data: null }

    const { data, error } = await supabase.auth.mfa.verify({
      factorId,
      challengeId: challengeData.id,
      code,
    })

    if (data?.session) {
      setSession(data.session)
      if (data.session.user) {
        await fetchUserRole(data.session.user.id, data.session.user.email)
      }
    }

    return { data, error }
  }

  const refreshRole = async () => {
    if (user) {
      await fetchUserRole(user.id, user.email)
    }
  }

  const hasPermission = (permission: keyof AdminPermissions) => {
    if (role === 'super_admin') return true
    return !!permissions[permission]
  }

  const value = {
    user,
    session,
    role,
    isAdmin: checkIsAdmin(role),
    permissions,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    verifyMfa,
    loading,
    refreshRole,
    hasPermission,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
