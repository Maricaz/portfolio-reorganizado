import { useState } from 'react'
import { Link } from 'react-router-dom'
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
import { Loader2, ArrowLeft, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { logSecurityEvent, triggerSecurityAlert } from '@/services/security'

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor, insira um email válido.',
  }),
})

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const { resetPassword } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setServerError(null)

    try {
      const { error } = await resetPassword(values.email)
      if (error) throw error

      setSubmitted(true)

      // Audit and Alert
      // We log this asynchronously to not block the UI
      logSecurityEvent('PASSWORD_RECOVERY_REQUEST', { email: values.email })
      // Only trigger alert if we want to notify admins about recovery requests (optional)
      // triggerSecurityAlert('PASSWORD_RESET', ...)
    } catch (err: any) {
      // Per security best practices, we might want to show success even on failure
      // if it's related to "user not found", but for technical errors, we show the message.
      // Supabase generally doesn't reveal if user exists in resetPasswordForEmail unless config allows.
      // However, if there's a network error or rate limit, we should tell the user.
      setServerError(err.message || 'Ocorreu um erro ao enviar o email.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4 animate-fade-in">
      <Card className="w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Recuperar Senha
          </CardTitle>
          <CardDescription className="text-center">
            Digite seu email para receber o link de redefinição
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Verifique seu email</h3>
                <p className="text-sm text-muted-foreground">
                  Se um conta existir com o email{' '}
                  <strong>{form.getValues('email')}</strong>, você receberá
                  instruções para redefinir sua senha em breve.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => setSubmitted(false)}
              >
                Tentar outro email
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {serverError && (
                  <Alert variant="destructive">
                    <AlertDescription>{serverError}</AlertDescription>
                  </Alert>
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="admin@exemplo.com"
                          type="email"
                          autoComplete="email"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Link de Recuperação'
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="justify-center border-t p-4 bg-muted/10">
          <Link
            to="/admin/login"
            className={cn(
              'flex items-center text-sm text-muted-foreground hover:text-primary transition-colors',
              isSubmitting && 'pointer-events-none opacity-50',
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
