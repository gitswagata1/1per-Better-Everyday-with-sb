"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Target, 
  Flame, 
  CheckCircle2, 
  Activity,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Calendar
} from "lucide-react"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  LineChart,
  Line,
  ComposedChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell
} from "recharts"
import { cn } from "@/lib/utils"

// Weekly completion data
const weeklyData = [
  { day: "Mon", completion: 80, habits: 4, focusHours: 5.5, productivity: 72 },
  { day: "Tue", completion: 100, habits: 5, focusHours: 6.2, productivity: 88 },
  { day: "Wed", completion: 60, habits: 3, focusHours: 4.8, productivity: 65 },
  { day: "Thu", completion: 80, habits: 4, focusHours: 7.1, productivity: 85 },
  { day: "Fri", completion: 100, habits: 5, focusHours: 5.9, productivity: 78 },
  { day: "Sat", completion: 40, habits: 2, focusHours: 3.2, productivity: 45 },
  { day: "Sun", completion: 60, habits: 3, focusHours: 4.0, productivity: 52 },
]

// Monthly trend data
const monthlyTrend = [
  { week: "W1", consistency: 75, productivity: 68, completion: 72 },
  { week: "W2", consistency: 82, productivity: 75, completion: 78 },
  { week: "W3", consistency: 68, productivity: 62, completion: 65 },
  { week: "W4", consistency: 91, productivity: 88, completion: 89 },
]

// Productivity trends over 30 days
const productivityTrends = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  score: Math.floor(55 + Math.random() * 35 + (i * 0.5)),
  baseline: 70,
}))

// Habit performance data
const habitPerformance = [
  { name: "Morning meditation", completionRate: 92, streak: 7, trend: "up", category: "mindfulness" },
  { name: "30 min exercise", completionRate: 85, streak: 12, trend: "up", category: "fitness" },
  { name: "Read for 20 minutes", completionRate: 78, streak: 5, trend: "stable", category: "learning" },
  { name: "Sleep by 10:30 PM", completionRate: 65, streak: 3, trend: "down", category: "sleep" },
  { name: "No phone first hour", completionRate: 88, streak: 8, trend: "up", category: "productivity" },
]

// Behaviour radar data
const behaviourData = [
  { trait: "Focus", value: 85, fullMark: 100 },
  { trait: "Consistency", value: 74, fullMark: 100 },
  { trait: "Energy", value: 68, fullMark: 100 },
  { trait: "Recovery", value: 82, fullMark: 100 },
  { trait: "Discipline", value: 79, fullMark: 100 },
  { trait: "Balance", value: 71, fullMark: 100 },
]

// Category breakdown
const categoryBreakdown = [
  { category: "Productivity", count: 3, avgCompletion: 88, color: "from-primary to-accent" },
  { category: "Fitness", count: 2, avgCompletion: 85, color: "from-emerald-500 to-teal-500" },
  { category: "Sleep", count: 1, avgCompletion: 65, color: "from-violet-500 to-purple-500" },
  { category: "Learning", count: 2, avgCompletion: 78, color: "from-amber-500 to-orange-500" },
  { category: "Mindfulness", count: 1, avgCompletion: 92, color: "from-cyan-500 to-blue-500" },
]

const categoryColors: Record<string, string> = {
  productivity: "oklch(0.52 0.18 265)",
  fitness: "oklch(0.62 0.18 145)",
  sleep: "oklch(0.58 0.16 285)",
  learning: "oklch(0.68 0.14 80)",
  mindfulness: "oklch(0.58 0.15 200)",
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500" />
  if (trend === "down") return <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
}

export default function AnalyticsPage() {
  const avgCompletion = Math.round(weeklyData.reduce((acc, d) => acc + d.completion, 0) / weeklyData.length)
  const totalHabitsCompleted = weeklyData.reduce((acc, d) => acc + d.habits, 0)
  const avgFocusHours = (weeklyData.reduce((acc, d) => acc + d.focusHours, 0) / weeklyData.length).toFixed(1)
  const consistencyScore = monthlyTrend[monthlyTrend.length - 1].consistency
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-sm">
            <Activity className="mr-1.5 h-3 w-3" />
            Live Analytics
          </Badge>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Behavioural Analytics
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track patterns, measure progress, and optimize your performance
        </p>
      </div>
      
      {/* Key Metrics Grid */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Consistency Score</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">{consistencyScore}</span>
              <span className="text-lg text-muted-foreground">/100</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-500">+9 pts</span>
              <span className="text-sm text-muted-foreground">vs last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Weekly Completion</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">{avgCompletion}%</span>
            </div>
            <div className="mt-3">
              <Progress value={avgCompletion} className="h-2 bg-muted" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                <Zap className="h-5 w-5 text-violet-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Focus Hours</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">{avgFocusHours}</span>
              <span className="text-lg text-muted-foreground">hrs/day</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-500">+0.8h</span>
              <span className="text-sm text-muted-foreground">avg increase</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Active Streaks</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">5</span>
              <span className="text-lg text-muted-foreground">habits</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Longest:</span>
              <span className="text-sm font-semibold text-foreground">12 days</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Section */}
      <Tabs defaultValue="weekly" className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-muted/60">
            <TabsTrigger value="weekly" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">Weekly</TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">Monthly</TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">Trends</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent" />
              <span className="text-muted-foreground">Completion</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-muted-foreground">Productivity</span>
            </span>
          </div>
        </div>
        
        <TabsContent value="weekly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Habit Completion Chart */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">Habit Completion Rate</CardTitle>
                    <CardDescription>Daily completion percentage this week</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    avg: {avgCompletion}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={weeklyData}>
                      <defs>
                        <linearGradient id="completionGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 265)" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                        domain={[0, 100]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid oklch(0.90 0.01 265)",
                          borderRadius: "12px",
                          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                          fontSize: "13px"
                        }}
                        formatter={(value, name) => [
                          `${value}${name === "completion" ? "%" : ""}`, 
                          name === "completion" ? "Completion" : "Productivity"
                        ]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="oklch(0.52 0.18 265)" 
                        strokeWidth={2.5}
                        fill="url(#completionGradient)" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="productivity" 
                        stroke="oklch(0.62 0.18 145)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Focus Hours Chart */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">Focus Distribution</CardTitle>
                    <CardDescription>Daily focus hours this week</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    avg: {avgFocusHours}h
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData} barSize={36}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 265)" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}h`}
                        domain={[0, 8]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid oklch(0.90 0.01 265)",
                          borderRadius: "12px",
                          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                          fontSize: "13px"
                        }}
                        formatter={(value) => [`${value} hours`, "Focus"]}
                      />
                      <Bar 
                        dataKey="focusHours" 
                        radius={[6, 6, 0, 0]}
                      >
                        {weeklyData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.focusHours >= 5 ? "oklch(0.52 0.18 265)" : "oklch(0.72 0.10 265)"} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Monthly Trend Chart */}
            <Card className="border-border/60 bg-card shadow-sm lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Monthly Progress</CardTitle>
                <CardDescription>Weekly aggregate metrics for the month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[340px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyTrend}>
                      <defs>
                        <linearGradient id="consistencyGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="productivityGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.62 0.18 145)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.62 0.18 145)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 265)" vertical={false} />
                      <XAxis 
                        dataKey="week" 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0.02 265)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                        domain={[0, 100]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid oklch(0.90 0.01 265)",
                          borderRadius: "12px",
                          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                          fontSize: "13px"
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="consistency" 
                        stroke="oklch(0.52 0.18 265)" 
                        strokeWidth={2.5}
                        fill="url(#consistencyGrad)" 
                        name="Consistency"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="productivity" 
                        stroke="oklch(0.62 0.18 145)" 
                        strokeWidth={2.5}
                        fill="url(#productivityGrad)" 
                        name="Productivity"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Behaviour Radar */}
            <Card className="border-border/60 bg-card shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Behaviour Profile</CardTitle>
                <CardDescription>Your behavioural traits radar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[340px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={behaviourData} cx="50%" cy="50%" outerRadius="70%">
                      <PolarGrid stroke="oklch(0.90 0.01 265)" />
                      <PolarAngleAxis 
                        dataKey="trait" 
                        tick={{ fill: "oklch(0.45 0.02 265)", fontSize: 11 }} 
                      />
                      <PolarRadiusAxis 
                        angle={30} 
                        domain={[0, 100]} 
                        tick={{ fill: "oklch(0.45 0.02 265)", fontSize: 10 }}
                        axisLine={false}
                      />
                      <Radar 
                        name="You" 
                        dataKey="value" 
                        stroke="oklch(0.52 0.18 265)" 
                        fill="oklch(0.52 0.18 265)" 
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-6">
          {/* 30-day Productivity Trend */}
          <Card className="border-border/60 bg-card shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold">30-Day Productivity Trend</CardTitle>
                  <CardDescription>Your daily productivity score over the last month</CardDescription>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <span className="text-muted-foreground">Score</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-0.5 w-6 bg-muted-foreground/50" style={{ borderTop: "2px dashed" }} />
                    <span className="text-muted-foreground">Baseline</span>
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productivityTrends}>
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="oklch(0.52 0.18 265)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.01 265)" vertical={false} />
                    <XAxis 
                      dataKey="day" 
                      stroke="oklch(0.45 0.02 265)" 
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => value % 5 === 0 ? `Day ${value}` : ''}
                    />
                    <YAxis 
                      stroke="oklch(0.45 0.02 265)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      domain={[40, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "white", 
                        border: "1px solid oklch(0.90 0.01 265)",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                        fontSize: "13px"
                      }}
                      formatter={(value, name) => [value, name === "score" ? "Productivity" : "Baseline"]}
                      labelFormatter={(label) => `Day ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="baseline" 
                      stroke="oklch(0.45 0.02 265)" 
                      strokeWidth={2}
                      strokeDasharray="6 6"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="oklch(0.52 0.18 265)" 
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 6, fill: "oklch(0.52 0.18 265)", stroke: "white", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Habit Performance Table */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="border-border/60 bg-card shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Habit Performance</CardTitle>
            <CardDescription>Individual habit completion rates and streaks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {habitPerformance.map((habit) => (
                <div 
                  key={habit.name} 
                  className="flex items-center gap-4 rounded-xl border border-border/60 p-4 transition-all hover:bg-muted/30"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground truncate">{habit.name}</p>
                      <TrendIcon trend={habit.trend} />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "mt-1 text-xs",
                        habit.category === "productivity" && "bg-primary/10 text-primary",
                        habit.category === "fitness" && "bg-emerald-500/10 text-emerald-600",
                        habit.category === "sleep" && "bg-violet-500/10 text-violet-600",
                        habit.category === "learning" && "bg-amber-500/10 text-amber-600",
                        habit.category === "mindfulness" && "bg-cyan-500/10 text-cyan-600",
                      )}
                    >
                      {habit.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{habit.completionRate}%</p>
                    <p className="text-xs text-muted-foreground">{habit.streak} day streak</p>
                  </div>
                  <div className="w-24">
                    <Progress value={habit.completionRate} className="h-2 bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Category Analysis */}
        <Card className="border-border/60 bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Category Analysis</CardTitle>
            <CardDescription>Performance by habit category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((cat) => (
                <div key={cat.category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "h-3 w-3 rounded-full bg-gradient-to-r",
                        cat.color
                      )} />
                      <span className="font-medium text-foreground">{cat.category}</span>
                    </div>
                    <span className="font-bold text-foreground">{cat.avgCompletion}%</span>
                  </div>
                  <Progress value={cat.avgCompletion} className="h-2 bg-muted" />
                  <p className="text-xs text-muted-foreground">{cat.count} habit{cat.count > 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>
            
            {/* AI Insights */}
            <div className="mt-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">AI Insight</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your <span className="font-medium text-foreground">mindfulness habits</span> show the highest completion rate. Consider applying similar routines to improve your <span className="font-medium text-foreground">sleep category</span>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
