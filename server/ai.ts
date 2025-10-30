// Integration reference: blueprint:javascript_gemini
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getChatResponse(userMessage: string): Promise<string> {
  try {
    const systemPrompt = `You are an AI assistant specialized in helping RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya) university students prepare for their exams. 

Your role is to:
- Provide clear, accurate explanations of topics from the RGPV syllabus
- Help students understand complex concepts in Computer Science and Engineering
- Answer questions about Data Structures, DBMS, Operating Systems, Computer Networks, and related subjects
- Provide exam preparation tips and study strategies
- Explain concepts in a friendly, educational tone suitable for university students
- Break down complex topics into simpler parts
- Use examples when helpful

Keep your responses concise but thorough. Focus on helping students learn and understand the material effectively.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
      },
      contents: userMessage,
    });

    return response.text || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to get AI response. Please check your API key and try again.");
  }
}
