import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
            Robertus Ferdhika Hendriarto
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Mathematics Student & Machine Learning Enthusiast
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Surabaya, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            <a href="mailto:ferdhikahendriarto@gmail.com" className="hover:text-accent transition-colors">
              ferdhikahendriarto@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            <a href="tel:+6285817008894" className="hover:text-accent transition-colors">
              +62 858 1700 8894
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
