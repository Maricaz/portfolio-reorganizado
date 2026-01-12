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

  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role, is_banned, permissions')
        .eq('id', userId)
        .single()

      if (!error && data) {
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
        console.warn(
          'Could not fetch role or no role assigned, defaulting to user',
          error,
        )
        setRole('user')
        setPermissions({})
      }
    } catch (error) {
      console.error('Error fetching role:', error)
      setRole('user')
      setPermissions({})
    }
  }

  useEffect(() => {
    let mounted = true

    const initAuth = async () => {
      try {
        const {
          data: { session: initialSession },
        } = await supabase.auth.getSession()

        if (mounted) {
          setSession(initialSession)
          setUser(initialSession?.user ?? null)
        }

        if (initialSession?.user) {
          await fetchUserRole(initialSession.user.id)
        }
      } catch (error) {
        console.error('Error checking initial session:', error)
      } finally {
        if (mounted) setLoading(false)
      }

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
        if (!mounted) return

        setSession(newSession)
        setUser(newSession?.user ?? null)

        if (newSession?.user) {
          await fetchUserRole(newSession.user.id)
        } else {
          setRole(null)
          setPermissions({})
        }

        setLoading(false)
      })

      return () => {
        subscription.unsubscribe()
      }
    }

    const cleanup = initAuth()

    return () => {
      mounted = false
    }
  }, [])

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
      },
    })
    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data?.user) {
      await fetchUserRole(data.user.id)
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
        await fetchUserRole(data.session.user.id)
      }
    }

    return { data, error }
  }

  const refreshRole = async () => {
    if (user) {
      await fetchUserRole(user.id)
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
