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

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  // If role is missing (or banned), AdminLayout usually handles this, but safe to check
  if (!role) {
    return <Navigate to="/admin/login" replace />
  }

  // If specific permission is required
  if (permission && !hasPermission(permission)) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center animate-fade-in">
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
