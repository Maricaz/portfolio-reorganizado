import { useEffect, useState } from 'react'
import { Bell, Check, Loader2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from '@/services/admin'
import { Notification } from '@/types'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const fetchNotifications = async () => {
    setLoading(true)
    try {
      const data = await getNotifications()
      setNotifications(data || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
    // Simple polling for new notifications
    const interval = setInterval(fetchNotifications, 60000)
    return () => clearInterval(interval)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleMarkAsRead = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    try {
      await markNotificationAsRead(id)
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsAsRead()
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px]"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-semibold">Notifications</h4>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs h-auto py-1"
              onClick={handleMarkAllRead}
            >
              Mark all read
            </Button>
          )}
        </div>
        <ScrollArea className="h-[300px]">
          {loading && notifications.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Loading...
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-sm">
              No notifications
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => {
                const Content = (
                  <div
                    className={cn(
                      'p-4 transition-colors hover:bg-muted/50 flex gap-3 cursor-pointer',
                      !notification.read && 'bg-muted/20',
                    )}
                    onClick={() => {
                      if (!notification.read) {
                        handleMarkAsRead(notification.id)
                      }
                      if (notification.link) {
                        setOpen(false)
                      }
                    }}
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={cn(
                            'text-sm font-medium leading-none',
                            !notification.read && 'font-semibold',
                          )}
                        >
                          {notification.title}
                        </p>
                        {notification.link && (
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground/60">
                        {new Date(notification.created_at).toLocaleDateString()}{' '}
                        {new Date(notification.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 shrink-0"
                        onClick={(e) => handleMarkAsRead(notification.id, e)}
                      >
                        <Check className="h-3 w-3" />
                        <span className="sr-only">Mark read</span>
                      </Button>
                    )}
                  </div>
                )

                return notification.link ? (
                  <Link
                    key={notification.id}
                    to={notification.link}
                    className="block"
                  >
                    {Content}
                  </Link>
                ) : (
                  <div key={notification.id}>{Content}</div>
                )
              })}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
