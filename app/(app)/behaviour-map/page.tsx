"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Brain, Zap, Smartphone, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const behaviorData = [
  { metric: "Sleep", value: 75, fullMark: 100 },
  { metric: "Focus", value: 85, fullMark: 100 },
  { metric: "Energy", value: 70, fullMark: 100 },
  { metric: "Mood", value: 80, fullMark: 100 },
  { metric: "Productivity", value: 78, fullMark: 100 },
]

const correlationData = [
  { day: "Mon", sleep: 7.5, focus: 5.5, energy: 7, mood: 8 },
  { day: "Tue", sleep: 8, focus: 6.2, energy: 8, mood: 8.5 },
  { day: "Wed", sleep: 6, focus: 4.8, energy: 5, mood: 6 },
  { day: "Thu", sleep: 7, focus: 7.1, energy: 7, mood: 7.5 },
  { day: "Fri", sleep: 7.5, focus: 5.9, energy: 7.5, mood: 8 },
  { day: "Sat", sleep: 9, focus: 3.2, energy: 6, mood: 7 },
  { day: "Sun", sleep: 8.5, focus: 4.0, energy: 6.5, mood: 7.5 },
]

const insights = [
  {
    type: "positive",
    title: "Strong Sleep-Focus Correlation",
    description: "Days with 7+ hours of sleep show 40% higher focus scores. Keep prioritizing sleep.",
    icon: Moon
  },
  {
    type: "warning",
    title: "Weekend Energy Dip",
    description: "Your energy levels drop by 25% on weekends. Consider maintaining consistent routines.",
    icon: Zap
  },
  {
    type: "positive",
    title: "Improved Mood Trend",
    description: "Your average mood has increased by 12% over the past two weeks.",
    icon: Brain
  },
  {
    type: "neutral",
    title: "Screen Time Impact",
    description: "Higher screen time correlates with lower sleep quality. Monitor evening usage.",
    icon: Smartphone
  }
]

const metrics = [
  {
    name: "Sleep Quality",
    current: 7.4,
    target: 8,
    unit: "hours",
    trend: "up",
    change: "+0.5h",
    icon: Moon
  },
  {
    name: "Focus Time",
    current: 5.2,
    target: 6,
    unit: "hours",
    trend: "up",
    change: "+0.8h",
    icon: Brain
  },
  {
    name: "Energy Level",
    current: 6.8,
    target: 8,
    unit: "/10",
    trend: "neutral",
    change: "0",
    icon: Zap
  },
  {
    name: "Screen Time",
    current: 4.2,
    target: 3,
    unit: "hours",
    trend: "down",
    change: "-0.5h",
    icon: Smartphone
  }
]

export default function BehaviourMapPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Behaviour Map
        </h1>
        <p className="mt-1 text-muted-foreground">
          Visualize patterns and correlations in your behaviour
        </p>
      </div>
      
      {/* Metrics Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Minus
          const trendColor = metric.trend === "up" ? "text-green-600" : metric.trend === "down" ? "text-red-500" : "text-muted-foreground"
          
          return (
            <Card key={metric.name} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 ${trendColor}`}>
                    <TrendIcon className="h-4 w-4" />
                    <span className="text-sm">{metric.change}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{metric.name}</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-foreground">{metric.current}</span>
                  <span className="text-sm text-muted-foreground">{metric.unit}</span>
                  <span className="text-sm text-muted-foreground">/ {metric.target}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
      
      {/* Charts */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Radar Chart */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Behaviour Overview</CardTitle>
            <CardDescription>Your current behavioural metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={behaviorData}>
                  <PolarGrid stroke="oklch(0.92 0 0)" />
                  <PolarAngleAxis 
                    dataKey="metric" 
                    tick={{ fill: "oklch(0.45 0 0)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]}
                    tick={{ fill: "oklch(0.45 0 0)", fontSize: 10 }}
                  />
                  <Radar
                    name="Current"
                    dataKey="value"
                    stroke="oklch(0.55 0.15 250)"
                    fill="oklch(0.55 0.15 250)"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Correlation Chart */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Weekly Patterns</CardTitle>
            <CardDescription>Correlation between sleep, focus, energy, and mood</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={correlationData}>
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
                    domain={[0, 10]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "oklch(1 0 0)", 
                      border: "1px solid oklch(0.92 0 0)",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="sleep" 
                    name="Sleep (hrs)"
                    stroke="oklch(0.55 0.12 280)" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="focus" 
                    name="Focus (hrs)"
                    stroke="oklch(0.55 0.15 250)" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energy" 
                    name="Energy (/10)"
                    stroke="oklch(0.65 0.15 140)" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    name="Mood (/10)"
                    stroke="oklch(0.70 0.12 80)" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Insights */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">Behavioural Insights</CardTitle>
          <CardDescription>AI-generated insights based on your patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => {
              const Icon = insight.icon
              
              return (
                <div 
                  key={index}
                  className="flex gap-4 rounded-lg border border-border p-4"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    insight.type === "positive" 
                      ? "bg-green-100 text-green-700" 
                      : insight.type === "warning" 
                        ? "bg-orange-100 text-orange-700" 
                        : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{insight.title}</h4>
                      <Badge 
                        variant="secondary"
                        className={
                          insight.type === "positive" 
                            ? "bg-green-100 text-green-700" 
                            : insight.type === "warning" 
                              ? "bg-orange-100 text-orange-700" 
                              : "bg-muted text-muted-foreground"
                        }
                      >
                        {insight.type === "positive" ? "Positive" : insight.type === "warning" ? "Attention" : "Info"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
