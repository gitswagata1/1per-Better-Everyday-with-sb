"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Flame, Plus, TrendingUp, ArrowUpRight, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

type Habit = {
  id: string
  name: string
  category: string
  streak: number
  completed: boolean
  color: string
}

const categoryColors: Record<string, string> = {
  Productivity: "from-primary to-accent",
  Fitness: "from-emerald-500 to-teal-500",
  Learning: "from-amber-500 to-orange-500",
  Sleep: "from-violet-500 to-purple-500",
}

const initialHabits: Habit[] = [
  { id: "1", name: "Morning meditation", category: "Productivity", streak: 7, completed: false, color: categoryColors.Productivity },
  { id: "2", name: "30 min exercise", category: "Fitness", streak: 12, completed: false, color: categoryColors.Fitness },
  { id: "3", name: "Read for 20 minutes", category: "Learning", streak: 5, completed: true, color: categoryColors.Learning },
  { id: "4", name: "Sleep by 10:30 PM", category: "Sleep", streak: 3, completed: false, color: categoryColors.Sleep },
  { id: "5", name: "No phone first hour", category: "Productivity", streak: 8, completed: true, color: categoryColors.Productivity },
]

export default function DashboardPage() {
  const [habits, setHabits] = useState(initialHabits)
  
  const toggleHabit = (id: string) => {
    setHabits(prev => 
      prev.map(habit => 
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }
  
  const completedCount = habits.filter(h => h.completed).length
  const completionRate = Math.round((completedCount / habits.length) * 100)
  
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  })
  
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Good morning
          </h1>
          <p className="mt-1 text-muted-foreground">{today}</p>
        </div>
        <Link href="/habits/new">
          <Button className="gap-2 rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
            <Plus className="h-4 w-4" />
            Add Habit
          </Button>
        </Link>
      </div>
      
      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today&apos;s Progress</p>
                <p className="mt-2 text-3xl font-bold text-foreground">{completionRate}%</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
            </div>
            <Progress value={completionRate} className="mt-4 h-2 bg-muted" />
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {completedCount}<span className="text-lg font-medium text-muted-foreground">/{habits.length}</span>
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <Target className="h-7 w-7 text-emerald-500" />
              </div>
            </div>
            <p className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
              <span className="font-medium text-emerald-500">{habits.length - completedCount}</span> remaining today
            </p>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Best Streak</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {Math.max(...habits.map(h => h.streak))} <span className="text-lg font-medium text-muted-foreground">days</span>
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                <Flame className="h-7 w-7 text-orange-500" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              30 min exercise
            </p>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-black/5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 blur-2xl transition-all group-hover:scale-150" />
          <CardContent className="relative p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Avg</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  87<span className="text-lg font-medium text-muted-foreground">%</span>
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                <Zap className="h-7 w-7 text-violet-500" />
              </div>
            </div>
            <p className="mt-4 flex items-center gap-1 text-sm text-emerald-500">
              <ArrowUpRight className="h-4 w-4" />
              +5% vs last week
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Today's Habits */}
      <Card className="border-border/60 bg-card shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">Today&apos;s Habits</CardTitle>
              <CardDescription className="mt-1">Track your daily habits and build streaks</CardDescription>
            </div>
            <Link href="/habits" className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="space-y-3">
            {habits.map((habit) => (
              <button
                key={habit.id}
                onClick={() => toggleHabit(habit.id)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl border border-border/60 p-4 text-left transition-all hover:bg-muted/50 hover:shadow-sm",
                  habit.completed && "border-primary/20 bg-primary/5"
                )}
              >
                <div className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition-all",
                  habit.completed 
                    ? "border-primary bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25" 
                    : "border-muted-foreground/30 hover:border-primary/50"
                )}>
                  {habit.completed && <CheckCircle2 className="h-4 w-4" />}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "font-semibold truncate",
                    habit.completed ? "text-muted-foreground line-through" : "text-foreground"
                  )}>
                    {habit.name}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={cn(
                      "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                      habit.category === "Productivity" && "bg-primary/10 text-primary",
                      habit.category === "Fitness" && "bg-emerald-500/10 text-emerald-600",
                      habit.category === "Learning" && "bg-amber-500/10 text-amber-600",
                      habit.category === "Sleep" && "bg-violet-500/10 text-violet-600",
                    )}>
                      {habit.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-1.5">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-bold text-orange-600">{habit.streak}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
