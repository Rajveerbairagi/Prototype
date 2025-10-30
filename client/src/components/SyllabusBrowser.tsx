import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// todo: remove mock functionality
const subjects = [
  {
    id: "1",
    name: "Data Structures",
    code: "CS401",
    topics: [
      { title: "Arrays and Linked Lists", subtopics: ["Array Operations", "Singly Linked List", "Doubly Linked List", "Circular Linked List"] },
      { title: "Stacks and Queues", subtopics: ["Stack Implementation", "Queue Implementation", "Priority Queue", "Deque"] },
      { title: "Trees", subtopics: ["Binary Tree", "Binary Search Tree", "AVL Tree", "B-Tree"] },
      { title: "Graphs", subtopics: ["Graph Representation", "BFS", "DFS", "Shortest Path"] }
    ]
  },
  {
    id: "2",
    name: "Database Management",
    code: "CS402",
    topics: [
      { title: "Introduction to DBMS", subtopics: ["Database Concepts", "Data Models", "Schema Architecture"] },
      { title: "SQL", subtopics: ["DDL Commands", "DML Commands", "Joins", "Subqueries"] },
      { title: "Normalization", subtopics: ["1NF", "2NF", "3NF", "BCNF"] },
      { title: "Transactions", subtopics: ["ACID Properties", "Concurrency Control", "Recovery"] }
    ]
  },
  {
    id: "3",
    name: "Operating Systems",
    code: "CS403",
    topics: [
      { title: "Process Management", subtopics: ["Process States", "Scheduling", "Synchronization"] },
      { title: "Memory Management", subtopics: ["Paging", "Segmentation", "Virtual Memory"] },
      { title: "File Systems", subtopics: ["File Organization", "Directory Structure", "Disk Management"] }
    ]
  }
];

export default function SyllabusBrowser() {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
      <div className="lg:col-span-1 space-y-2">
        <h3 className="font-semibold text-lg mb-4 px-2">Subjects</h3>
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className={`p-4 cursor-pointer transition-all hover-elevate active-elevate-2 ${
              selectedSubject.id === subject.id ? "bg-accent border-accent-border" : ""
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
      </div>
    </div>
  );
}
