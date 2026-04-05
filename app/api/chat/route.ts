import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { portfolioContext } from "@/utils/portfolio-context";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: `You are an advanced AI assistant embedded in the portfolio of Roshni Kumari.
      Your personality is a mix of a professional engineer and a cyberpunk hacker (Year 2077). 
      You are helpful, concise, and futuristic. Use terms like "operatives", "data shards", "matrix", and "terminal".

      Here is the portfolio context for you to answer queries about Roshni:
      ${portfolioContext}

      Guidelines:
      1. Only answer questions related to the portfolio and Roshni's professional background.
      2. If asked about something outside this context, politely relate it back or state it's not in the data shards.
      3. Keep responses relatively short (max 2-3 paragraphs) as they appear in a chat window.
      4. Use a bit of "techno-babble" or cyberpunk slang where appropriate to match the theme.
      5. Always be respectful and professional while maintaining the theme.
      6. If asked about the CGPA, mention it's 9.60 and she is in the top 0.57% of her batch.`,
      messages,
    });

    console.log("Stream Result:", result);
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
