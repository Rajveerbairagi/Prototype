import Header from "@/components/Header";
import SyllabusBrowser from "@/components/SyllabusBrowser";

export default function Syllabus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Course Syllabus</h1>
            <p className="text-muted-foreground">
              Browse through comprehensive syllabus for all RGPV subjects
            </p>
          </div>
          <SyllabusBrowser />
        </div>
      </main>
    </div>
  );
}
