import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { cn } from '@/lib/utils'

export default function Layout() {
  const { t } = useLanguage()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/it', label: t.nav.projects },
    { href: '/books', label: t.nav.books },
    { href: '/music', label: t.nav.music },
    { href: '/resume', label: t.nav.resume },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b shadow-sm py-2'
            : 'bg-transparent py-4',
        )}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight z-50">
            Mariana Azevedo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="h-4 w-px bg-border" />
            <LanguageSwitch />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitch />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        'text-lg font-medium py-2 border-b border-border/50 transition-colors',
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Mariana Azevedo.{' '}
              {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
