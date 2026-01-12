import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@assets/generated_images/Student_AI_chat_learning_7a63608c.png";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Your Personal AI Assistant for{" "}
              <span className="text-primary">RGPV Exams</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Get instant answers, syllabus explanations, and personalized study support. 
              Prepare smarter, not harder with AI-powered learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/chat">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-lg gap-2" data-testid="button-start-chat">
                Chat with AI Assistant
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/syllabus">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold rounded-lg gap-2" data-testid="button-browse-syllabus">
                <BookOpen className="h-5 w-5" />
                Browse Syllabus
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by 1k+ RGPV Students
          </p>

          <div className="mt-12">
            <img 
              src={heroImage} 
              alt="Student using AI chat interface for exam preparation" 
              className="rounded-xl shadow-lg max-w-4xl mx-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
