"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Brain, Dumbbell, BookOpen, Moon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  { id: "productivity", label: "Productivity", icon: Brain },
  { id: "fitness", label: "Fitness", icon: Dumbbell },
  { id: "learning", label: "Learning", icon: BookOpen },
  { id: "sleep", label: "Sleep", icon: Moon },
]

const frequencies = [
  { value: "daily", label: "Daily" },
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "weekly", label: "Weekly" },
  { value: "custom", label: "Custom" },
]

export default function NewHabitPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [frequency, setFrequency] = useState("")
  const [reminderTime, setReminderTime] = useState("08:00")
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 500))
    router.push("/habits")
  }
  
  const isValid = name.trim() && category && frequency
  
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/habits" className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Habits
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Create New Habit
        </h1>
        <p className="mt-1 text-muted-foreground">
          Define a new habit to start tracking
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
        {/* Habit Name */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Habit Details</CardTitle>
            <CardDescription>What habit do you want to build?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Habit Name</Label>
              <Input
                id="name"
                placeholder="e.g., Morning meditation, Read for 30 minutes"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Category */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Category</CardTitle>
            <CardDescription>Select a category for this habit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isSelected = category === cat.id
                
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-colors",
                      isSelected 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-primary" : "text-muted-foreground"
                    )}>
                      {cat.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Frequency & Reminder */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base">Schedule</CardTitle>
            <CardDescription>How often do you want to do this?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {frequencies.map((freq) => (
                      <SelectItem key={freq.value} value={freq.value}>
                        {freq.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reminder">Reminder Time</Label>
                <Input
                  id="reminder"
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={!isValid || isLoading}>
            {isLoading ? "Creating..." : "Create Habit"}
          </Button>
          <Link href="/habits">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
