import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  TrendingUp,
  Building2,
  Handshake,
  FileCheck,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Scale,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Conseil = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif text-champagne mb-3">
            {t('conseil.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            {t('conseil.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Croissance Externe */}
          <div className="bg-white border border-border rounded-lg p-8 hover:shadow-premium transition-all">
            <TrendingUp className="w-12 h-12 text-champagne mb-6" />
            <h2 className="text-2xl font-serif text-champagne mb-4">
              {t('conseil.growth.title')}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('conseil.growth.desc')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.growth.item1')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.growth.item2')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.growth.item3')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.growth.item4')}
                </span>
              </li>
            </ul>
            <Button className="w-full bg-champagne text-white hover:bg-champagne-muted">
              <Calendar className="w-4 h-4 mr-2" />
              {t('conseil.cta.meeting')}
            </Button>
          </div>

          {/* Cession & Transmission */}
          <div className="bg-white border border-border rounded-lg p-8 hover:shadow-premium transition-all">
            <Building2 className="w-12 h-12 text-champagne mb-6" />
            <h2 className="text-2xl font-serif text-champagne mb-4">
              {t('conseil.sale.title')}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('conseil.sale.desc')}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.sale.item1')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.sale.item2')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.sale.item3')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {t('conseil.sale.item4')}
                </span>
              </li>
            </ul>
            <Button className="w-full bg-champagne text-white hover:bg-champagne-muted">
              <Calendar className="w-4 h-4 mr-2" />
              {t('conseil.cta.meeting')}
            </Button>
          </div>
        </div>

        {/* Legal Structure Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Scale className="w-12 h-12 text-champagne mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-champagne mb-3">
              {t('conseil.legal.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('conseil.legal.subtitle')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-champagne">
                  {t('conseil.legal.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('conseil.legal.a1')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-champagne">
                  {t('conseil.legal.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('conseil.legal.a2')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-champagne">
                  {t('conseil.legal.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('conseil.legal.a3')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-champagne">
                  {t('conseil.legal.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('conseil.legal.a4')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-champagne">
                  {t('conseil.legal.q5')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('conseil.legal.a5')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-champagne text-center mb-12">
            {t('conseil.process.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: t('conseil.process.step1'),
                description: t('conseil.process.step1.desc'),
                icon: FileCheck,
              },
              {
                step: "2",
                title: t('conseil.process.step2'),
                description: t('conseil.process.step2.desc'),
                icon: TrendingUp,
              },
              {
                step: "3",
                title: t('conseil.process.step3'),
                description: t('conseil.process.step3.desc'),
                icon: Handshake,
              },
              {
                step: "4",
                title: t('conseil.process.step4'),
                description: t('conseil.process.step4.desc'),
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-champagne" />
                </div>
                <div className="text-sm font-mono text-champagne mb-2">
                  Étape {item.step}
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-champagne/10 border border-champagne/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif text-champagne mb-4">
            {t('conseil.cta.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('conseil.cta.desc')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-champagne text-white hover:bg-champagne-muted h-12 px-8">
              <Calendar className="w-5 h-5 mr-2" />
              {t('conseil.cta.meeting')}
            </Button>
            <Button
              variant="outline"
              className="border-champagne text-champagne hover:bg-champagne/10 h-12 px-8"
            >
              {t('conseil.cta.brochure')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conseil;
