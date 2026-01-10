import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { BookOpen, Music, FileText, Plus, ArrowRight } from 'lucide-react'

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    books: 0,
    tracks: 0,
    resumeItems: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const { count: booksCount } = await supabase
        .from('books')
        .select('*', { count: 'exact', head: true })

      const { count: tracksCount } = await supabase
        .from('music_tracks')
        .select('*', { count: 'exact', head: true })

      const { count: expCount } = await supabase
        .from('resume_experience')
        .select('*', { count: 'exact', head: true })

      const { count: eduCount } = await supabase
        .from('resume_education')
        .select('*', { count: 'exact', head: true })

      setStats({
        books: booksCount || 0,
        tracks: tracksCount || 0,
        resumeItems: (expCount || 0) + (eduCount || 0),
      })
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) return <div className="p-8">Loading stats...</div>

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">
            Welcome back, Admin
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.books}</div>
            <p className="text-xs text-muted-foreground">Books in library</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music Tracks</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tracks}</div>
            <p className="text-xs text-muted-foreground">Uploaded tracks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resume Entries
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.resumeItems}</div>
            <p className="text-xs text-muted-foreground">
              Experience & Education
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50"
            asChild
          >
            <Link to="/admin/books">
              <Plus className="h-6 w-6" />
              <span>Add New Book</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50"
            asChild
          >
            <Link to="/admin/music">
              <Plus className="h-6 w-6" />
              <span>Add New Track</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50"
            asChild
          >
            <Link to="/admin/resume">
              <Plus className="h-6 w-6" />
              <span>Update Resume</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="link" asChild>
          <Link to="/" className="flex items-center gap-1">
            Go to Public Site <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
