import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
};

export default Index;
