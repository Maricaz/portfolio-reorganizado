import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout() {
  const { user, role, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/admin/login')
      } else if (role && role !== 'admin') {
        // Optionally redirect to a forbidden page or home
        // For now, redirect to login/home
        console.warn('Unauthorized access attempt by', user.email)
        navigate('/')
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

  // Extra safety check
  if (!user || role !== 'admin') return null

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-muted/5 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Toaster />
    </div>
  )
}
