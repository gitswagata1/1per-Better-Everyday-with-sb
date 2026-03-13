"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle2, Flame, MoreVertical, Plus, Pencil, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Habit = {
  id: string
  name: string
  category: string
  frequency: string
  streak: number
  completed: boolean
  reminder: string
}

const initialHabits: Habit[] = [
  { id: "1", name: "Morning meditation", category: "Productivity", frequency: "Daily", streak: 7, completed: false, reminder: "6:00 AM" },
  { id: "2", name: "30 min exercise", category: "Fitness", frequency: "Daily", streak: 12, completed: false, reminder: "7:00 AM" },
  { id: "3", name: "Read for 20 minutes", category: "Learning", frequency: "Daily", streak: 5, completed: true, reminder: "9:00 PM" },
  { id: "4", name: "Sleep by 10:30 PM", category: "Sleep", frequency: "Daily", streak: 3, completed: false, reminder: "10:00 PM" },
  { id: "5", name: "No phone first hour", category: "Productivity", frequency: "Daily", streak: 8, completed: true, reminder: "6:30 AM" },
  { id: "6", name: "Weekly meal prep", category: "Fitness", frequency: "Weekly", streak: 4, completed: false, reminder: "Sunday 10:00 AM" },
]

const categoryColors: Record<string, string> = {
  Productivity: "bg-blue-100 text-blue-700",
  Fitness: "bg-green-100 text-green-700",
  Learning: "bg-purple-100 text-purple-700",
  Sleep: "bg-indigo-100 text-indigo-700",
}

export default function HabitsPage() {
  const [habits, setHabits] = useState(initialHabits)
  const [filter, setFilter] = useState<string>("all")
  
  const toggleHabit = (id: string) => {
    setHabits(prev => 
      prev.map(habit => 
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }
  
  const deleteHabit = (id: string) => {
    setHabits(prev => prev.filter(habit => habit.id !== id))
  }
  
  const categories = ["all", ...Array.from(new Set(habits.map(h => h.category)))]
  const filteredHabits = filter === "all" ? habits : habits.filter(h => h.category === filter)
  
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Your Habits
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage and track all your habits
          </p>
        </div>
        <Link href="/habits/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Habit
          </Button>
        </Link>
      </div>
      
      {/* Filters */}
      <div className="mb-6 flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Habits List */}
      <div className="space-y-3">
        {filteredHabits.map((habit) => (
          <Card key={habit.id} className="border-border">
            <CardContent className="flex items-center gap-4 p-4">
              <button
                onClick={() => toggleHabit(habit.id)}
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  habit.completed 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-muted-foreground/30 hover:border-primary/50"
                )}
              >
                {habit.completed && <CheckCircle2 className="h-4 w-4" />}
              </button>
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className={cn(
                    "font-medium text-foreground",
                    habit.completed && "text-muted-foreground line-through"
                  )}>
                    {habit.name}
                  </p>
                  <Badge variant="secondary" className={categoryColors[habit.category]}>
                    {habit.category}
                  </Badge>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{habit.frequency}</span>
                  <span>Reminder: {habit.reminder}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700">{habit.streak}</span>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-destructive"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredHabits.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-muted-foreground">No habits found</p>
          <Link href="/habits/new" className="mt-4">
            <Button>Create your first habit</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
