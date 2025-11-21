import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const GiveBackProgram = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-[#fdfcfb]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Subtle Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#003d2e]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-16 h-16 rounded-full border border-[#003d2e]/20 flex items-center justify-center bg-white shadow-sm">
              <Sparkles className="h-7 w-7 text-[#003d2e] stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* Premium Serif Heading */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#003d2e] tracking-tight leading-tight mb-4">
            Discover our<br />
            <span className="italic">"Give Back Program"</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] font-light max-w-2xl mx-auto leading-relaxed">
            Where exceptional wealth meets exceptional purpose
          </p>
        </div>

        {/* Elegant CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link 
            to="/give-back/about"
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#003d2e]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center gap-3 px-8 py-3.5 bg-white border border-[#003d2e]/30 text-[#003d2e] rounded-full font-light tracking-wide shadow-sm hover:shadow-md hover:border-[#003d2e]/50 transition-all duration-300">
              <span className="text-sm">About the program</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300 stroke-[1.5]" />
            </div>
          </Link>
          
          <Link 
            to="/give-back/impact-matching"
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#003d2e]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center gap-3 px-8 py-3.5 bg-[#003d2e] border border-[#003d2e] text-white rounded-full font-light tracking-wide shadow-sm hover:shadow-md hover:bg-[#002d1e] transition-all duration-300">
              <span className="text-sm">Discover the "Impact Matching"</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300 stroke-[1.5]" />
            </div>
          </Link>
        </div>

        {/* Subtle Divider Lines */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#003d2e]/20" />
          <div className="w-1 h-1 rounded-full bg-[#003d2e]/30" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#003d2e]/20" />
        </div>
      </div>
    </section>
  );
};

export default GiveBackProgram;
