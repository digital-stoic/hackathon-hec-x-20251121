import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BNPHero = () => {
  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wealth management excellence"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Wealth. Our Global Expertise.
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Bespoke strategies. Digital excellence. Sustainable legacy.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Your Profile
            </Button>
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
              Speak to an Advisor
            </Button>
            <Link to="/simulator">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Try AI Simulator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BNPHero;
