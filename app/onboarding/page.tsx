"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Dumbbell, Moon, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const focusAreas = [
  {
    id: "productivity",
    label: "Productivity",
    description: "Focus, deep work, and task management",
    icon: Brain
  },
  {
    id: "sleep",
    label: "Sleep",
    description: "Sleep quality and rest patterns",
    icon: Moon
  },
  {
    id: "fitness",
    label: "Fitness",
    description: "Exercise, movement, and physical health",
    icon: Dumbbell
  },
  {
    id: "learning",
    label: "Learning",
    description: "Skill development and knowledge",
    icon: BookOpen
  }
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [goals, setGoals] = useState("")
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  
  const totalSteps = 3
  const progress = (step / totalSteps) * 100
  
  const toggleArea = (id: string) => {
    setSelectedAreas(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id)
        : [...prev, id]
    )
  }
  
  const canProceed = () => {
    if (step === 1) return name.trim().length > 0
    if (step === 2) return goals.trim().length > 0
    if (step === 3) return selectedAreas.length > 0
    return false
  }
  
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      router.push("/assessment")
    }
  }
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">1%</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Better</span>
          </div>
          <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
        </div>
      </header>
      
      {/* Progress */}
      <div className="mx-auto w-full max-w-2xl px-6 pt-6">
        <Progress value={progress} className="h-1" />
      </div>
      
      {/* Content */}
      <main className="mx-auto flex flex-1 w-full max-w-2xl flex-col px-6 py-12">
        {/* Step 1: Name */}
        {step === 1 && (
          <div className="flex flex-1 flex-col">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {"What's your name?"}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {"Let's personalize your experience."}
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-lg"
                autoFocus
              />
            </div>
          </div>
        )}
        
        {/* Step 2: Goals */}
        {step === 2 && (
          <div className="flex flex-1 flex-col">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                What do you want to achieve?
              </h1>
              <p className="mt-2 text-muted-foreground">
                Tell us about your main goals for self-improvement.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="goals" className="sr-only">Goals</Label>
              <textarea
                id="goals"
                placeholder="e.g., I want to wake up earlier, be more focused during work, and exercise regularly..."
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="min-h-[160px] w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                autoFocus
              />
            </div>
          </div>
        )}
        
        {/* Step 3: Focus Areas */}
        {step === 3 && (
          <div className="flex flex-1 flex-col">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Choose your focus areas
              </h1>
              <p className="mt-2 text-muted-foreground">
                Select the areas you want to improve. You can choose multiple.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => {
                const Icon = area.icon
                const isSelected = selectedAreas.includes(area.id)
                
                return (
                  <Card
                    key={area.id}
                    className={cn(
                      "cursor-pointer border-2 transition-all hover:border-primary/50",
                      isSelected ? "border-primary bg-primary/5" : "border-border"
                    )}
                    onClick={() => toggleArea(area.id)}
                  >
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-foreground">{area.label}</h3>
                          {isSelected && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <div className="mt-auto flex items-center justify-between pt-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="gap-2"
          >
            {step === totalSteps ? "Start Assessment" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
