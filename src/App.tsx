import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'
import { Skeleton } from '@/components/ui/skeleton'
import { AnalyticsInit } from '@/components/AnalyticsInit'

// Lazy loaded pages
const Index = lazy(() => import('./pages/Index'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const ITPage = lazy(() => import('./pages/ITPage'))
const BooksPage = lazy(() => import('./pages/BooksPage'))
const MusicPage = lazy(() => import('./pages/MusicPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

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

const App = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnalyticsInit />
      <Routes>
        <Route element={<Layout />}>
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
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
