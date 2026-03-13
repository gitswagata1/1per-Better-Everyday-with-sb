"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Flame, Plus, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Habit = {
  id: string
  name: string
  category: string
  streak: number
  completed: boolean
}

const initialHabits: Habit[] = [
  { id: "1", name: "Morning meditation", category: "Productivity", streak: 7, completed: false },
  { id: "2", name: "30 min exercise", category: "Fitness", streak: 12, completed: false },
  { id: "3", name: "Read for 20 minutes", category: "Learning", streak: 5, completed: true },
  { id: "4", name: "Sleep by 10:30 PM", category: "Sleep", streak: 3, completed: false },
  { id: "5", name: "No phone first hour", category: "Productivity", streak: 8, completed: true },
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
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Good morning
          </h1>
          <p className="mt-1 text-muted-foreground">{today}</p>
        </div>
        <Link href="/habits/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Habit
          </Button>
        </Link>
      </div>
      
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today&apos;s Progress</p>
                <p className="mt-1 text-3xl font-semibold text-foreground">{completionRate}%</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <Progress value={completionRate} className="mt-4 h-2" />
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Habits Completed</p>
                <p className="mt-1 text-3xl font-semibold text-foreground">
                  {completedCount}/{habits.length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {habits.length - completedCount} remaining today
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Longest Streak</p>
                <p className="mt-1 text-3xl font-semibold text-foreground">
                  {Math.max(...habits.map(h => h.streak))} days
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Flame className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              30 min exercise
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Today's Habits */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Today&apos;s Habits</CardTitle>
          <CardDescription>Track your daily habits and build streaks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {habits.map((habit) => (
              <button
                key={habit.id}
                onClick={() => toggleHabit(habit.id)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-lg border border-border p-4 text-left transition-colors hover:bg-muted/50",
                  habit.completed && "bg-primary/5 border-primary/20"
                )}
              >
                <div className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  habit.completed 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-muted-foreground/30"
                )}>
                  {habit.completed && <CheckCircle2 className="h-4 w-4" />}
                </div>
                
                <div className="flex-1">
                  <p className={cn(
                    "font-medium",
                    habit.completed && "text-muted-foreground line-through"
                  )}>
                    {habit.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{habit.category}</p>
                </div>
                
                <div className="flex items-center gap-1.5 text-sm">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium text-foreground">{habit.streak}</span>
                  <span className="text-muted-foreground">day streak</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
