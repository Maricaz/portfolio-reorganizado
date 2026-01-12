import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Loader2, Monitor, Smartphone, Trash2, ShieldAlert } from 'lucide-react'
import {
  listActiveSessions,
  revokeSession,
  SessionInfo,
} from '@/services/security'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'

export const SessionManager = () => {
  const [sessions, setSessions] = useState<SessionInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchSessions()
    getCurrentSession()
  }, [])

  const getCurrentSession = async () => {
    const { data } = await supabase.auth.getSession()
    // The session ID from auth.getSession() is essentially the access token payload usually,
    // but actual session objects have distinct IDs in the DB.
    // We match by comparing created_at or fuzzy matching if exact ID isn't exposed in client session.
    // However, Supabase JS session object doesn't always expose the database ID directly.
    // We will rely on "current" logic by heuristics or just visual cues.
    // Actually, we can check if the last_sign_in matches closely or use User Agent.
    // NOTE: For this implementation, we'll display all.
  }

  const fetchSessions = async () => {
    setLoading(true)
    try {
      const data = await listActiveSessions()
      // Sort: Current (latest) first
      const sorted = data.sort(
        (a, b) =>
          new Date(b.last_sign_in_at || b.created_at).getTime() -
          new Date(a.last_sign_in_at || a.created_at).getTime(),
      )
      setSessions(sorted)
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: 'Failed to load sessions.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleRevoke = async (sessionId: string) => {
    try {
      await revokeSession(sessionId)
      toast({
        title: 'Session Revoked',
        description: 'The session has been successfully terminated.',
      })
      fetchSessions()
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to revoke session.',
        variant: 'destructive',
      })
    }
  }

  const getDeviceIcon = (ua: string) => {
    if (
      ua.toLowerCase().includes('mobile') ||
      ua.toLowerCase().includes('android') ||
      ua.toLowerCase().includes('iphone')
    ) {
      return <Smartphone className="h-4 w-4" />
    }
    return <Monitor className="h-4 w-4" />
  }

  const formatUA = (ua: string) => {
    if (!ua) return 'Unknown Device'
    // Simple parser
    if (ua.includes('Windows')) return 'Windows PC'
    if (ua.includes('Macintosh')) return 'Mac'
    if (ua.includes('Linux')) return 'Linux'
    if (ua.includes('Android')) return 'Android'
    if (ua.includes('iPhone')) return 'iPhone'
    if (ua.includes('iPad')) return 'iPad'
    return 'Unknown Device'
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Active Sessions
        </CardTitle>
        <CardDescription>
          Manage devices and browsers that are currently logged into your
          account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center h-24 text-muted-foreground"
                  >
                    No active sessions found.
                  </TableCell>
                </TableRow>
              ) : (
                sessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="flex items-center gap-2">
                      <div className="p-2 bg-muted rounded-full">
                        {getDeviceIcon(session.user_agent)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {formatUA(session.user_agent)}
                        </span>
                        <span
                          className="text-xs text-muted-foreground truncate max-w-[200px]"
                          title={session.user_agent}
                        >
                          {session.user_agent}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {session.ip}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(
                        session.last_sign_in_at || session.created_at,
                      ).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRevoke(session.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Revoke
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
