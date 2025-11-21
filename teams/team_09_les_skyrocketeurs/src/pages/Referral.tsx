import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Share2, Copy, Gift, Users, TrendingUp, Coins } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const { toast } = useToast();
  const [referralCode] = useState("FLOW-ABC123");
  const referrals = [
    { name: "Marie D.", status: "active", coins: 100, date: "Il y a 2 jours" },
    { name: "Thomas L.", status: "active", coins: 100, date: "Il y a 5 jours" },
    { name: "Sophie M.", status: "pending", coins: 0, date: "Il y a 1 jour" }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Code copié !",
      description: "Le code de parrainage a été copié dans le presse-papier.",
    });
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: "Rejoins Flow",
        text: `Utilise mon code ${referralCode} pour gagner 50 coins gratuits !`,
        url: window.location.origin
      });
    } else {
      copyReferralCode();
    }
  };

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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-primary/10 border border-primary/30">
              <Coins className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm sm:text-base text-foreground">1,250</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Programme Parrainage
            </h1>
            <p className="text-muted-foreground">
              Partage Flow avec tes amis et gagnez tous les deux des coins
            </p>
          </div>

          {/* Rewards Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="p-6 sm:p-8 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-premium">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-premium transition-all duration-300">
                  <Gift className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">100 coins</div>
                  <div className="text-sm text-muted-foreground">Pour chaque ami parrainé</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-premium transition-all duration-300">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-secondary" />
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">50 coins</div>
                  <div className="text-sm text-muted-foreground">Pour ton ami à l'inscription</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Share Section */}
            <div className="space-y-6">
              <Card className="p-6 border-border bg-card shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-primary" />
                  Partager ton code
                </h2>

                <div className="mb-6">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Ton code de parrainage
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 p-4 rounded-lg bg-muted border border-border font-mono font-semibold text-base text-center">
                      {referralCode}
                    </div>
                    <Button 
                      onClick={copyReferralCode}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                      size="lg"
                    >
                      <Copy className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={shareReferral}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold shadow-premium"
                    size="lg"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Partager avec des amis
                  </Button>

                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="font-medium">
                      Email
                    </Button>
                    <Button variant="outline" className="font-medium">
                      SMS
                    </Button>
                    <Button variant="outline" className="font-medium">
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>

              {/* How it Works */}
              <Card className="p-6 border-border bg-card shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Comment ça marche ?</h2>
                
                <div className="space-y-4">
                  {[
                    { 
                      step: "1", 
                      title: "Partage ton code", 
                      desc: "Envoie ton code à tes amis",
                      color: "from-primary to-secondary"
                    },
                    { 
                      step: "2", 
                      title: "Ils s'inscrivent", 
                      desc: "Ils utilisent ton code à l'inscription",
                      color: "from-secondary to-accent"
                    },
                    { 
                      step: "3", 
                      title: "Gagnez des coins", 
                      desc: "Vous recevez tous les deux vos récompenses",
                      color: "from-accent to-primary"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 rounded-lg bg-muted border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-base text-foreground mb-1">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Stats & History */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-premium transition-all duration-300">
                  <div className="text-center">
                    <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Amis parrainés</div>
                  </div>
                </Card>

                <Card className="p-6 border-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 hover:shadow-premium transition-all duration-300">
                  <div className="text-center">
                    <Gift className="w-10 h-10 mx-auto mb-3 text-accent" />
                    <div className="text-3xl font-bold text-foreground mb-1">200</div>
                    <div className="text-sm text-muted-foreground">Coins gagnés</div>
                  </div>
                </Card>
              </div>

              {/* Referrals History */}
              <Card className="p-6 border-border bg-card shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Tes parrainages
                </h2>

                <div className="space-y-3">
                  {referrals.map((ref, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-lg bg-muted border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                            {ref.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground">{ref.name}</div>
                            <div className="text-xs text-muted-foreground">{ref.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            ref.status === 'active' 
                              ? 'bg-primary/10 text-primary border border-primary/30' 
                              : 'bg-muted text-muted-foreground border border-border'
                          }`}>
                            {ref.status === 'active' ? 'Actif' : 'En attente'}
                          </div>
                          {ref.coins > 0 && (
                            <div className="font-semibold text-sm text-primary mt-1">
                              +{ref.coins} coins
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {referrals.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="font-semibold text-foreground">Aucun parrainage pour le moment</p>
                    <p className="text-sm mt-2 text-muted-foreground">Commence à partager ton code !</p>
                  </div>
                )}
              </Card>

              {/* Bonus Info */}
              <Card className="p-6 border-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 shadow-premium">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Bonus spécial</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Parraine 10 amis et gagne un badge exclusif + 500 coins bonus
                  </p>
                  <div className="w-full h-3 bg-background rounded-full overflow-hidden border border-border">
                    <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500" style={{ width: '30%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-2">3/10 amis parrainés</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referral;
