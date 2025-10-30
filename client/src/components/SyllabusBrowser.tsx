import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChevronRight, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import type { Subject } from "@shared/schema";

export default function SyllabusBrowser() {
  const { data: subjects, isLoading, error } = useQuery<Subject[]>({
    queryKey: ["/api/syllabus"],
  });

  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  // Set first subject as selected when data loads
  useEffect(() => {
    if (subjects && subjects.length > 0 && !selectedSubject) {
      setSelectedSubject(subjects[0]);
    }
  }, [subjects, selectedSubject]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive font-semibold mb-2">Failed to load syllabus</p>
        <p className="text-muted-foreground">
          {error instanceof Error ? error.message : "An error occurred"}
        </p>
      </div>
    );
  }

  if (!subjects || subjects.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        No syllabus data available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
      <div className="lg:col-span-1 space-y-2">
        <h3 className="font-semibold text-lg mb-4 px-2">Subjects</h3>
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className={`p-4 cursor-pointer transition-all hover-elevate active-elevate-2 ${
              selectedSubject?.id === subject.id ? "bg-accent border-accent-border" : ""
            }`}
            onClick={() => setSelectedSubject(subject)}
            data-testid={`card-subject-${subject.id}`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold truncate">{subject.name}</h4>
                <p className="text-sm text-muted-foreground">{subject.code}</p>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0" />
            </div>
          </Card>
        ))}
      </div>

      <div className="lg:col-span-3">
        {selectedSubject ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedSubject.name}</h2>
                <p className="text-muted-foreground">Course Code: {selectedSubject.code}</p>
              </div>
              <Badge variant="secondary" className="text-sm">
                {selectedSubject.topics.length} Units
              </Badge>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {selectedSubject.topics.map((topic, index) => (
                <AccordionItem key={index} value={`topic-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline" data-testid={`accordion-topic-${index}`}>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {topic.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-8 pt-2 space-y-2">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <div 
                          key={subIndex}
                          className="py-2 px-3 rounded-md hover-elevate active-elevate-2 cursor-pointer transition-all"
                          data-testid={`subtopic-${index}-${subIndex}`}
                        >
                          <p className="text-base text-foreground">{subtopic}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            Select a subject to view syllabus
          </div>
        )}
      </div>
    </div>
  );
}
