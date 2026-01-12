import { useState, useEffect } from 'react'
import {
  getContactSubmissions,
  deleteContactSubmission,
} from '@/services/contact'
import { ContactSubmission } from '@/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Trash, Loader2, Mail, ExternalLink } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ExportButton } from '@/components/admin/ExportButton'

export default function ContactManager() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const loadSubmissions = async () => {
    try {
      setLoading(true)
      const data = await getContactSubmissions()
      setSubmissions(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load submissions',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSubmissions()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    try {
      await deleteContactSubmission(id)
      setSubmissions((prev) => prev.filter((s) => s.id !== id))
      toast({ title: 'Success', description: 'Message deleted' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete message',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Contact Messages
          </h2>
          <p className="text-muted-foreground">
            Manage incoming messages from the contact form.
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={submissions} filename="contact_submissions" />
          <Button onClick={loadSubmissions} variant="outline" size="sm">
            Refresh
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 space-y-2">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Loading messages...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 space-y-2 text-center">
            <div className="rounded-full bg-muted p-3">
              <Mail className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No messages yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Messages sent through the contact form will appear here.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="whitespace-nowrap">
                    {new Date(submission.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="font-medium">
                    {submission.name}
                  </TableCell>
                  <TableCell>
                    <a
                      href={`mailto:${submission.email}`}
                      className="hover:underline flex items-center gap-1"
                    >
                      {submission.email}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {submission.message}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Message Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-semibold block text-muted-foreground">
                                  From
                                </span>
                                {submission.name}
                              </div>
                              <div>
                                <span className="font-semibold block text-muted-foreground">
                                  Date
                                </span>
                                {new Date(
                                  submission.created_at,
                                ).toLocaleString()}
                              </div>
                              <div className="col-span-2">
                                <span className="font-semibold block text-muted-foreground">
                                  Email
                                </span>
                                <a
                                  href={`mailto:${submission.email}`}
                                  className="text-primary hover:underline"
                                >
                                  {submission.email}
                                </a>
                              </div>
                            </div>
                            <div className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap">
                              {submission.message}
                            </div>
                            {submission.origin && (
                              <div className="text-xs text-muted-foreground">
                                Origin: {submission.origin}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(submission.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
