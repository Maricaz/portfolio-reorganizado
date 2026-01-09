import { Home, User, FileText, Code, BookOpen, Music, Mail } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export function AppSidebar() {
  const { t } = useLanguage()
  const location = useLocation()
  const { setOpenMobile } = useSidebar()

  const items = [
    { title: t.nav.home, url: '/', icon: Home },
    { title: t.nav.about, url: '/about', icon: User },
    { title: t.nav.resume, url: '/resume', icon: FileText },
    { title: t.nav.projects, url: '/it', icon: Code },
    { title: t.nav.books, url: '/books', icon: BookOpen },
    { title: t.nav.music, url: '/music', icon: Music },
    { title: t.nav.contact, url: '/contact', icon: Mail },
  ]

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-border bg-sidebar/95 backdrop-blur-md"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">M</span>
          </div>
          <span className="font-bold text-lg tracking-tight group-data-[collapsible=icon]:hidden">
            Mariana
          </span>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      onClick={() => setOpenMobile(false)}
                      className={cn(
                        'transition-all duration-200',
                        isActive && 'font-medium',
                      )}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
