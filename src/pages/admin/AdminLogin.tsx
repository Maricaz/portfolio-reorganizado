import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'
import { ShieldAlert, Loader2, Lock, Mail, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  // MFA State
  const [mfaRequired, setMfaRequired] = useState(false)
  const [mfaCode, setMfaCode] = useState('')
  const [factorId, setFactorId] = useState<string | null>(null)

  const { signIn, verifyMfa, user, isAdmin, signOut } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  // Redirect if already logged in as Admin
  useEffect(() => {
    if (user && isAdmin) {
      navigate('/admin')
    }
  }, [user, isAdmin, navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoginError(null)

    try {
      // 1. Sign In (includes resilient profile fetch)
      // The signIn function from useAuth now handles retries for profile
      // and returns the role
      const { data, error, role } = await signIn(email, password)

      if (error) {
        if (
          error.message.includes('Invalid login credentials') ||
          error.message.includes('Email not confirmed')
        ) {
          throw new Error('Email ou senha incorretos.')
        }
        throw new Error(error.message)
      }

      if (!data.user) {
        throw new Error('Erro inesperado: dados do usuário não retornados.')
      }

      // 2. Validate Role (based on what useAuth returned or context)
      // We check the returned role directly to avoid race conditions with context updates
      const currentRole = role || 'user'
      const allowedRoles = ['admin', 'super_admin', 'editor']

      if (!allowedRoles.includes(currentRole)) {
        await signOut()
        console.warn(`Access denied for role: ${currentRole}`)
        throw new Error(
          'Acesso negado: Esta conta não possui privilégios de administrador.',
        )
      }

      // 3. Check for MFA Factors
      const { data: factorsData, error: factorsError } =
        await supabase.auth.mfa.listFactors()

      if (factorsError) {
        console.warn('MFA check failed:', factorsError)
      }

      const verifiedFactors =
        factorsData?.all?.filter((f) => f.status === 'verified') || []

      if (verifiedFactors.length > 0) {
        // MFA Required
        setFactorId(verifiedFactors[0].id)
        setMfaRequired(true)
        setLoading(false)
      } else {
        // Success
        toast({
          title: 'Bem-vinda de volta!',
          description: 'Login administrativo realizado com sucesso.',
        })
        navigate('/admin')
        setLoading(false)
      }
    } catch (error: any) {
      setLoading(false)
      const errorMessage =
        error.message || 'Ocorreu um erro ao tentar entrar. Tente novamente.'

      console.error('Login process error:', error)
      setLoginError(errorMessage)

      // Only show toast if it's not a simple validation error (user sees alert in form)
      if (
        !errorMessage.includes('Email ou senha') &&
        !errorMessage.includes('Acesso negado')
      ) {
        toast({
          title: 'Falha no Login',
          description: errorMessage,
          variant: 'destructive',
        })
      }
    }
  }

  const handleMfaVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!factorId) return

    setLoading(true)
    const { error } = await verifyMfa(factorId, mfaCode)
    setLoading(false)

    if (error) {
      toast({
        title: 'Código MFA Inválido',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      navigate('/admin')
    }
  }

  if (mfaRequired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
        <Card className="w-full max-w-md border-primary/20 shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-center">
              Autenticação de Dois Fatores
            </CardTitle>
            <CardDescription className="text-center">
              Digite o código do seu aplicativo autenticador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMfaVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mfa-code" className="sr-only">
                  Código de Autenticação
                </Label>
                <Input
                  id="mfa-code"
                  type="text"
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value)}
                  className="text-center text-lg tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                  autoFocus
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loading || mfaCode.length !== 6}
              >
                {loading ? 'Verificando...' : 'Verificar'}
              </Button>
              <Button
                variant="ghost"
                type="button"
                className="w-full text-xs text-muted-foreground"
                onClick={() => window.location.reload()}
              >
                Voltar ao Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
      <Card className="w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="space-y-1">
          <div className="mx-auto mb-2">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lock className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-bold">
            Área Administrativa
          </CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar o painel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <Alert variant="destructive" className="animate-fade-in">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription className="text-xs mt-1">
                  {loginError}
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="pl-9"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link
                  to="/admin/forgot-password"
                  className="text-xs text-primary hover:underline underline-offset-4"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pl-9"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>

            {loginError && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full text-xs text-muted-foreground mt-2"
                onClick={() => setLoginError(null)}
              >
                Tentar novamente
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
