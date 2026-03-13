import type {
  Habit,
  HabitCompletion,
  DailyStats,
  WeeklyStats,
  BehaviourInsight,
  AssessmentResponse,
  AssessmentSummary,
  User,
} from "./types"

// API Gateway base URL - would be set via environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

// Generic fetch wrapper with error handling
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

// Habits API
export const habitsApi = {
  list: () => apiFetch<Habit[]>("/habits"),
  
  get: (id: string) => apiFetch<Habit>(`/habits/${id}`),
  
  create: (habit: Omit<Habit, "id" | "createdAt" | "updatedAt">) =>
    apiFetch<Habit>("/habits", {
      method: "POST",
      body: JSON.stringify(habit),
    }),
  
  update: (id: string, habit: Partial<Habit>) =>
    apiFetch<Habit>(`/habits/${id}`, {
      method: "PUT",
      body: JSON.stringify(habit),
    }),
  
  delete: (id: string) =>
    apiFetch<void>(`/habits/${id}`, { method: "DELETE" }),
  
  complete: (id: string, date: string) =>
    apiFetch<HabitCompletion>(`/habits/${id}/complete`, {
      method: "POST",
      body: JSON.stringify({ date }),
    }),
  
  uncomplete: (id: string, date: string) =>
    apiFetch<void>(`/habits/${id}/complete`, {
      method: "DELETE",
      body: JSON.stringify({ date }),
    }),
}

// Analytics API
export const analyticsApi = {
  getDailyStats: (startDate: string, endDate: string) =>
    apiFetch<DailyStats[]>(`/analytics/daily?start=${startDate}&end=${endDate}`),
  
  getWeeklyStats: (weeks: number = 4) =>
    apiFetch<WeeklyStats[]>(`/analytics/weekly?weeks=${weeks}`),
  
  getInsights: () =>
    apiFetch<BehaviourInsight[]>("/analytics/insights"),
  
  getConsistencyScore: () =>
    apiFetch<{ score: number; trend: number }>("/analytics/consistency"),
  
  getProductivityTrends: (days: number = 7) =>
    apiFetch<{ date: string; score: number }[]>(`/analytics/productivity?days=${days}`),
}

// Assessment API
export const assessmentApi = {
  submitDay: (response: AssessmentResponse) =>
    apiFetch<{ success: boolean }>("/assessment/submit", {
      method: "POST",
      body: JSON.stringify(response),
    }),
  
  getProgress: () =>
    apiFetch<{ completedDays: number; responses: AssessmentResponse[] }>("/assessment/progress"),
  
  getSummary: () =>
    apiFetch<AssessmentSummary>("/assessment/summary"),
}

// User API
export const userApi = {
  getProfile: () => apiFetch<User>("/user/profile"),
  
  updateProfile: (data: Partial<User>) =>
    apiFetch<User>("/user/profile", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  
  completeOnboarding: (data: { name: string; goals: string[]; focusAreas: string[] }) =>
    apiFetch<User>("/user/onboarding", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}
