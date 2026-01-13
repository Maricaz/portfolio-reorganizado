import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'

interface RequireAuthProps {
  children?: React.ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { session, loadingAuth } = useAuth()
  const location = useLocation()

  if (loadingAuth) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background/50 backdrop-blur-sm">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!session) {
    // Redirect to login page, but save the current location they were trying to go to
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return children ? <>{children}</> : <Outlet />
}
