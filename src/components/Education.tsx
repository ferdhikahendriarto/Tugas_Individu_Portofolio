import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Institut Teknologi Sepuluh Nopember",
      period: "2022 – Sekarang",
      degree: "Matematika"
    },
    {
      institution: "SMA Marsudirini Bekasi",
      period: "2019 – 2022",
      degree: "Sekolah Menengah Atas"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Pendidikan
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground mb-1">{edu.degree}</p>
                  <p className="text-sm text-accent font-medium">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
