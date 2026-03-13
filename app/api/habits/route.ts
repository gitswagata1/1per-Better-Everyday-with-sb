import { NextResponse } from "next/server"
import type { Habit } from "@/lib/types"

// Mock data - In production, this would integrate with AWS Lambda + DynamoDB
const mockHabits: Habit[] = [
  {
    id: "1",
    userId: "user_1",
    name: "Morning meditation",
    category: "mindfulness",
    frequency: "daily",
    streak: 7,
    completed: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    userId: "user_1",
    name: "30 min exercise",
    category: "fitness",
    frequency: "daily",
    streak: 12,
    completed: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "3",
    userId: "user_1",
    name: "Read for 20 minutes",
    category: "learning",
    frequency: "daily",
    streak: 5,
    completed: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "4",
    userId: "user_1",
    name: "Sleep by 10:30 PM",
    category: "sleep",
    frequency: "daily",
    streak: 3,
    completed: false,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "5",
    userId: "user_1",
    name: "No phone first hour",
    category: "productivity",
    frequency: "daily",
    streak: 8,
    completed: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
]

export async function GET() {
  // In production: Call AWS Lambda via API Gateway
  // const response = await fetch(`${process.env.AWS_API_GATEWAY_URL}/habits`, {
  //   headers: { Authorization: `Bearer ${cognitoToken}` }
  // })
  
  return NextResponse.json(mockHabits)
}

export async function POST(request: Request) {
  const body = await request.json()
  
  const newHabit: Habit = {
    id: `habit_${Date.now()}`,
    userId: "user_1",
    ...body,
    streak: 0,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  
  // In production: Call AWS Lambda to write to DynamoDB
  // await fetch(`${process.env.AWS_API_GATEWAY_URL}/habits`, {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${cognitoToken}` },
  //   body: JSON.stringify(newHabit)
  // })
  
  return NextResponse.json(newHabit, { status: 201 })
}
