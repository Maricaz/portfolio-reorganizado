import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'
import { AdminPermissions } from '@/types'

interface RequireAdminProps {
  children?: React.ReactNode
  permission?: keyof AdminPermissions
}

export const RequireAdmin = ({ children, permission }: RequireAdminProps) => {
  const { isAdmin, hasPermission, loading, user } = useAuth()

  // Use combined loading to ensure profile role is fetched
  if (loading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Verificando permissões de administrador...
        </p>
      </div>
    )
  }

  // Double check user existence for type safety, though RequireAuth should catch this if nested
  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  // Check if user is an admin
  if (!isAdmin) {
    return <Navigate to="/admin/forbidden" replace />
  }

  // Check for specific permission if required
  if (permission && !hasPermission(permission)) {
    return <Navigate to="/admin/forbidden" replace />
  }

  return children ? <>{children}</> : <Outlet />
}
