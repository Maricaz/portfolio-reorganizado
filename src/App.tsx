import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Shell from './components/Shell'
import { Skeleton } from '@/components/ui/skeleton'
import { AnalyticsInit } from '@/components/AnalyticsInit'
import { RouteChangeTracker } from '@/components/RouteChangeTracker'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/hooks/use-auth'
import { ThemeSynchronizer } from '@/components/ThemeSynchronizer'

// Lazy loaded pages
const Index = lazy(() => import('./pages/Index'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const ITPage = lazy(() => import('./pages/ITPage'))
const BooksPage = lazy(() => import('./pages/BooksPage'))
const MusicPage = lazy(() => import('./pages/MusicPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Admin Pages
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/DashboardOverview'))
const BooksManager = lazy(() => import('./pages/admin/BooksManager'))
const MusicManager = lazy(() => import('./pages/admin/MusicManager'))
const ResumeManager = lazy(() => import('./pages/admin/ResumeManager'))
const SettingsManager = lazy(() => import('./pages/admin/SettingsManager'))
const UserManagement = lazy(() => import('./pages/admin/UserManagement'))
const AuditLogs = lazy(() => import('./pages/admin/AuditLogs'))
const ContactManager = lazy(() => import('./pages/admin/ContactManager'))

const PageLoader = () => (
  <div className="p-8 space-y-4 max-w-4xl mx-auto">
    <Skeleton className="h-12 w-1/3 mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="h-64 w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  </div>
)

const ServiceWorkerRegister = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW registered:', registration)
          })
          .catch((registrationError) => {
            console.log('SW registration failed:', registrationError)
          })
      })
    }
  }, [])
  return null
}

const App = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <ServiceWorkerRegister />
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ThemeSynchronizer />
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AnalyticsInit />
            <RouteChangeTracker />
            <Routes>
              {/* Public Routes */}
              <Route element={<Shell />}>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Index />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <AboutPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/resume"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ResumePage />
                    </Suspense>
                  }
                />
                <Route
                  path="/it"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ITPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/books"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <BooksPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/music"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <MusicPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/music/:trackId"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <MusicPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <ContactPage />
                    </Suspense>
                  }
                />
              </Route>

              {/* Admin Routes - Login bypassed */}
              <Route
                path="/admin/login"
                element={<Navigate to="/admin" replace />}
              />
              <Route
                path="/admin"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <AdminLayout />
                  </Suspense>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="contacts" element={<ContactManager />} />
                <Route path="books" element={<BooksManager />} />
                <Route path="music" element={<MusicManager />} />
                <Route path="resume" element={<ResumeManager />} />
                <Route path="settings" element={<SettingsManager />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="audit-logs" element={<AuditLogs />} />
              </Route>

              {/* Catch-all */}
              <Route
                path="*"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Shell />
                  </Suspense>
                }
              >
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
