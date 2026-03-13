import { NextResponse } from "next/server"
import type { DailyStats, WeeklyStats, BehaviourInsight } from "@/lib/types"

// Mock analytics data - In production, aggregated from DynamoDB via Lambda
const mockDailyStats: DailyStats[] = [
  { date: "2024-01-15", completion: 80, habitsCompleted: 4, totalHabits: 5, focusHours: 5.5, moodScore: 7 },
  { date: "2024-01-16", completion: 100, habitsCompleted: 5, totalHabits: 5, focusHours: 6.2, moodScore: 8 },
  { date: "2024-01-17", completion: 60, habitsCompleted: 3, totalHabits: 5, focusHours: 4.8, moodScore: 6 },
  { date: "2024-01-18", completion: 80, habitsCompleted: 4, totalHabits: 5, focusHours: 7.1, moodScore: 8 },
  { date: "2024-01-19", completion: 100, habitsCompleted: 5, totalHabits: 5, focusHours: 5.9, moodScore: 9 },
  { date: "2024-01-20", completion: 40, habitsCompleted: 2, totalHabits: 5, focusHours: 3.2, moodScore: 5 },
  { date: "2024-01-21", completion: 60, habitsCompleted: 3, totalHabits: 5, focusHours: 4.0, moodScore: 6 },
]

const mockWeeklyStats: WeeklyStats[] = [
  {
    weekStart: "2024-01-01",
    weekEnd: "2024-01-07",
    consistencyScore: 75,
    avgCompletion: 72,
    totalHabitsCompleted: 25,
    productivityTrend: 5,
    streakData: [],
  },
  {
    weekStart: "2024-01-08",
    weekEnd: "2024-01-14",
    consistencyScore: 82,
    avgCompletion: 78,
    totalHabitsCompleted: 28,
    productivityTrend: 8,
    streakData: [],
  },
  {
    weekStart: "2024-01-15",
    weekEnd: "2024-01-21",
    consistencyScore: 68,
    avgCompletion: 65,
    totalHabitsCompleted: 22,
    productivityTrend: -3,
    streakData: [],
  },
  {
    weekStart: "2024-01-22",
    weekEnd: "2024-01-28",
    consistencyScore: 91,
    avgCompletion: 89,
    totalHabitsCompleted: 32,
    productivityTrend: 12,
    streakData: [],
  },
]

const mockInsights: BehaviourInsight[] = [
  {
    id: "1",
    type: "pattern",
    title: "Morning productivity peak",
    description: "You complete 40% more habits before 10 AM. Consider scheduling your most important tasks during this window.",
    confidence: 0.87,
    createdAt: "2024-01-21T00:00:00Z",
  },
  {
    id: "2",
    type: "suggestion",
    title: "Sleep consistency opportunity",
    description: "Your sleep habit has the lowest completion rate. Try setting a reminder 30 minutes before your target bedtime.",
    confidence: 0.92,
    createdAt: "2024-01-21T00:00:00Z",
  },
  {
    id: "3",
    type: "achievement",
    title: "Mindfulness streak milestone",
    description: "You've maintained your meditation habit for 7 consecutive days - a personal best!",
    confidence: 1.0,
    createdAt: "2024-01-21T00:00:00Z",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "daily"
  
  // In production: Call AWS Lambda which queries DynamoDB
  // const response = await fetch(`${process.env.AWS_API_GATEWAY_URL}/analytics?type=${type}`, {
  //   headers: { Authorization: `Bearer ${cognitoToken}` }
  // })
  
  switch (type) {
    case "weekly":
      return NextResponse.json(mockWeeklyStats)
    case "insights":
      return NextResponse.json(mockInsights)
    case "consistency":
      return NextResponse.json({ score: 91, trend: 9 })
    default:
      return NextResponse.json(mockDailyStats)
  }
}
