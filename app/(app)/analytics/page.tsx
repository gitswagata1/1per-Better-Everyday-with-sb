"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Flame, 
  CheckCircle2, 
  Calendar,
  Activity,
  Zap,
  Brain,
  ArrowUpRight,
  ArrowDownRight,
  Minus
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
  { category: "Productivity", count: 3, avgCompletion: 88 },
  { category: "Fitness", count: 2, avgCompletion: 85 },
  { category: "Sleep", count: 1, avgCompletion: 65 },
  { category: "Learning", count: 2, avgCompletion: 78 },
  { category: "Mindfulness", count: 1, avgCompletion: 92 },
]

const categoryColors: Record<string, string> = {
  productivity: "oklch(0.55 0.15 250)",
  fitness: "oklch(0.65 0.15 150)",
  sleep: "oklch(0.60 0.12 280)",
  learning: "oklch(0.70 0.12 80)",
  mindfulness: "oklch(0.55 0.12 180)",
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <ArrowUpRight className="h-3 w-3 text-green-600" />
  if (trend === "down") return <ArrowDownRight className="h-3 w-3 text-red-500" />
  return <Minus className="h-3 w-3 text-muted-foreground" />
}

export default function AnalyticsPage() {
  const avgCompletion = Math.round(weeklyData.reduce((acc, d) => acc + d.completion, 0) / weeklyData.length)
  const totalHabitsCompleted = weeklyData.reduce((acc, d) => acc + d.habits, 0)
  const avgFocusHours = (weeklyData.reduce((acc, d) => acc + d.focusHours, 0) / weeklyData.length).toFixed(1)
  const consistencyScore = monthlyTrend[monthlyTrend.length - 1].consistency
  
  return (
    <div className="p-8">
      {/* Header with terminal-style accent */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5 rounded-md bg-foreground/5 px-2.5 py-1 font-mono text-xs text-muted-foreground">
            <span className="text-primary">//</span> analytics.view
          </div>
          <Badge variant="secondary" className="font-mono text-xs">
            <Activity className="mr-1 h-3 w-3" />
            live
          </Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Behavioural Analytics
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track patterns, measure progress, and optimize your performance
        </p>
      </div>
      
      {/* Key Metrics Grid */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Consistency Score</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-foreground">{consistencyScore}</span>
              <span className="text-lg text-muted-foreground">/100</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-sm text-green-600 font-medium">+9 pts</span>
              <span className="text-sm text-muted-foreground">vs last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Weekly Completion</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-foreground">{avgCompletion}%</span>
            </div>
            <div className="mt-3">
              <Progress value={avgCompletion} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Focus Hours</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-foreground">{avgFocusHours}</span>
              <span className="text-lg text-muted-foreground">hrs/day</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-sm text-green-600 font-medium">+0.8h</span>
              <span className="text-sm text-muted-foreground">avg increase</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Flame className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Active Streaks</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-foreground">5</span>
              <span className="text-lg text-muted-foreground">habits</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Longest:</span>
              <span className="text-sm font-medium text-foreground">12 days</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Section */}
      <Tabs defaultValue="weekly" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="weekly" className="font-mono text-xs">weekly</TabsTrigger>
            <TabsTrigger value="monthly" className="font-mono text-xs">monthly</TabsTrigger>
            <TabsTrigger value="trends" className="font-mono text-xs">trends</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span>completion</span>
            <span className="flex h-2 w-2 rounded-full bg-green-500 ml-3" />
            <span>productivity</span>
          </div>
        </div>
        
        <TabsContent value="weekly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Habit Completion Chart */}
            <Card className="border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-medium">Habit Completion Rate</CardTitle>
                    <CardDescription className="font-mono text-xs">// daily.completion.percentage</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    avg: {avgCompletion}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={weeklyData}>
                      <defs>
                        <linearGradient id="completionGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                        domain={[0, 100]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "oklch(0.98 0 0)", 
                          border: "1px solid oklch(0.92 0 0)",
                          borderRadius: "8px",
                          fontFamily: "monospace",
                          fontSize: "12px"
                        }}
                        formatter={(value, name) => [
                          `${value}${name === "completion" ? "%" : ""}`, 
                          name === "completion" ? "Completion" : "Productivity"
                        ]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="oklch(0.55 0.15 250)" 
                        strokeWidth={2}
                        fill="url(#completionGradient)" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="productivity" 
                        stroke="oklch(0.55 0.18 150)" 
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Focus Hours Chart */}
            <Card className="border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-medium">Focus Distribution</CardTitle>
                    <CardDescription className="font-mono text-xs">// daily.focus.hours</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    avg: {avgFocusHours}h
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData} barSize={32}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}h`}
                        domain={[0, 8]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "oklch(0.98 0 0)", 
                          border: "1px solid oklch(0.92 0 0)",
                          borderRadius: "8px",
                          fontFamily: "monospace",
                          fontSize: "12px"
                        }}
                        formatter={(value) => [`${value} hours`, "Focus"]}
                      />
                      <Bar 
                        dataKey="focusHours" 
                        radius={[4, 4, 0, 0]}
                      >
                        {weeklyData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.focusHours >= 5 ? "oklch(0.55 0.15 250)" : "oklch(0.75 0.08 250)"} 
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
            <Card className="border-border lg:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-medium">Monthly Progress</CardTitle>
                    <CardDescription className="font-mono text-xs">// weekly.aggregate.metrics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyTrend}>
                      <defs>
                        <linearGradient id="consistencyGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="productivityGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.55 0.18 150)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.55 0.18 150)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" vertical={false} />
                      <XAxis 
                        dataKey="week" 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={11}
                        fontFamily="monospace"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                        domain={[0, 100]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "oklch(0.98 0 0)", 
                          border: "1px solid oklch(0.92 0 0)",
                          borderRadius: "8px",
                          fontFamily: "monospace",
                          fontSize: "12px"
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="consistency" 
                        stroke="oklch(0.55 0.15 250)" 
                        strokeWidth={2}
                        fill="url(#consistencyGrad)" 
                        name="Consistency"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="productivity" 
                        stroke="oklch(0.55 0.18 150)" 
                        strokeWidth={2}
                        fill="url(#productivityGrad)" 
                        name="Productivity"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Behaviour Radar */}
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Behaviour Profile</CardTitle>
                <CardDescription className="font-mono text-xs">// self.traits.radar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={behaviourData}>
                      <PolarGrid stroke="oklch(0.92 0 0)" />
                      <PolarAngleAxis 
                        dataKey="trait" 
                        tick={{ fill: "oklch(0.45 0 0)", fontSize: 11, fontFamily: "monospace" }}
                      />
                      <PolarRadiusAxis 
                        angle={30} 
                        domain={[0, 100]} 
                        tick={{ fill: "oklch(0.45 0 0)", fontSize: 10 }}
                        tickCount={5}
                      />
                      <Radar
                        name="Current"
                        dataKey="value"
                        stroke="oklch(0.55 0.15 250)"
                        fill="oklch(0.55 0.15 250)"
                        fillOpacity={0.2}
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
          <Card className="border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-medium">30-Day Productivity Trend</CardTitle>
                  <CardDescription className="font-mono text-xs">// productivity.score.timeline</CardDescription>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="h-0.5 w-4 bg-primary rounded" />
                    actual
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-0.5 w-4 bg-muted-foreground/50 rounded" style={{ backgroundImage: "repeating-linear-gradient(90deg, oklch(0.45 0 0) 0, oklch(0.45 0 0) 2px, transparent 2px, transparent 4px)" }} />
                    baseline
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={productivityTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" vertical={false} />
                    <XAxis 
                      dataKey="day" 
                      stroke="oklch(0.45 0 0)" 
                      fontSize={11}
                      fontFamily="monospace"
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => value % 5 === 0 ? `D${value}` : ""}
                    />
                    <YAxis 
                      stroke="oklch(0.45 0 0)" 
                      fontSize={11}
                      fontFamily="monospace"
                      tickLine={false}
                      axisLine={false}
                      domain={[40, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "oklch(0.98 0 0)", 
                        border: "1px solid oklch(0.92 0 0)",
                        borderRadius: "8px",
                        fontFamily: "monospace",
                        fontSize: "12px"
                      }}
                      formatter={(value, name) => [value, name === "score" ? "Score" : "Baseline"]}
                      labelFormatter={(label) => `Day ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="baseline" 
                      stroke="oklch(0.45 0 0)" 
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="oklch(0.55 0.15 250)" 
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "oklch(0.55 0.15 250)" }}
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
        <Card className="border-border lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-medium">Habit Performance</CardTitle>
                <CardDescription className="font-mono text-xs">// habits.metrics.breakdown</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {habitPerformance.map((habit) => (
                <div key={habit.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-2 w-2 rounded-full" 
                        style={{ backgroundColor: categoryColors[habit.category] }}
                      />
                      <span className="text-sm font-medium text-foreground">{habit.name}</span>
                      <Badge variant="secondary" className="font-mono text-xs capitalize">
                        {habit.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm">
                        <Flame className="h-3.5 w-3.5 text-orange-500" />
                        <span className="font-mono text-foreground">{habit.streak}d</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendIcon trend={habit.trend} />
                        <span className="font-mono text-sm font-medium text-foreground">{habit.completionRate}%</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={habit.completionRate} className="h-1.5" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Category Breakdown */}
        <Card className="border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-medium">By Category</CardTitle>
            <CardDescription className="font-mono text-xs">// habits.category.distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((cat) => (
                <div key={cat.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-3 w-3 rounded-sm" 
                      style={{ backgroundColor: categoryColors[cat.category.toLowerCase()] }}
                    />
                    <span className="text-sm text-foreground">{cat.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{cat.count} habits</span>
                    <span className="font-mono text-sm font-medium text-foreground">{cat.avgCompletion}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI Insight</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your <span className="text-foreground font-medium">Mindfulness</span> habits show the highest consistency. Consider adding more habits in this category to leverage your strength.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
