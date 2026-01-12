import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import {
  BookOpen,
  Music,
  FileText,
  Plus,
  ArrowRight,
  Users,
  Activity,
  MessageSquare,
  ListMusic,
} from 'lucide-react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts'

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    books: 0,
    tracks: 0,
    playlists: 0,
    submissions: 0,
    uniqueVisitors: 0,
  })
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      // 1. Counts
      const { count: booksCount } = await supabase
        .from('books')
        .select('*', { count: 'exact', head: true })

      const { count: tracksCount } = await supabase
        .from('music_tracks')
        .select('*', { count: 'exact', head: true })

      const { count: playlistsCount } = await supabase
        .from('playlists')
        .select('*', { count: 'exact', head: true })

      const { count: submissionsCount } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true })

      // Note: "Unique Visitors" is a proxy here, counting distinct IPs or sessions from audit_logs
      // Since audit_logs might not have IP, we'll just count total logs for now as "Activity"
      const { count: activityCount } = await supabase
        .from('audit_logs')
        .select('*', { count: 'exact', head: true })

      setStats({
        books: booksCount || 0,
        tracks: tracksCount || 0,
        playlists: playlistsCount || 0,
        submissions: submissionsCount || 0,
        uniqueVisitors: activityCount || 0,
      })

      // 2. Recent Activity (Merging Submissions and Logs)
      const { data: recentSubmissions } = await supabase
        .from('contact_submissions')
        .select('id, name, created_at, message')
        .order('created_at', { ascending: false })
        .limit(5)

      const { data: recentLogs } = await supabase
        .from('audit_logs')
        .select('id, action, table_name, created_at')
        .order('created_at', { ascending: false })
        .limit(5)

      const combined = [
        ...(recentSubmissions || []).map((s) => ({
          ...s,
          type: 'submission',
          label: `Message from ${s.name}`,
        })),
        ...(recentLogs || []).map((l) => ({
          ...l,
          type: 'log',
          label: `${l.action} on ${l.table_name}`,
        })),
      ]
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        )
        .slice(0, 5)

      setRecentActivity(combined)
      setLoading(false)
    }

    fetchData()
  }, [])

  const chartData = [
    { name: 'Books', count: stats.books },
    { name: 'Music', count: stats.tracks },
    { name: 'Playlists', count: stats.playlists },
    { name: 'Messages', count: stats.submissions },
  ]

  const chartConfig = {
    count: {
      label: 'Total Items',
      color: 'hsl(var(--primary))',
    },
  }

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">
            Overview & Statistics
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activity Logs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.uniqueVisitors}</div>
            <p className="text-xs text-muted-foreground">
              Total system actions recorded
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Library Size</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.books}</div>
            <p className="text-xs text-muted-foreground">Books curated</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music DB</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tracks}</div>
            <p className="text-xs text-muted-foreground">
              Tracks across {stats.playlists} playlists
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.submissions}</div>
            <p className="text-xs text-muted-foreground">
              Contact form submissions
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Content Overview</CardTitle>
            <CardDescription>
              Distribution of content across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="count"
                  fill="var(--color-count)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No recent activity found.
                </p>
              ) : (
                recentActivity.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.type === 'submission'
                          ? 'Contact Form'
                          : 'System Log'}
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-xs text-muted-foreground">
                      {new Date(item.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors"
            asChild
          >
            <Link to="/admin/books">
              <Plus className="h-6 w-6" />
              <span>Add New Book</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors"
            asChild
          >
            <Link to="/admin/music">
              <Plus className="h-6 w-6" />
              <span>Add New Track</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors"
            asChild
          >
            <Link to="/admin/users">
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
