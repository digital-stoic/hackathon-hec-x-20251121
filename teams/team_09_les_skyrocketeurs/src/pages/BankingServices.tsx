import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Building2, ExternalLink, Shield, TrendingUp, CreditCard, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BankingServices = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      toast({
        title: "Rendez-vous confirmé !",
        description: `Votre rendez-vous est prévu le ${selectedDate} à ${selectedTime}.`,
      });
    } else {
      toast({
        title: "Informations manquantes",
        description: "Veuillez sélectionner une date et une heure.",
        variant: "destructive"
      });
    }
  };

  const services = [
    {
      title: "Gestion de Patrimoine",
      description: "Conseils personnalisés pour optimiser votre patrimoine",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-primary to-secondary",
      features: ["Allocation d'actifs", "Fiscalité optimisée", "Succession"]
    },
    {
      title: "Investissements Premium",
      description: "Accès à des solutions d'investissement exclusives",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-secondary to-accent",
      features: ["Private Equity", "Immobilier", "Art & Collection"]
    },
    {
      title: "Services Bancaires",
      description: "Une gamme complète de services bancaires haut de gamme",
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-accent to-primary",
      features: ["Carte premium", "Concierge 24/7", "Assurances voyage"]
    }
  ];

  const offers = [
    {
      title: "Compte Esprit Libre",
      description: "Le compte courant nouvelle génération",
      bonus: "80€ offerts + 1 an gratuit",
      link: "https://mabanque.bnpparibas/"
    },
    {
      title: "PEA & Assurance-vie",
      description: "Investissez pour votre avenir",
      bonus: "Frais réduits la 1ère année",
      link: "https://mabanque.bnpparibas/"
    },
    {
      title: "Crédit Immobilier",
      description: "Financez votre projet immobilier",
      bonus: "Taux préférentiels",
      link: "https://mabanque.bnpparibas/"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="font-semibold">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="font-semibold">
              <ExternalLink className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Site BNP</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              BNP Banque Privée
            </h1>
            <p className="text-muted-foreground">
              Bénéficiez d'un accompagnement personnalisé pour vos projets patrimoniaux
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Appointment Booking */}
            <div className="space-y-6">
              <Card className="p-6 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-premium">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Prendre Rendez-vous</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Choisir une date
                    </label>
                    <input 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 rounded-lg border border-border bg-card font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Choisir un horaire
                    </label>
                    <select 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 rounded-lg border border-border bg-card font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Type de rendez-vous
                    </label>
                    <select className="w-full p-3 rounded-lg border border-border bg-card font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Première consultation</option>
                      <option>Gestion de patrimoine</option>
                      <option>Investissements</option>
                      <option>Ouverture de compte</option>
                    </select>
                  </div>

                  <Button 
                    onClick={handleBookAppointment}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Confirmer le rendez-vous
                  </Button>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">Votre conseiller dédié</div>
                      <div className="text-sm text-muted-foreground">
                        Un expert BNP Paribas vous accompagnera dans tous vos projets
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Services */}
              <Card className="p-6 border-border bg-card shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Nos Services</h2>
                </div>

                <div className="space-y-4">
                  {services.map((service, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base text-foreground mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Offers & Account Opening */}
            <div className="space-y-6">
              {/* Open Account */}
              <Card className="p-6 border-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 shadow-premium">
                <div className="text-center mb-6">
                  <Building2 className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Ouvrir un Compte BNP</h2>
                  <p className="text-sm text-muted-foreground">
                    Profitez d'offres exclusives pour les nouveaux clients
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "Ouverture 100% en ligne",
                    "Carte bancaire gratuite",
                    "Application mobile intuitive",
                    "Conseiller dédié"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
                    size="lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ouvrir un compte maintenant
                  </Button>
                </a>
              </Card>

              {/* Special Offers */}
              <Card className="p-6 border-border bg-card shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Offres Spéciales</h2>

                <div className="space-y-4">
                  {offers.map((offer, i) => (
                    <a 
                      key={i}
                      href={offer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                              {offer.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">{offer.description}</p>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-xs font-semibold">
                              {offer.bonus}
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Contact Info */}
              <Card className="p-6 border-secondary/50 bg-gradient-to-br from-secondary/10 to-accent/10 shadow-premium">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-8 h-8 text-secondary" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Besoin d'aide ?</h2>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4 text-primary" />
                      <div className="font-medium text-sm text-muted-foreground">Téléphone</div>
                    </div>
                    <div className="font-semibold text-base text-foreground">3477 (service gratuit + prix appel)</div>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-primary" />
                      <div className="font-medium text-sm text-muted-foreground">Email</div>
                    </div>
                    <div className="font-semibold text-base text-foreground">banque.privee@bnpparibas.com</div>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <div className="font-medium text-sm text-muted-foreground">Horaires</div>
                    </div>
                    <div className="font-semibold text-base text-foreground">Lun-Ven: 8h-20h</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingServices;
