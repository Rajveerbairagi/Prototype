import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { PreviousYearPaper } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function PapersList() {
  const { toast } = useToast();
  
  const { data: papers, isLoading, error } = useQuery<PreviousYearPaper[]>({
    queryKey: ["/api/papers"],
  });

  const handleDownload = (paperId: string, title: string) => {
    console.log(`Downloading paper ${paperId}`);
    toast({
      title: "Download Started",
      description: `Downloading "${title}"...`,
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Previous Year Papers</h2>
          <p className="text-muted-foreground">
            Download and practice with previous examination papers
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-destructive font-semibold mb-2">Failed to load papers</p>
          <p className="text-muted-foreground">
            {error instanceof Error ? error.message : "An error occurred"}
          </p>
        </div>
      </div>
    );
  }

  if (!papers || papers.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Previous Year Papers</h2>
          <p className="text-muted-foreground">
            Download and practice with previous examination papers
          </p>
        </div>
        <div className="text-center text-muted-foreground py-12">
          No papers available at the moment
        </div>
      </div>
    );
  }

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
                onClick={() => handleDownload(paper.id, paper.title)}
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
