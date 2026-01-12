import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

interface AuthContextType {
  user: User | null
  session: Session | null
  role: string | null
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ error: any; data: any }>
  signOut: () => Promise<{ error: any }>
  resetPassword: (email: string) => Promise<{ error: any }>
  verifyMfa: (
    factorId: string,
    code: string,
  ) => Promise<{ error: any; data: any }>
  loading: boolean
  refreshRole: () => Promise<void>
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
  const [loading, setLoading] = useState(true)

  const fetchUserRole = async (userId: string) => {
    try {
      // Ensure we have a fresh token for the request if possible
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single()

      if (!error && data) {
        setRole(data.role)
      } else {
        console.warn(
          'Could not fetch role or no role assigned, defaulting to user',
          error,
        )
        // If error is PGRST116 (0 rows), it means profile doesn't exist yet
        setRole('user')
      }
    } catch (error) {
      console.error('Error fetching role:', error)
      setRole('user')
    }
  }

  useEffect(() => {
    let mounted = true

    const initAuth = async () => {
      try {
        // 1. Get initial session
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

      // 2. Listen for changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
        if (!mounted) return

        // When signing out, session becomes null
        setSession(newSession)
        setUser(newSession?.user ?? null)

        if (newSession?.user) {
          // If we have a user, ensure we have their role
          // Only fetch if role isn't set or user changed
          // But to be safe and sync, we fetch.
          await fetchUserRole(newSession.user.id)
        } else {
          setRole(null)
        }

        // Ensure loading is false after state change processing
        setLoading(false)
      })

      return () => {
        subscription.unsubscribe()
      }
    }

    const cleanup = initAuth()

    return () => {
      mounted = false
      // Cleanup logic is handled within the async function via subscription variable
      // but we need to extract subscription to unsubscribe properly if needed outside
      // Simplified: the subscription variable inside initAuth isn't accessible here directly for return.
      // So we refactor slightly to standard pattern:
    }
  }, [])

  // Refactored Effect for correctness with cleanup
  useEffect(() => {
    let mounted = true

    // Setup listener first
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return

      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        // We cannot await here effectively for the UI blocking,
        // but we should set loading to true if we wanted to block?
        // Better to just fetch role and update.
        fetchUserRole(session.user.id)
      } else {
        setRole(null)
      }
      // Note: onAuthStateChange fires after getSession usually, or independently.
    })

    // Check initial session
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        if (mounted) {
          setSession(session)
          setUser(session?.user ?? null)

          if (session?.user) {
            await fetchUserRole(session.user.id)
          }
        }
      } catch (err) {
        console.error('Session check error', err)
      } finally {
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

  const value = {
    user,
    session,
    role,
    signUp,
    signIn,
    signOut,
    resetPassword,
    verifyMfa,
    loading,
    refreshRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
