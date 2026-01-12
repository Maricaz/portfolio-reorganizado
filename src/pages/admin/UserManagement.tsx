import { useEffect, useState } from 'react'
import {
  getAllProfiles,
  deleteUserProfile,
  toggleUserBan,
  triggerPasswordReset,
} from '@/services/admin'
import { UserProfile } from '@/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { CreateUserDialog } from '@/components/admin/CreateUserDialog'
import { EditUserDialog } from '@/components/admin/EditUserDialog'
import {
  Pencil,
  Trash2,
  Loader2,
  ShieldAlert,
  Ban,
  CheckCircle,
  KeyRound,
  MoreVertical,
} from 'lucide-react'
import { ExportButton } from '@/components/admin/ExportButton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function UserManagement() {
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const { user, role, hasPermission, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  // Edit State
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  // Delete State
  const [deletingUser, setDeletingUser] = useState<UserProfile | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  // Processing State
  const [processingId, setProcessingId] = useState<string | null>(null)

  const loadProfiles = async () => {
    setLoading(true)
    try {
      const data = await getAllProfiles()
      setProfiles(data || [])
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load user profiles',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!authLoading) {
      if (hasPermission('users')) {
        loadProfiles()
      } else {
        setLoading(false)
      }
    }
  }, [authLoading, role]) // Simplified dep array

  const handleEditClick = (profile: UserProfile) => {
    setEditingUser(profile)
    setEditDialogOpen(true)
  }

  const handleDeleteClick = (profile: UserProfile) => {
    setDeletingUser(profile)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!deletingUser) return
    setIsDeleting(true)
    try {
      await deleteUserProfile(deletingUser.id)
      toast({ title: 'Success', description: 'User deleted' })
      setProfiles((prev) => prev.filter((p) => p.id !== deletingUser.id))
      setDeleteDialogOpen(false)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete user',
        variant: 'destructive',
      })
    } finally {
      setIsDeleting(false)
      setDeletingUser(null)
    }
  }

  const handleToggleBan = async (profile: UserProfile) => {
    if (!profile.id) return
    setProcessingId(profile.id)
    try {
      const newStatus = !profile.is_banned
      await toggleUserBan(profile.id, newStatus)
      setProfiles((prev) =>
        prev.map((p) =>
          p.id === profile.id ? { ...p, is_banned: newStatus } : p,
        ),
      )
      toast({
        title: 'Success',
        description: `User ${newStatus ? 'banned' : 'unbanned'} successfully`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update user status',
        variant: 'destructive',
      })
    } finally {
      setProcessingId(null)
    }
  }

  const handleResetPassword = async (email: string) => {
    if (!email) return
    try {
      await triggerPasswordReset(email)
      toast({
        title: 'Email Sent',
        description: `Password reset email sent to ${email}`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send password reset email',
        variant: 'destructive',
      })
    }
  }

  if (authLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!hasPermission('users')) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center animate-fade-in">
        <div className="rounded-full bg-destructive/10 p-4">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Access Restricted</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            You do not have permission to manage users.
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin')}>
          Back to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage user roles, permissions and accounts.
          </p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={profiles} filename="users_export" />
          <CreateUserDialog onSuccess={loadProfiles} />
        </div>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Info</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <div className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Loading users...
                  </div>
                </TableCell>
              </TableRow>
            ) : profiles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              profiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">
                        {profile.email || 'No email available'}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {profile.id}
                        {profile.id === user?.id && (
                          <Badge variant="secondary" className="ml-2 h-4 px-1">
                            You
                          </Badge>
                        )}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(profile.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        profile.role === 'super_admin'
                          ? 'border-primary text-primary'
                          : profile.role === 'admin'
                            ? 'border-blue-500 text-blue-500'
                            : ''
                      }
                    >
                      {profile.role || 'user'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {profile.role === 'super_admin' ? (
                      <span className="text-xs text-muted-foreground">All</span>
                    ) : profile.permissions ? (
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(profile.permissions)
                          .filter(([, v]) => v)
                          .map(([k]) => (
                            <Badge
                              key={k}
                              variant="secondary"
                              className="text-[10px]"
                            >
                              {k}
                            </Badge>
                          ))}
                        {Object.values(profile.permissions).every(
                          (v) => !v,
                        ) && (
                          <span className="text-xs text-muted-foreground">
                            None
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        None
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {profile.is_banned ? (
                      <Badge variant="destructive" className="gap-1">
                        <Ban className="h-3 w-3" /> Banned
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-200 gap-1"
                      >
                        <CheckCircle className="h-3 w-3" /> Active
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => handleEditClick(profile)}
                          disabled={
                            role !== 'super_admin' && role !== 'admin'
                            // Admin can edit other users but maybe not super_admins
                          }
                        >
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Role & Perms
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleResetPassword(profile.email!)}
                        >
                          <KeyRound className="mr-2 h-4 w-4" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleToggleBan(profile)}
                          disabled={
                            profile.id === user?.id ||
                            (role !== 'super_admin' &&
                              profile.role === 'super_admin')
                          }
                        >
                          {profile.is_banned ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                              Unban User
                            </>
                          ) : (
                            <>
                              <Ban className="mr-2 h-4 w-4 text-destructive" />
                              Ban User
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(profile)}
                          className="text-destructive focus:text-destructive"
                          disabled={
                            role !== 'super_admin' || profile.id === user?.id
                          }
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <EditUserDialog
        user={editingUser}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSuccess={loadProfiles}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              user account and remove their data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault()
                confirmDelete()
              }}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
