import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-8">
          Let's shape your wealth future together.
        </h2>
        
        <Button 
          size="lg" 
          className="bg-background text-foreground hover:bg-background/90"
        >
          Talk to a Private Banker
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;