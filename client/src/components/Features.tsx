import { Card } from "@/components/ui/card";
import { MessageSquare, BookOpen, FileText, Award } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description: "Get instant answers to your exam questions with context-aware AI responses tailored to RGPV syllabus."
  },
  {
    icon: BookOpen,
    title: "Syllabus Browser",
    description: "Access organized syllabus topics for all RGPV subjects with detailed explanations and study materials."
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    description: "Download and practice with previous year question papers to understand exam patterns and topics."
  },
  {
    icon: Award,
    title: "Interactive Quizzes",
    description: "Test your knowledge with subject-wise quizzes and track your progress as you prepare for exams."
  }
];

export default function Features() {
  return (
    <section className="w-full py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed specifically for RGPV students to ace their exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all cursor-pointer"
              data-testid={`card-feature-${index}`}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
