import { Outlet } from 'react-router-dom'
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/hooks/use-auth'

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LanguageProvider>
        <AuthProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/60 px-4 backdrop-blur-md transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-14">
                <SidebarTrigger />
                <div className="flex-1" />
                <LanguageSwitcher />
              </header>
              <main className="flex-1 overflow-hidden p-4 md:p-8 animate-fade-in relative">
                <Outlet />
              </main>
            </SidebarInset>
          </SidebarProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
