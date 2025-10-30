import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getChatResponse } from "./ai";
import { insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint - AI-powered responses
  app.post("/api/chat", async (req, res) => {
    try {
      const validation = insertChatMessageSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: validation.error.errors 
        });
      }

      const { message } = validation.data;
      const aiResponse = await getChatResponse(message);

      return res.json({
        id: Date.now().toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date()
      });
    } catch (error) {
      console.error("Chat error:", error);
      return res.status(500).json({ 
        error: "Failed to process chat message",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Syllabus endpoints
  app.get("/api/syllabus", async (_req, res) => {
    try {
      const subjects = await storage.getSubjects();
      return res.json(subjects);
    } catch (error) {
      console.error("Error fetching syllabus:", error);
      return res.status(500).json({ error: "Failed to fetch syllabus" });
    }
  });

  app.get("/api/syllabus/:id", async (req, res) => {
    try {
      const subject = await storage.getSubjectById(req.params.id);
      
      if (!subject) {
        return res.status(404).json({ error: "Subject not found" });
      }

      return res.json(subject);
    } catch (error) {
      console.error("Error fetching subject:", error);
      return res.status(500).json({ error: "Failed to fetch subject" });
    }
  });

  // Previous year papers endpoints
  app.get("/api/papers", async (_req, res) => {
    try {
      const papers = await storage.getPapers();
      return res.json(papers);
    } catch (error) {
      console.error("Error fetching papers:", error);
      return res.status(500).json({ error: "Failed to fetch papers" });
    }
  });

  app.get("/api/papers/:id", async (req, res) => {
    try {
      const paper = await storage.getPaperById(req.params.id);
      
      if (!paper) {
        return res.status(404).json({ error: "Paper not found" });
      }

      return res.json(paper);
    } catch (error) {
      console.error("Error fetching paper:", error);
      return res.status(500).json({ error: "Failed to fetch paper" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
