import BNPHeader from "@/components/BNPHeader";
import BNPHero from "@/components/BNPHero";
import ProfileSelector from "@/components/ProfileSelector";
import GuidesCarousel from "@/components/GuidesCarousel";
import GiveBackProgram from "@/components/GiveBackProgram";
import PersonaCards from "@/components/PersonaCards";
import Solutions from "@/components/Solutions";
import DigitalPlatform from "@/components/DigitalPlatform";
import WhyBNP from "@/components/WhyBNP";
import TopRecommendations from "@/components/TopRecommendations";
import GlobalPresence from "@/components/GlobalPresence";
import Insights from "@/components/Insights";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        <BNPHero />
        <ProfileSelector />
        <GuidesCarousel />
        <GiveBackProgram />
        <PersonaCards />
        <Solutions />
        <DigitalPlatform />
        <WhyBNP />
        <TopRecommendations />
        <GlobalPresence />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
