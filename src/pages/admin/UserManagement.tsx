import { useEffect, useState } from 'react'
import { getAllProfiles, deleteUserProfile } from '@/services/admin'
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
import { Pencil, Trash2, Loader2, ShieldAlert } from 'lucide-react'

export default function UserManagement() {
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const { user, role, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  // Edit State
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  // Delete State
  const [deletingUser, setDeletingUser] = useState<UserProfile | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

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
    // Only load profiles if user has sufficient permission
    if (!authLoading && (role === 'super_admin' || role === 'admin')) {
      loadProfiles()
    } else if (
      !authLoading &&
      role &&
      role !== 'super_admin' &&
      role !== 'admin'
    ) {
      // If auth loaded but role is insufficient, stop loading spinner for data
      setLoading(false)
    }
  }, [role, authLoading])

  // 1. Loading State (Auth or Data)
  if (authLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // 2. Permission Check
  if (role !== 'super_admin' && role !== 'admin') {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center animate-fade-in">
        <div className="rounded-full bg-destructive/10 p-4">
          <ShieldAlert className="h-10 w-10 text-destructive" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Acesso Restrito</h2>
          <p className="text-muted-foreground max-w-md mt-2">
            Você não tem permissão para gerenciar usuários. Esta seção é
            reservada para administradores.
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin')}>
          Voltar ao Dashboard
        </Button>
      </div>
    )
  }

  // 3. Main Content
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage user roles, permissions and accounts.
          </p>
        </div>
        <CreateUserDialog onSuccess={loadProfiles} />
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Info</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  <div className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Loading users...
                  </div>
                </TableCell>
              </TableRow>
            ) : profiles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
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
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(profile)}
                        disabled={role !== 'super_admin'}
                        title={
                          role !== 'super_admin'
                            ? 'Only Super Admin can edit roles'
                            : 'Edit user role'
                        }
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDeleteClick(profile)}
                        disabled={
                          role !== 'super_admin' || profile.id === user?.id
                        }
                        title={
                          role !== 'super_admin'
                            ? 'Only Super Admin can delete users'
                            : 'Delete user'
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
