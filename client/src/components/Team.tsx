import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const teamMembers = [
  { name: "Rahul Sharma", role: "Lead Developer", initials: "RS" },
  { name: "Priya Patel", role: "AI Engineer", initials: "PP" },
  { name: "Amit Kumar", role: "Frontend Developer", initials: "AK" },
  { name: "Sneha Gupta", role: "UX Designer", initials: "SG" }
];

export default function Team() {
  return (
    <section className="w-full py-16 md:py-20 bg-muted/30" id="team">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate students building solutions for students
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-elevate transition-all cursor-pointer"
              data-testid={`card-team-${index}`}
            >
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarFallback className="text-xl font-semibold bg-primary text-primary-foreground">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
