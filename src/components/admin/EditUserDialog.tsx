import { useState, useEffect } from 'react'
import { UserProfile, AdminPermissions } from '@/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2 } from 'lucide-react'
import { updateUserRole, updateUserPermissions } from '@/services/admin'
import { useToast } from '@/hooks/use-toast'

interface EditUserDialogProps {
  user: UserProfile | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: () => void
}

export const EditUserDialog = ({
  user,
  open,
  onOpenChange,
  onSuccess,
}: EditUserDialogProps) => {
  const [role, setRole] = useState<string>('user')
  const [permissions, setPermissions] = useState<AdminPermissions>({})
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      setRole(user.role || 'user')
      setPermissions(user.permissions || {})
    }
  }, [user])

  const handleSave = async () => {
    if (!user) return
    setLoading(true)
    try {
      await updateUserRole(user.id, role)
      // Only update permissions if role is NOT super_admin (they have all implicitly)
      // But we can save them anyway.
      await updateUserPermissions(user.id, permissions)

      toast({ title: 'Success', description: 'User updated successfully' })
      onSuccess()
      onOpenChange(false)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update user',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const togglePermission = (key: keyof AdminPermissions) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update role and permissions for {user?.email}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <div className="col-span-3">
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {role !== 'user' && role !== 'super_admin' && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Granular Permissions</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="perm-content"
                    checked={permissions.content}
                    onCheckedChange={() => togglePermission('content')}
                  />
                  <Label htmlFor="perm-content">Manage Content</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="perm-users"
                    checked={permissions.users}
                    onCheckedChange={() => togglePermission('users')}
                  />
                  <Label htmlFor="perm-users">Manage Users</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="perm-settings"
                    checked={permissions.settings}
                    onCheckedChange={() => togglePermission('settings')}
                  />
                  <Label htmlFor="perm-settings">Manage Settings</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="perm-audit"
                    checked={permissions.audit}
                    onCheckedChange={() => togglePermission('audit')}
                  />
                  <Label htmlFor="perm-audit">View Audit Logs</Label>
                </div>
              </div>
            </div>
          )}

          {role === 'super_admin' && (
            <div className="rounded-md bg-muted p-3 text-sm text-muted-foreground">
              Super Administrators have full access to all features
              automatically.
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="button" onClick={handleSave} disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
