import { z } from "zod";

// Chat message types
export const insertChatMessageSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Syllabus types
export interface SyllabusSubtopic {
  title: string;
}

export interface SyllabusTopic {
  title: string;
  subtopics: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  topics: SyllabusTopic[];
}

// Previous year paper types
export interface PreviousYearPaper {
  id: string;
  title: string;
  subject: string;
  year: string;
  semester: string;
  size: string;
  downloadUrl?: string;
}
