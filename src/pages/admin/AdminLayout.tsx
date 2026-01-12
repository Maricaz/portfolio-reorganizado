import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'
import { Toaster } from '@/components/ui/toaster'
import { useAuth } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'

export default function AdminLayout() {
  const { user, role, loading } = useAuth()
  const location = useLocation()

  // 1. Show loader while checking authentication and fetching role
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Verificando acesso...</p>
        </div>
      </div>
    )
  }

  // 2. Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  // 3. Check for valid admin role
  // Allowed roles for accessing the admin panel structure
  const allowedRoles = ['admin', 'super_admin', 'editor']

  if (!role || !allowedRoles.includes(role)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-4 text-center">
        <div className="rounded-full bg-destructive/10 p-4">
          <div className="h-8 w-8 text-destructive">🚫</div>
        </div>
        <h1 className="text-2xl font-bold">Acesso Negado</h1>
        <p className="text-muted-foreground max-w-md">
          Você não tem permissão para acessar a área administrativa. Entre em
          contato com o administrador do sistema se acreditar que isso é um
          erro.
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="text-primary hover:underline underline-offset-4 text-sm"
        >
          Voltar para o site
        </button>
      </div>
    )
  }

  // 4. Render Admin Layout
  return (
    <div className="flex min-h-screen bg-background w-full">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 fixed inset-y-0 left-0 z-40">
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto bg-muted/5 p-4 md:p-8">
          <div className="max-w-6xl mx-auto w-full animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}
