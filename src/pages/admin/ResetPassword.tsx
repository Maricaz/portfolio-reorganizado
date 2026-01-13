import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { logSecurityEvent, triggerSecurityAlert } from '@/services/security'

const formSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })

export default function ResetPassword() {
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const { updatePassword, session, loading } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setServerError(null)

    try {
      const { error } = await updatePassword(values.password)
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
      setServerError(err.message || 'Erro ao atualizar a senha.')
    }
  }

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">
            Verificando link de recuperação...
          </p>
        </div>
      </div>
    )
  }

  // Invalid or Expired Session
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
        <Card className="w-full max-w-md shadow-lg border-destructive/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-2">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <CardTitle className="text-xl text-destructive">
              Link Inválido ou Expirado
            </CardTitle>
            <CardDescription>
              O link de recuperação de senha que você usou não é válido ou já
              expirou.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link to="/admin/forgot-password">Solicitar novo link</Link>
            </Button>
            <Button variant="ghost" asChild className="w-full">
              <Link to="/admin/login">Voltar ao Login</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  // Success State
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

  // Main Form
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {serverError && (
                <Alert variant="destructive">
                  <AlertDescription>{serverError}</AlertDescription>
                </Alert>
              )}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nova Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        autoComplete="new-password"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        autoComplete="new-password"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Atualizando...
                  </>
                ) : (
                  'Atualizar Senha'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
