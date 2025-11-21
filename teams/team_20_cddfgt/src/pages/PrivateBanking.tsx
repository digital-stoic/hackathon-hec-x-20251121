import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Award, TrendingUp, Shield, Users, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bnpLogo from "@/assets/bnp-logo.jpg";

const PrivateBanking = () => {
  const navigate = useNavigate();

  const advisorProfile = {
    name: "Sophie Durand",
    role: "Conseillère Banque Privée",
    experience: "15 ans d'expérience",
    specialities: ["Patrimoine", "Investissement", "Fiscalité"],
  };

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Accompagnement personnalisé",
      description: "Un conseiller dédié qui comprend votre activité et vos objectifs"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Optimisation fiscale",
      description: "Stratégies sur-mesure pour optimiser votre fiscalité d'entrepreneur"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Services premium",
      description: "Accès à des produits d'investissement et services exclusifs"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Réseau d'experts",
      description: "Connexion avec notre réseau de professionnels (avocats, experts-comptables...)"
    }
  ];

  const handleAppointmentRequest = () => {
    toast.success("Demande de rendez-vous envoyée ! Nous vous recontacterons sous 24h.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Private Launch</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/strategies")}>
              Conseils
            </Button>
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au dashboard
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium flex items-center gap-2">
              <Award className="w-4 h-4" />
              Éligible Banque Privée
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Bienvenue dans la <span className="text-accent">Banque Privée</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez franchi un cap important dans votre développement. 
            Accédez maintenant à un accompagnement premium et personnalisé.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-200 border-2 hover:border-accent/50">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Advisor Profile */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Votre conseiller dédié</h2>
            
            <div className="flex items-start gap-4 mb-6 p-4 bg-secondary/50 rounded-lg">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                {advisorProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{advisorProfile.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{advisorProfile.role}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {advisorProfile.experience}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Domaines d'expertise</h4>
              <div className="flex flex-wrap gap-2">
                {advisorProfile.specialities.map((speciality, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {speciality}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium">Disponibilité immédiate</p>
                  <p className="text-sm text-muted-foreground">Premier rendez-vous sous 48h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium">Contact privilégié</p>
                  <p className="text-sm text-muted-foreground">Ligne directe et messagerie dédiée</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <p className="font-medium">Suivi personnalisé</p>
                  <p className="text-sm text-muted-foreground">Analyse mensuelle de votre situation</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Appointment Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Prendre rendez-vous</h2>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleAppointmentRequest(); }}>
              <div>
                <Label htmlFor="subject">Sujet de l'entretien</Label>
                <Input
                  id="subject"
                  placeholder="Ex: Optimisation fiscale de mon entreprise"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez brièvement votre situation et vos objectifs..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Date souhaitée</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    className="mt-2"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Horaire souhaité</Label>
                  <Input
                    id="preferredTime"
                    type="time"
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note :</strong> Un rendez-vous téléphonique ou en visioconférence sera organisé selon vos disponibilités. 
                  Vous recevrez une confirmation par email dans les 24 heures.
                </p>
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Calendar className="w-5 h-5 mr-2" />
                Demander un rendez-vous
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-3">Ouverture compte Banque Privée</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Lors de votre premier entretien, nous pourrons également initier l'ouverture de votre compte Banque Privée pour accéder à l'ensemble de nos services exclusifs.
              </p>
              <Button variant="outline" className="w-full">
                En savoir plus sur les comptes Banque Privée
              </Button>
            </div>
          </Card>
        </div>

        {/* Growth Stats */}
        <Card className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Votre parcours de croissance</h2>
            <p className="text-muted-foreground">Statistiques depuis la création de votre entreprise</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25 400€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires actuel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">+247%</div>
              <div className="text-sm text-muted-foreground">Croissance moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">48 520€</div>
              <div className="text-sm text-muted-foreground">Trésorerie actuelle</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info mb-2">1/3</div>
              <div className="text-sm text-muted-foreground">Paliers franchis</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivateBanking;