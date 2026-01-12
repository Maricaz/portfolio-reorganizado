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
  const { user, role, hasPermission, loading } = useAuth()
  const location = useLocation()

  // Improved loading state that doesn't feel "broken"
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

  // If role is missing (or banned), or simply 'user', they shouldn't be here.
  // We double check against expected admin roles just to be safe,
  // although AdminLayout also does this check.
  const allowedRoles = ['admin', 'super_admin', 'editor']
  if (!role || !allowedRoles.includes(role)) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center animate-fade-in p-4">
        <div className="rounded-full bg-destructive/10 p-4">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Acesso Restrito</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            Sua conta ({user.email}) não possui permissão para acessar esta
            área.
          </p>
        </div>
        <Button variant="outline" asChild>
          <a href="/admin/login">Voltar ao Login</a>
        </Button>
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
          <h2 className="text-2xl font-bold">Acesso Restrito</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            Você não tem permissão para acessar esta área ({permission}).
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
