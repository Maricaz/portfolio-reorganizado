import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  BookOpen,
  Music,
  FileText,
  Settings,
  Home,
  Users,
  ShieldAlert,
  MessageSquare,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { useAuth } from '@/hooks/use-auth'

interface AdminSidebarProps {
  onNavigate?: () => void
}

export const AdminSidebar = ({ onNavigate }: AdminSidebarProps) => {
  const location = useLocation()
  const { hasPermission, signOut } = useAuth()
  const navigate = useNavigate()

  const allItems = [
    {
      title: 'Overview',
      url: '/admin',
      icon: LayoutDashboard,
      alwaysShow: true,
    },
    {
      title: 'Contacts',
      url: '/admin/contacts',
      icon: MessageSquare,
      permission: 'content',
    },
    {
      title: 'Books',
      url: '/admin/books',
      icon: BookOpen,
      permission: 'content',
    },
    {
      title: 'Music',
      url: '/admin/music',
      icon: Music,
      permission: 'content',
    },
    {
      title: 'Resume',
      url: '/admin/resume',
      icon: FileText,
      permission: 'content',
    },
    {
      title: 'Audit Logs',
      url: '/admin/audit-logs',
      icon: ShieldAlert,
      permission: 'audit',
    },
    {
      title: 'Settings',
      url: '/admin/settings',
      icon: Settings,
      permission: 'settings',
    },
    {
      title: 'Users',
      url: '/admin/users',
      icon: Users,
      permission: 'users',
    },
  ]

  const items = allItems.filter(
    (item) => item.alwaysShow || hasPermission(item.permission as any),
  )

  const handleLogout = async () => {
    await signOut()
    navigate('/admin/login')
  }

  return (
    <div className="flex flex-col h-full w-full bg-card border-r">
      <div className="p-6 h-16 flex items-center">
        <h2 className="text-xl font-bold tracking-tight">Admin</h2>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            onClick={onNavigate}
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
      <div className="p-4 border-t space-y-4 mt-auto">
        <div className="flex justify-center">
          <LanguageSwitch />
        </div>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              View Site
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
