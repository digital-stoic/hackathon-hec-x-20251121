import { Button } from "@/components/ui/button";
import heroVillage from "@/assets/beginner-village.png";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroVillage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Build Your Village.{" "}
            <span className="text-gradient">Build Your Wealth.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Learn finance the fun way—grow your village, invest wisely, and level up your financial skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Play Now
              <PlayCircle className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Explore the Game
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
