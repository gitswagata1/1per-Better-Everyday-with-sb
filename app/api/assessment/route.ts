import { NextResponse } from "next/server"
import type { AssessmentResponse, AssessmentSummary } from "@/lib/types"

// Mock assessment data - In production, stored in DynamoDB
const mockResponses: AssessmentResponse[] = [
  { day: 1, sleepHours: 7, focusHours: 5, moodLevel: 7, screenTime: 4, timestamp: "2024-01-15T22:00:00Z" },
  { day: 2, sleepHours: 6.5, focusHours: 6, moodLevel: 6, screenTime: 5, timestamp: "2024-01-16T22:00:00Z" },
  { day: 3, sleepHours: 8, focusHours: 7, moodLevel: 8, screenTime: 3, timestamp: "2024-01-17T22:00:00Z" },
]

const mockSummary: AssessmentSummary = {
  userId: "user_1",
  completedDays: 3,
  avgSleepHours: 7.2,
  avgFocusHours: 6,
  avgMoodLevel: 7,
  avgScreenTime: 4,
  behaviourProfile: {
    primaryType: "morning_person",
    focusPattern: "deep_worker",
    energyCurve: [60, 85, 90, 75, 65, 50, 40],
    recommendations: [
      "Schedule demanding tasks between 9-11 AM",
      "Take breaks every 90 minutes to maintain focus",
      "Reduce screen time in the evening to improve sleep quality",
    ],
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  
  // In production: Call AWS Lambda which queries DynamoDB
  // const response = await fetch(`${process.env.AWS_API_GATEWAY_URL}/assessment`, {
  //   headers: { Authorization: `Bearer ${cognitoToken}` }
  // })
  
  if (type === "summary") {
    return NextResponse.json(mockSummary)
  }
  
  return NextResponse.json({
    completedDays: mockResponses.length,
    responses: mockResponses,
  })
}

export async function POST(request: Request) {
  const body: AssessmentResponse = await request.json()
  
  // In production: Call AWS Lambda to write to DynamoDB
  // await fetch(`${process.env.AWS_API_GATEWAY_URL}/assessment`, {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${cognitoToken}` },
  //   body: JSON.stringify(body)
  // })
  
  return NextResponse.json({ success: true })
}
