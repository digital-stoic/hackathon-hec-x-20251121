import { Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlayAnywhere = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Play <span className="text-gradient">Anywhere</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available on mobile and desktop. Learn and play wherever you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-8">
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-6 bg-card rounded-3xl shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                <Smartphone className="w-16 h-16 text-primary" />
              </div>
              <span className="text-lg font-semibold">Mobile</span>
            </div>
            
            <div className="hidden sm:block text-4xl text-muted-foreground/30 font-bold">+</div>
            
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-6 bg-card rounded-3xl shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                <Monitor className="w-16 h-16 text-accent" />
              </div>
              <span className="text-lg font-semibold">Desktop</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="mt-8">
            Start Playing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlayAnywhere;
