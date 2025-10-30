import Header from "@/components/Header";
import ChatInterface from "@/components/ChatInterface";

export default function Chat() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
}
