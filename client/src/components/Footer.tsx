import { Link } from "wouter";
import { MessageSquare, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">RGPV AI Assistant</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering RGPV students with AI-powered exam preparation tools for academic excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md" data-testid="link-footer-home">
                  Home
                </a>
              </Link>
              <Link href="/chat">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md" data-testid="link-footer-chat">
                  Chat
                </a>
              </Link>
              <Link href="/syllabus">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md" data-testid="link-footer-syllabus">
                  Syllabus
                </a>
              </Link>
              <Link href="/papers">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md" data-testid="link-footer-papers">
                  Papers
                </a>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:support@rgpvai.com"
                className="p-2 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 RGPV AI Exam Assistant. Built with ❤️ for RGPV Students.
          </p>
        </div>
      </div>
    </footer>
  );
}
