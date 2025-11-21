import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Real-time performance",
  "ESG impact metrics",
  "Global asset map",
  "Secure messaging",
  "Document vault",
  "Personalised insights"
];

const DigitalPlatform = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Your portfolio. Your world. In one digital platform.
            </h2>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg">See the Digital Demo</Button>
          </div>
          
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <p className="text-muted-foreground">Digital experience preview</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatform;