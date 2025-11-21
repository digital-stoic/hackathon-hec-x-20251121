import { Button } from "@/components/ui/button";
import ceoImage from "@/assets/ceo-quote.jpg";

const CEOQuote = () => {
  return (
    <section className="py-0 bg-secondary">
      <div className="w-full">
        <img
          src={ceoImage}
          alt="Vincent Lecomte, CEO of BNP Paribas Wealth Management"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default CEOQuote;
