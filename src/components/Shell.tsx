import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAuth } from '@/hooks/use-auth'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Menu,
  Github,
  Linkedin,
  Youtube,
  Home,
  User,
  FileText,
  Code,
  BookOpen,
  Music,
  Mail,
  LayoutDashboard,
} from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
} from '@/components/ui/drawer'

export default function Shell() {
  const { t } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { session } = useAuth()

  const navItems = [
    { title: t.nav.home, url: '/', icon: Home },
    { title: t.nav.about, url: '/about', icon: User },
    { title: t.nav.resume, url: '/resume', icon: FileText },
    { title: t.nav.projects, url: '/it', icon: Code },
    { title: t.nav.music, url: '/music', icon: Music },
    { title: t.nav.books, url: '/books', icon: BookOpen },
    { title: t.nav.contact, url: '/contact', icon: Mail },
    {
      title: t.nav.admin,
      url: '/admin/login',
      icon: LayoutDashboard,
    },
  ]

  const LATTES_URL = 'http://lattes.cnpq.br/1234567890'

  const SocialLinks = () => (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Youtube className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="mr-4 flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight">
                Mariana Azevedo
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={cn(
                  'transition-colors hover:text-foreground/80 relative',
                  location.pathname === item.url
                    ? 'text-foreground font-semibold after:absolute after:left-0 after:-bottom-5 after:h-0.5 after:w-full after:bg-primary'
                    : 'text-foreground/60',
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="hidden md:flex">
              <SocialLinks />
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitch />
            </div>

            {/* Mobile Menu Drawer */}
            <div className="md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle className="text-center text-lg">
                        Menu
                      </DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                          <DrawerClose key={item.url} asChild>
                            <Link
                              to={item.url}
                              className={cn(
                                'flex items-center gap-4 rounded-md p-3 text-base font-medium transition-colors hover:bg-muted',
                                location.pathname === item.url
                                  ? 'bg-muted font-semibold'
                                  : '',
                              )}
                            >
                              <item.icon className="h-5 w-5" />
                              {item.title}
                            </Link>
                          </DrawerClose>
                        ))}
                      </nav>
                    </div>
                    <DrawerFooter className="pt-8">
                      <div className="flex justify-center gap-4 pb-4">
                        <SocialLinks />
                      </div>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-screen-2xl mx-auto p-4 md:p-8 animate-fade-in">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12 bg-muted/20">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row max-w-screen-2xl">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Mariana Azevedo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LATTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline text-primary"
            >
              Curriculum Lattes
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
