import { Clock, Users, Lightbulb, MessageCircle } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Time Management",
      icon: Clock
    },
    {
      name: "Team Work",
      icon: Users
    },
    {
      name: "Problem Solving",
      icon: Lightbulb
    },
    {
      name: "Communication",
      icon: MessageCircle
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Keahlian
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
