"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Moon, Brain, Smile, Smartphone } from "lucide-react"

const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]

const metrics = [
  {
    id: "sleep",
    label: "Sleep Hours",
    description: "How many hours did you sleep last night?",
    icon: Moon,
    min: 0,
    max: 12,
    step: 0.5,
    unit: "hours",
    defaultValue: 7
  },
  {
    id: "focus",
    label: "Focus Hours",
    description: "How many hours of deep, focused work did you do?",
    icon: Brain,
    min: 0,
    max: 12,
    step: 0.5,
    unit: "hours",
    defaultValue: 4
  },
  {
    id: "mood",
    label: "Mood Level",
    description: "How would you rate your overall mood today?",
    icon: Smile,
    min: 1,
    max: 10,
    step: 1,
    unit: "/10",
    defaultValue: 7
  },
  {
    id: "screenTime",
    label: "Screen Time",
    description: "How many hours of non-work screen time?",
    icon: Smartphone,
    min: 0,
    max: 12,
    step: 0.5,
    unit: "hours",
    defaultValue: 3
  }
]

type DayData = {
  sleep: number
  focus: number
  mood: number
  screenTime: number
}

export default function AssessmentPage() {
  const router = useRouter()
  const [currentDay, setCurrentDay] = useState(0)
  const [assessmentData, setAssessmentData] = useState<DayData[]>(
    days.map(() => ({
      sleep: 7,
      focus: 4,
      mood: 7,
      screenTime: 3
    }))
  )
  
  const progress = ((currentDay + 1) / days.length) * 100
  
  const updateMetric = (metricId: string, value: number) => {
    setAssessmentData(prev => {
      const newData = [...prev]
      newData[currentDay] = {
        ...newData[currentDay],
        [metricId]: value
      }
      return newData
    })
  }
  
  const handleNext = () => {
    if (currentDay < days.length - 1) {
      setCurrentDay(currentDay + 1)
    } else {
      router.push("/dashboard")
    }
  }
  
  const handleBack = () => {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1)
    } else {
      router.push("/onboarding")
    }
  }
  
  const currentDayData = assessmentData[currentDay]
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">1%</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Better</span>
          </div>
          <span className="text-sm text-muted-foreground">7-Day Assessment</span>
        </div>
      </header>
      
      {/* Day Indicator */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <div className="flex items-center justify-between gap-2">
            {days.map((day, index) => (
              <button
                key={day}
                onClick={() => setCurrentDay(index)}
                className={`flex h-10 flex-1 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  index === currentDay 
                    ? "bg-primary text-primary-foreground" 
                    : index < currentDay
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <main className="mx-auto flex flex-1 w-full max-w-3xl flex-col px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {days[currentDay]}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Track your behavioural metrics for today. Be honest for accurate insights.
          </p>
        </div>
        
        <div className="flex-1 space-y-6">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const value = currentDayData[metric.id as keyof DayData]
            
            return (
              <Card key={metric.id} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-base font-medium text-foreground">{metric.label}</Label>
                      <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-semibold text-foreground">{value}</span>
                      <span className="text-sm text-muted-foreground">{metric.unit}</span>
                    </div>
                  </div>
                  
                  <Slider
                    value={[value]}
                    onValueChange={([newValue]) => updateMetric(metric.id, newValue)}
                    min={metric.min}
                    max={metric.max}
                    step={metric.step}
                    className="w-full"
                  />
                  
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>{metric.min}{metric.unit}</span>
                    <span>{metric.max}{metric.unit}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {currentDay === 0 ? "Back to Onboarding" : "Previous Day"}
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{currentDay + 1}</span>
            <span>/</span>
            <span>{days.length}</span>
          </div>
          
          <Button
            onClick={handleNext}
            className="gap-2"
          >
            {currentDay === days.length - 1 ? "Complete Assessment" : "Next Day"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
