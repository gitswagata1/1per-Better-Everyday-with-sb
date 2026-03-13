// Habit types
export interface Habit {
  id: string
  userId: string
  name: string
  category: HabitCategory
  frequency: "daily" | "weekly" | "custom"
  targetDays?: number[]
  reminder?: string
  streak: number
  completed: boolean
  createdAt: string
  updatedAt: string
}

export type HabitCategory = "productivity" | "fitness" | "sleep" | "learning" | "health" | "mindfulness"

export interface HabitCompletion {
  habitId: string
  userId: string
  date: string
  completed: boolean
  timestamp: string
}

// Analytics types
export interface DailyStats {
  date: string
  completion: number
  habitsCompleted: number
  totalHabits: number
  focusHours: number
  moodScore: number
}

export interface WeeklyStats {
  weekStart: string
  weekEnd: string
  consistencyScore: number
  avgCompletion: number
  totalHabitsCompleted: number
  productivityTrend: number
  streakData: StreakInfo[]
}

export interface StreakInfo {
  habitId: string
  habitName: string
  currentStreak: number
  longestStreak: number
  lastCompleted: string
}

export interface BehaviourInsight {
  id: string
  type: "pattern" | "suggestion" | "achievement" | "warning"
  title: string
  description: string
  confidence: number
  createdAt: string
}

export interface ProductivityMetrics {
  date: string
  focusTime: number
  distractions: number
  tasksCompleted: number
  energyLevel: number
}

// User types
export interface User {
  id: string
  email: string
  name: string
  goals: string[]
  focusAreas: string[]
  timezone: string
  assessmentCompleted: boolean
  onboardingCompleted: boolean
  createdAt: string
}

// Assessment types
export interface AssessmentResponse {
  day: number
  sleepHours: number
  focusHours: number
  moodLevel: number
  screenTime: number
  timestamp: string
}

export interface AssessmentSummary {
  userId: string
  completedDays: number
  avgSleepHours: number
  avgFocusHours: number
  avgMoodLevel: number
  avgScreenTime: number
  behaviourProfile: BehaviourProfile
}

export interface BehaviourProfile {
  primaryType: "morning_person" | "night_owl" | "balanced"
  focusPattern: "deep_worker" | "sprinter" | "multitasker"
  energyCurve: number[]
  recommendations: string[]
}
