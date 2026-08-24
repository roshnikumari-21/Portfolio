import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { portfolioContext } from "@/utils/portfolio-context";

export const maxDuration = 30;

function buildSystemPrompt() {
  return [
    "You are an assistant in Roshni Kumari's developer portfolio.",
    "You answer questions about her background, skills, projects, resume, and experience.",
    "Be concise, professional, and specific. Use the context below as your source of truth.",
    "",
    "Portfolio context:",
    portfolioContext,
    "",
    "Guidelines:",
    "1. Only answer questions related to Roshni's professional background and this portfolio.",
    "2. If asked about something outside this context, politely say it is not in her resume materials.",
    "3. Keep replies short (max 2-3 paragraphs) because they appear in a compact chat panel.",
    "4. If asked about CGPA, mention 9.34/10.0 and that she ranks in the top 0.85% of a 700+ student batch.",
    "5. She has two Flipkart internships: May-Jul 2025 (Content Management Platform) and May-Jul 2026 (Compliance Management Platform). Do not say she interned in 2024.",
    "6. She has solved 1200+ problems, not 1500+. LeetCode rating is 1728.",
  ].join("\n");
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: buildSystemPrompt(),
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Chat unavailable" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
