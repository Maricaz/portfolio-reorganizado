import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Lock, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { logSecurityEvent, triggerSecurityAlert } from '@/services/security'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { updatePassword, session } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  // Redirect if no session (invalid link or expired)
  useEffect(() => {
    // We give a small delay to allow session restore
    const timer = setTimeout(() => {
      if (!session) {
        toast({
          title: 'Link inválido ou expirado',
          description: 'Por favor, solicite uma nova redefinição de senha.',
          variant: 'destructive',
        })
        navigate('/admin/login')
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [session, navigate, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      setLoading(false)
      return
    }

    try {
      const { error } = await updatePassword(password)
      if (error) throw error
      setSuccess(true)

      // Audit and Alert
      logSecurityEvent('PASSWORD_UPDATED', { success: true })
      triggerSecurityAlert('PASSWORD_RESET', {
        title: 'Security Alert: Password Changed',
        message: 'Your account password has been successfully updated.',
      })

      toast({
        title: 'Senha atualizada',
        description: 'Sua senha foi redefinida com sucesso.',
      })
      setTimeout(() => {
        navigate('/admin/login')
      }, 3000)
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar a senha.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
        <Card className="w-full max-w-md shadow-lg border-green-200">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-700">Sucesso!</h2>
            <p className="text-muted-foreground">
              Sua senha foi atualizada. Você será redirecionado para o login em
              instantes.
            </p>
            <Button
              className="w-full mt-4"
              onClick={() => navigate('/admin/login')}
            >
              Ir para Login agora
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
      <Card className="w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Redefinir Senha
          </CardTitle>
          <CardDescription className="text-center">
            Digite sua nova senha abaixo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Nova Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="******"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="pl-9"
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Atualizando...
                </>
              ) : (
                'Atualizar Senha'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
