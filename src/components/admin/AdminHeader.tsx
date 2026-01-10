import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Notifications } from '@/components/admin/Notifications'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { useState } from 'react'

export const AdminHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <AdminSidebar onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex-1">
        <h1 className="text-lg font-semibold md:hidden">Admin Panel</h1>
      </div>

      <div className="flex items-center gap-2">
        <Notifications />
      </div>
    </header>
  )
}
