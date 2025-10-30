import Header from "@/components/Header";
import PapersList from "@/components/PapersList";

export default function Papers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <PapersList />
        </div>
      </main>
    </div>
  );
}
