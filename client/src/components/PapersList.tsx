import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";

// todo: remove mock functionality
const papers = [
  {
    id: "1",
    title: "Data Structures - Mid Term Exam",
    subject: "CS401",
    year: "2024",
    semester: "5th",
    size: "2.3 MB"
  },
  {
    id: "2",
    title: "Database Management - Final Exam",
    subject: "CS402",
    year: "2023",
    semester: "5th",
    size: "1.8 MB"
  },
  {
    id: "3",
    title: "Operating Systems - Mid Term",
    subject: "CS403",
    year: "2024",
    semester: "5th",
    size: "2.1 MB"
  },
  {
    id: "4",
    title: "Data Structures - Final Exam",
    subject: "CS401",
    year: "2023",
    semester: "5th",
    size: "2.5 MB"
  },
  {
    id: "5",
    title: "Database Management - Mid Term",
    subject: "CS402",
    year: "2024",
    semester: "5th",
    size: "1.9 MB"
  },
  {
    id: "6",
    title: "Operating Systems - Final Exam",
    subject: "CS403",
    year: "2023",
    semester: "5th",
    size: "2.4 MB"
  }
];

export default function PapersList() {
  const handleDownload = (paperId: string) => {
    console.log(`Downloading paper ${paperId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Previous Year Papers</h2>
        <p className="text-muted-foreground">
          Download and practice with previous examination papers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {papers.map((paper) => (
          <Card 
            key={paper.id}
            className="p-6 hover-elevate transition-all"
            data-testid={`card-paper-${paper.id}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{paper.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {paper.subject}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{paper.year}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Semester {paper.semester}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {paper.size}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleDownload(paper.id)}
                variant="outline"
                className="gap-2"
                data-testid={`button-download-${paper.id}`}
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
