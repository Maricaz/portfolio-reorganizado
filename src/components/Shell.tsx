import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
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

interface ShellProps {
  children: React.ReactNode
}

export function Shell({ children }: ShellProps) {
  const { t } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navItems = [
    { title: t.nav.home, url: '/', icon: Home },
    { title: t.nav.about, url: '/about', icon: User },
    { title: t.nav.resume, url: '/resume', icon: FileText },
    { title: t.nav.it, url: '/it', icon: Code },
    { title: t.nav.music, url: '/music', icon: Music },
    { title: t.nav.books, url: '/books', icon: BookOpen },
    { title: t.nav.contact, url: '/contact', icon: Mail },
  ]

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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="mr-4 flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Mariana Azevedo</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  location.pathname === item.url
                    ? 'text-foreground'
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
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Drawer */}
            <div className="md:hidden">
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle className="text-center">Menu</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                          <DrawerClose key={item.url} asChild>
                            <Link
                              to={item.url}
                              className={cn(
                                'flex items-center gap-4 rounded-md p-3 text-sm font-medium transition-colors hover:bg-muted',
                                location.pathname === item.url
                                  ? 'bg-muted'
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
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with React, Supabase & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  )
}
