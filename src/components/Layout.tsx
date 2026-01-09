import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/hooks/use-auth'
import { Shell } from '@/components/Shell'

export default function Layout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <AuthProvider>
          <Shell>
            <Outlet />
          </Shell>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
