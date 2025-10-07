import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Staf ahli ENDEV Himatika ITS",
      period: "Januari 2025 – Sekarang",
      description: "Bertanggung jawab dalam pengelolaan teknis dan koordinasi kegiatan ENDEV Himatika ITS"
    },
    {
      title: "Staf ahli Equipment, Permission, and Logistic OMITS17",
      period: "Februari 2024 – November 2024",
      description: "Mengatur persediaan perlengkapan dan logistik untuk OMITS17"
    },
    {
      title: "Wakil Mentor KMK ITS 2023",
      period: "Agustus 2023 – Desember 2023",
      description: "Melakukan mentoring kepada mahasiswa baru KMK 2023 dalam kegiatan pengenalan dan pembinaan rohani"
    },
    {
      title: "LO Kemah Rohani KMK ITS 2023",
      period: "Juli 2023 – November 2023",
      description: "Menjadi pendamping dalam kemah rohani KMK ITS 2023"
    },
    {
      title: "Staf K3 PSB KMK ITS 2023",
      period: "Juli 2023 – Agustus 2023",
      description: "Menyiapkan kebutuhan logistik untuk Pelatihan Spiritual dan Kebangsaan KMK ITS 2023"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Pengalaman Organisasi
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 md:p-8 shadow-soft border border-border hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
