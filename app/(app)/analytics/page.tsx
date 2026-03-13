"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Target, Flame, CheckCircle2, Calendar } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const weeklyData = [
  { day: "Mon", completion: 80, habits: 4 },
  { day: "Tue", completion: 100, habits: 5 },
  { day: "Wed", completion: 60, habits: 3 },
  { day: "Thu", completion: 80, habits: 4 },
  { day: "Fri", completion: 100, habits: 5 },
  { day: "Sat", completion: 40, habits: 2 },
  { day: "Sun", completion: 60, habits: 3 },
]

const monthlyData = [
  { week: "Week 1", completion: 75 },
  { week: "Week 2", completion: 82 },
  { week: "Week 3", completion: 68 },
  { week: "Week 4", completion: 91 },
]

const focusTrends = [
  { day: "Mon", hours: 5.5 },
  { day: "Tue", hours: 6.2 },
  { day: "Wed", hours: 4.8 },
  { day: "Thu", hours: 7.1 },
  { day: "Fri", hours: 5.9 },
  { day: "Sat", hours: 3.2 },
  { day: "Sun", hours: 4.0 },
]

const habitStats = [
  { name: "Morning meditation", completionRate: 92, streak: 7 },
  { name: "30 min exercise", completionRate: 85, streak: 12 },
  { name: "Read for 20 minutes", completionRate: 78, streak: 5 },
  { name: "Sleep by 10:30 PM", completionRate: 65, streak: 3 },
  { name: "No phone first hour", completionRate: 88, streak: 8 },
]

export default function AnalyticsPage() {
  const avgCompletion = Math.round(weeklyData.reduce((acc, d) => acc + d.completion, 0) / weeklyData.length)
  const totalHabitsCompleted = weeklyData.reduce((acc, d) => acc + d.habits, 0)
  
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Analytics
        </h1>
        <p className="mt-1 text-muted-foreground">
          Track your progress and identify patterns
        </p>
      </div>
      
      {/* Overview Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Consistency Score</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">{avgCompletion}%</span>
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +5%
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Habits Completed</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">{totalHabitsCompleted}</span>
              <span className="text-sm text-muted-foreground">this week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Avg. Streak</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">7</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Best Day</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">Tue</span>
              <span className="text-sm text-green-600">100%</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <Tabs defaultValue="weekly" className="space-y-6">
        <TabsList>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Completion Rate Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Habit Completion Rate</CardTitle>
                <CardDescription>Daily completion percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
                      <defs>
                        <linearGradient id="completionGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.55 0.15 250)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "oklch(1 0 0)", 
                          border: "1px solid oklch(0.92 0 0)",
                          borderRadius: "8px"
                        }}
                        formatter={(value) => [`${value}%`, "Completion"]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="oklch(0.55 0.15 250)" 
                        strokeWidth={2}
                        fill="url(#completionGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Focus Trends Chart */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Focus Hours</CardTitle>
                <CardDescription>Hours of deep work per day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={focusTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
                      <XAxis 
                        dataKey="day" 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="oklch(0.45 0 0)" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}h`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "oklch(1 0 0)", 
                          border: "1px solid oklch(0.92 0 0)",
                          borderRadius: "8px"
                        }}
                        formatter={(value) => [`${value} hours`, "Focus"]}
                      />
                      <Bar 
                        dataKey="hours" 
                        fill="oklch(0.55 0.15 250)" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base">Monthly Progress</CardTitle>
              <CardDescription>Weekly completion rate over the month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
                    <XAxis 
                      dataKey="week" 
                      stroke="oklch(0.45 0 0)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="oklch(0.45 0 0)" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "oklch(1 0 0)", 
                        border: "1px solid oklch(0.92 0 0)",
                        borderRadius: "8px"
                      }}
                      formatter={(value) => [`${value}%`, "Completion"]}
                    />
                    <Bar 
                      dataKey="completion" 
                      fill="oklch(0.55 0.15 250)" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Habit Performance */}
      <Card className="mt-6 border-border">
        <CardHeader>
          <CardTitle className="text-base">Habit Performance</CardTitle>
          <CardDescription>Completion rate by habit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {habitStats.map((habit) => (
              <div key={habit.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{habit.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Flame className="h-3 w-3 text-orange-500" />
                      {habit.streak} days
                    </span>
                    <span className="text-sm font-medium text-foreground">{habit.completionRate}%</span>
                  </div>
                </div>
                <Progress value={habit.completionRate} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
