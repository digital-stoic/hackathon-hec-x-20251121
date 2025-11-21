import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GiveBackProgram = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">Discover our "Give Back Program"</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/give-back/about"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <span>About the program</span>
            </Link>
            
            <Link 
              to="/give-back/impact-matching"
              className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <span>Discover the "Impact Matching"</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveBackProgram;
