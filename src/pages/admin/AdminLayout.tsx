import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'
import { Toaster } from '@/components/ui/toaster'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function AdminLayout() {
  const { user, role, loading } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    // Wait until basic auth loading is done
    if (loading) return

    // 1. Check if user is authenticated
    if (!user) {
      navigate('/admin/login')
      return
    }

    // 2. Check role ONLY if it has been loaded
    if (role !== null) {
      const allowedRoles = ['admin', 'super_admin', 'editor']
      if (!allowedRoles.includes(role)) {
        console.warn('Unauthorized access attempt by', user.email)
        toast({
          title: 'Acesso Negado',
          description:
            'Você não tem permissão para acessar a área administrativa.',
          variant: 'destructive',
        })
        navigate('/')
      }
    }
  }, [user, role, loading, navigate, toast])

  // Show loader if:
  // 1. Auth is initializing (loading === true)
  // 2. User is authenticated but role is still being fetched (user && role === null)
  if (loading || (user && role === null)) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <div className="text-sm text-muted-foreground">
            Verificando acesso...
          </div>
        </div>
      </div>
    )
  }

  // Should not render content if no user, effectively waiting for redirect
  if (!user) return null

  // Double check role prevents flash of content before redirect in edge cases
  const allowedRoles = ['admin', 'super_admin', 'editor']
  if (role && !allowedRoles.includes(role)) return null

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
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  )
}
