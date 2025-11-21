import Hero from "@/components/Hero";
import About from "@/components/About";
import VillageProgression from "@/components/VillageProgression";
import GameplaySteps from "@/components/GameplaySteps";
import BuildingsShowcase from "@/components/BuildingsShowcase";
import PlayAnywhere from "@/components/PlayAnywhere";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <VillageProgression />
      <GameplaySteps />
      <BuildingsShowcase />
      <PlayAnywhere />
      <Footer />
    </main>
  );
};

export default Index;
