import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login')
    }
  }, [user, loading, navigate])

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  if (!user) return null

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
      <Toaster />
    </div>
  )
}
