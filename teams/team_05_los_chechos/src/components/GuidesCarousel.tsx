import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import guide1m from "@/assets/guides/guide-1m-investment.jpg";
import guideDiversify from "@/assets/guides/guide-diversify.jpg";
import guideLargeCapital from "@/assets/guides/guide-large-capital.jpg";
import guideStartInvesting from "@/assets/guides/guide-start-investing.jpg";
import guide2025 from "@/assets/guides/guide-2025.jpg";
import guideSustainable from "@/assets/guides/guide-sustainable.jpg";

const guides = [
  {
    title: "How to invest my 1 million euros?",
    description: "Expert strategies for managing significant wealth and maximizing returns.",
    image: guide1m,
    link: "/guides/1-million-euros"
  },
  {
    title: "How do I diversify my portfolio?",
    description: "Essential techniques for spreading risk across different asset classes.",
    image: guideDiversify,
    link: "/guides/diversify-portfolio"
  },
  {
    title: "Large Capital investment: what to do?",
    description: "Strategic approaches for deploying substantial capital effectively.",
    image: guideLargeCapital,
    link: "/guides/large-capital"
  },
  {
    title: "How to start investing?",
    description: "A beginner's guide to taking your first steps in wealth building.",
    image: guideStartInvesting,
    link: "/guides/start-investing"
  },
  {
    title: "Where to invest 2025?",
    description: "Market insights and opportunities for the year ahead.",
    image: guide2025,
    link: "/guides/invest-2025"
  },
  {
    title: "BNP Guide to sustainable investment",
    description: "Align your investments with environmental and social values.",
    image: guideSustainable,
    link: "/guides/sustainable-investment"
  }
];

const GuidesCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Investment Guides</h2>
          <p className="text-xl text-muted-foreground">
            Expert insights to help you make informed decisions
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {guides.map((guide, index) => (
                <CarouselItem key={index} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link to={guide.link}>
                    <div className="relative h-[280px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      {/* Hero Image */}
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
                      
                      {/* Content Section */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-base font-bold mb-2 leading-tight line-clamp-2">
                          {guide.title}
                        </h3>
                        <p className="text-white/90 mb-3 text-xs leading-relaxed line-clamp-2">
                          {guide.description}
                        </p>
                        <div className="flex justify-end">
                          <span className="inline-flex items-center text-white text-xs hover:text-white/80 font-medium transition-colors">
                            Read more <span className="ml-1 text-[10px]">▶</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GuidesCarousel;
