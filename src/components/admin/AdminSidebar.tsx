import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  BookOpen,
  Music,
  FileText,
  Settings,
  LogOut,
  Home,
  Users,
} from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Notifications } from '@/components/admin/Notifications'
import { Separator } from '@/components/ui/separator'

export const AdminSidebar = () => {
  const location = useLocation()
  const { signOut, role } = useAuth()

  const items = [
    {
      title: 'Overview',
      url: '/admin',
      icon: LayoutDashboard,
      roles: ['super_admin', 'admin', 'editor'],
    },
    {
      title: 'Books',
      url: '/admin/books',
      icon: BookOpen,
      roles: ['super_admin', 'admin', 'editor'],
    },
    {
      title: 'Music',
      url: '/admin/music',
      icon: Music,
      roles: ['super_admin', 'admin', 'editor'],
    },
    {
      title: 'Resume',
      url: '/admin/resume',
      icon: FileText,
      roles: ['super_admin', 'admin', 'editor'],
    },
    {
      title: 'Settings',
      url: '/admin/settings',
      icon: Settings,
      roles: ['super_admin', 'admin'],
    },
    {
      title: 'Users',
      url: '/admin/users',
      icon: Users,
      roles: ['super_admin'],
    },
  ]

  const filteredItems = items.filter((item) =>
    item.roles.includes(role || 'user'),
  )

  return (
    <div className="flex flex-col h-full w-64 bg-card border-r">
      <div className="p-6 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight">Admin</h2>
        <Notifications />
      </div>
      <div className="flex-1 px-3 py-2 space-y-1">
        {filteredItems.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              location.pathname === item.url
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground',
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </div>
      <div className="p-4 border-t space-y-2">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            View Site
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
