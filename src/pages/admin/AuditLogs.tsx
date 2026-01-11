import { useEffect, useState } from 'react'
import { getAuditLogs, AuditLog } from '@/services/audit'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, Loader2, RefreshCw } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function AuditLogs() {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null)

  useEffect(() => {
    fetchLogs()
  }, [])

  const fetchLogs = async () => {
    setLoading(true)
    const data = await getAuditLogs()
    setLogs(data)
    setLoading(false)
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case 'INSERT':
        return 'bg-green-500 hover:bg-green-600'
      case 'UPDATE':
        return 'bg-blue-500 hover:bg-blue-600'
      case 'DELETE':
        return 'bg-red-500 hover:bg-red-600'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Audit Logs</h1>
          <p className="text-muted-foreground">
            Track system changes and activity.
          </p>
        </div>
        <Button variant="outline" onClick={fetchLogs} disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Refresh
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Change History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Table</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {new Date(log.created_at).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getActionColor(log.action)} text-white`}
                    >
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {log.table_name}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {log.user_id ? log.user_id.split('-')[0] + '...' : 'System'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedLog(log)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {!loading && logs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No activity recorded yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedLog}
        onOpenChange={(open) => !open && setSelectedLog(null)}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Audit Log Details</DialogTitle>
            <DialogDescription>
              {selectedLog?.action} on {selectedLog?.table_name} at{' '}
              {selectedLog && new Date(selectedLog.created_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-hidden min-h-[300px]">
            <div className="flex flex-col gap-2 h-full">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Old Data (Before)
              </h4>
              <ScrollArea className="flex-1 rounded-md border p-4 bg-muted/30">
                {selectedLog?.old_data ? (
                  <pre className="text-xs font-mono whitespace-pre-wrap break-all text-muted-foreground">
                    {JSON.stringify(selectedLog.old_data, null, 2)}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm italic">
                    No previous data
                  </div>
                )}
              </ScrollArea>
            </div>

            <div className="flex flex-col gap-2 h-full">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                New Data (After)
              </h4>
              <ScrollArea className="flex-1 rounded-md border p-4 bg-muted/30">
                {selectedLog?.new_data ? (
                  <pre className="text-xs font-mono whitespace-pre-wrap break-all text-muted-foreground">
                    {JSON.stringify(selectedLog.new_data, null, 2)}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm italic">
                    Deleted
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
