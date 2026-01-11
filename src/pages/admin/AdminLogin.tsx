import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { supabase } from '@/lib/supabase/client'
import { ShieldAlert, Loader2, Lock, Mail, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [isResetOpen, setIsResetOpen] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  // MFA State
  const [mfaRequired, setMfaRequired] = useState(false)
  const [mfaCode, setMfaCode] = useState('')
  const [factorId, setFactorId] = useState<string | null>(null)

  const { signIn, resetPassword, verifyMfa, user, role, signOut } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  // Redirect if already logged in and has correct role
  useEffect(() => {
    if (user && role) {
      const allowedRoles = ['admin', 'super_admin', 'editor']
      if (allowedRoles.includes(role)) {
        navigate('/admin')
      }
    }
  }, [user, role, navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoginError(null)

    try {
      // 1. Basic Sign In
      const { data, error } = await signIn(email, password)

      if (error) {
        // Provide more user friendly error messages
        if (
          error.message.includes('Invalid login credentials') ||
          error.message.includes('Email not confirmed')
        ) {
          throw new Error('Email ou senha incorretos.')
        }
        throw new Error(error.message)
      }

      if (!data.user) {
        throw new Error('Erro ao obter dados do usuário.')
      }

      // 2. Check User Role directly to ensure immediate feedback
      // We do this manually here to avoid waiting for the async auth listener state update
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()

      if (profileError) {
        await signOut()
        throw new Error('Erro ao verificar perfil do usuário.')
      }

      const userRole = profile?.role || 'user'
      const allowedRoles = ['admin', 'super_admin', 'editor']

      if (!allowedRoles.includes(userRole)) {
        await signOut()
        throw new Error(
          'Acesso negado: Privilégios de administrador necessários.',
        )
      }

      // 3. Check for MFA Factors
      const { data: factorsData, error: factorsError } =
        await supabase.auth.mfa.listFactors()

      if (factorsError) {
        console.error('Error listing MFA factors:', factorsError)
      }

      const verifiedFactors =
        factorsData?.all?.filter((f) => f.status === 'verified') || []

      if (verifiedFactors.length > 0) {
        // MFA Required
        setFactorId(verifiedFactors[0].id) // Use the first verified factor
        setMfaRequired(true)
        setLoading(false)
      } else {
        // No MFA, proceed
        toast({
          title: 'Bem-vinda de volta!',
          description: 'Login realizado com sucesso.',
        })
        // The navigation will happen in the useEffect or here if we want instant feedback
        navigate('/admin')
        setLoading(false)
      }
    } catch (error: any) {
      setLoading(false)
      const errorMessage =
        error.message || 'Ocorreu um erro ao tentar entrar. Tente novamente.'
      setLoginError(errorMessage)
      toast({
        title: 'Falha no Login',
        description: errorMessage,
        variant: 'destructive',
      })
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
        title: 'MFA Falhou',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      navigate('/admin')
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await resetPassword(resetEmail)
    setLoading(false)
    setIsResetOpen(false)

    if (error) {
      toast({
        title: 'Erro',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Email enviado',
        description:
          'Verifique sua caixa de entrada para instruções de redefinição.',
      })
    }
  }

  if (mfaRequired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
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
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
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
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{loginError}</AlertDescription>
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
                <Dialog open={isResetOpen} onOpenChange={setIsResetOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="px-0 font-normal h-auto text-xs"
                      type="button"
                    >
                      Esqueceu a senha?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Redefinir Senha</DialogTitle>
                      <DialogDescription>
                        Digite seu email e enviaremos um link para redefinir sua
                        senha.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleResetPassword}>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="reset-email">Email</Label>
                          <Input
                            id="reset-email"
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={loading}>
                          {loading ? 'Enviando...' : 'Enviar Link'}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
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
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
