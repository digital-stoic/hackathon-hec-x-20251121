import { Button } from "@/components/ui/button";
import logoValora from "@/assets/logo-valora.jpeg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoValora} 
            alt="Valora Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About us
          </a>
          <a href="#gameplay" className="text-foreground/80 hover:text-foreground transition-colors">
            Gameplay
          </a>
          <a href="#buildings" className="text-foreground/80 hover:text-foreground transition-colors">
            Buildings
          </a>
          <a href="#careers" className="text-foreground/80 hover:text-foreground transition-colors">
            Careers
          </a>
          <a href="#support" className="text-foreground/80 hover:text-foreground transition-colors">
            Support
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="default">
            Login
          </Button>
          <Button variant="hero" size="default">
            Play
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
