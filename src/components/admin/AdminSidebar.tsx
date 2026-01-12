import { Link, useLocation } from 'react-router-dom'
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
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminSidebarProps {
  onNavigate?: () => void
}

export const AdminSidebar = ({ onNavigate }: AdminSidebarProps) => {
  const location = useLocation()

  const items = [
    {
      title: 'Overview',
      url: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Contacts',
      url: '/admin/contacts',
      icon: MessageSquare,
    },
    {
      title: 'Books',
      url: '/admin/books',
      icon: BookOpen,
    },
    {
      title: 'Music',
      url: '/admin/music',
      icon: Music,
    },
    {
      title: 'Resume',
      url: '/admin/resume',
      icon: FileText,
    },
    {
      title: 'Audit Logs',
      url: '/admin/audit-logs',
      icon: ShieldAlert,
    },
    {
      title: 'Settings',
      url: '/admin/settings',
      icon: Settings,
    },
    {
      title: 'Users',
      url: '/admin/users',
      icon: Users,
    },
  ]

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
      <div className="p-4 border-t space-y-2 mt-auto">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            View Site
          </Link>
        </Button>
      </div>
    </div>
  )
}
