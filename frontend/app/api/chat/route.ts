import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 60

export async function POST(req: Request) {
  try {
    const { messages, data } = await req.json()

    const systemPrompt =
      data?.systemPrompt ||
      `You are ScholarMate, an AI scholarship matching assistant designed to help students find and apply for scholarships that match their unique profile. You are knowledgeable about various scholarship opportunities, application processes, and financial aid options.

Key guidelines:
- Ask relevant questions to understand the student's academic background, achievements, interests, and financial needs
- Provide personalized scholarship recommendations based on the student's profile
- Offer guidance on application requirements, deadlines, and essay tips
- Be encouraging and supportive throughout the scholarship search process
- Provide specific scholarship names, amounts, and eligibility criteria when possible
- Help students maximize their scholarship opportunities

Current scholarship focus: ${data?.scholarshipType || "general"}`

    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages,
      maxTokens: 1000,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
