import globalMap from "@/assets/global-presence-map.png";

const GlobalPresence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Global Presence</h2>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <img 
            src={globalMap} 
            alt="BNP Paribas global presence map showing private banking hubs" 
            className="w-full h-auto"
          />
        </div>
        
        <p className="text-center text-lg text-muted-foreground">
          Private banking hubs in Paris, London, Geneva, Monaco, Singapore, Hong Kong, and Dubai.
        </p>
      </div>
    </section>
  );
};

export default GlobalPresence;