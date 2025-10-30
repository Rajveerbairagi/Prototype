import aboutImage from "@assets/generated_images/Learning_flow_diagram_illustration_6607a18d.png";

export default function About() {
  return (
    <section className="w-full py-16 md:py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About the Project
            </h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p className="text-foreground">
                The RGPV AI Exam Assistant is a comprehensive platform designed to revolutionize 
                how students prepare for their university examinations. Built specifically for 
                RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya) students, our platform leverages 
                cutting-edge AI technology to provide personalized learning support.
              </p>
              <p className="text-muted-foreground">
                Whether you need quick answers to complex topics, want to explore the complete 
                syllabus, practice with previous year papers, or test your knowledge with quizzes, 
                our AI assistant is here to guide you every step of the way.
              </p>
              <p className="text-muted-foreground">
                Our mission is to make quality exam preparation accessible to every RGPV student, 
                helping them achieve academic excellence through smart, AI-powered learning tools.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={aboutImage} 
              alt="Learning flow diagram showing student to AI to resources" 
              className="rounded-xl shadow-md max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
