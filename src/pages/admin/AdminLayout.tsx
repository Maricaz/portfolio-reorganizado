import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'
import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout() {
  const { user, role, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/admin/login')
      } else {
        const allowedRoles = ['admin', 'super_admin', 'editor']
        if (role && !allowedRoles.includes(role)) {
          console.warn('Unauthorized access attempt by', user.email)
          navigate('/')
        }
      }
    }
  }, [user, role, loading, navigate])

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/20"></div>
          <div className="text-sm text-muted-foreground">
            Verifying access...
          </div>
        </div>
      </div>
    )

  if (!user) return null

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
