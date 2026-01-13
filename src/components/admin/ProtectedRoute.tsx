import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { AdminPermissions } from '@/types'
import { Loader2, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProtectedRouteProps {
  children: React.ReactNode
  permission?: keyof AdminPermissions
}

export const ProtectedRoute = ({
  children,
  permission,
}: ProtectedRouteProps) => {
  const { user, isAdmin, hasPermission, loading } = useAuth()
  const location = useLocation()

  // Improved loading state
  if (loading) {
    return (
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center gap-4 animate-fade-in">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Verificando permissões...
        </p>
      </div>
    )
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  // If user is authenticated but NOT an admin
  if (!isAdmin) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center animate-fade-in p-4">
        <div className="rounded-full bg-destructive/10 p-4">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Acesso Restrito</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            Sua conta ({user.email}) não possui permissão para acessar a área
            administrativa.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <a href="/admin/login">Fazer login com outra conta</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/">Voltar ao site</a>
          </Button>
        </div>
      </div>
    )
  }

  // If specific permission is required
  if (permission && !hasPermission(permission)) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center animate-fade-in p-4">
        <div className="rounded-full bg-destructive/10 p-4">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Permissão Necessária</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            Você não tem a permissão '{permission}' para acessar esta área.
          </p>
        </div>
        <Button variant="outline" asChild>
          <a href="/admin">Voltar ao Painel</a>
        </Button>
      </div>
    )
  }

  return <>{children}</>
}
