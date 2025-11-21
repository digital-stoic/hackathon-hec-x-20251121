import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VillageProgression from "@/components/VillageProgression";
import GameplaySteps from "@/components/GameplaySteps";
import BuildingsShowcase from "@/components/BuildingsShowcase";
import FinancialProducts from "@/components/FinancialProducts";
import PlayAnywhere from "@/components/PlayAnywhere";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <VillageProgression />
      <GameplaySteps />
      <BuildingsShowcase />
      <FinancialProducts />
      <PlayAnywhere />
      <Footer />
    </main>
  );
};

export default Index;
