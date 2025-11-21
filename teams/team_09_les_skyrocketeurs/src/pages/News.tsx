import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const News = () => {
  const newsArticles = [
    {
      title: "Les marchés européens en hausse ce matin",
      source: "Les Échos",
      date: "Aujourd'hui, 09:30",
      summary: "Les indices boursiers européens ouvrent dans le vert suite aux annonces positives de la BCE.",
      category: "Marchés",
      trend: "up"
    },
    {
      title: "La BCE maintient ses taux directeurs",
      source: "Le Figaro Économie",
      date: "Hier, 15:45",
      summary: "La Banque Centrale Européenne a décidé de maintenir ses taux d'intérêt inchangés.",
      category: "Politique monétaire",
      trend: "neutral"
    },
    {
      title: "Tesla annonce des résultats trimestriels décevants",
      source: "Reuters",
      date: "Hier, 22:00",
      summary: "Le constructeur automobile enregistre une baisse de ses ventes au dernier trimestre.",
      category: "Entreprises",
      trend: "down"
    },
    {
      title: "L'or atteint un nouveau record historique",
      source: "Bloomberg",
      date: "Il y a 2 jours",
      summary: "Le métal précieux continue sa progression dans un contexte d'incertitude économique mondiale.",
      category: "Matières premières",
      trend: "up"
    },
    {
      title: "Les cryptomonnaies gagnent du terrain",
      source: "CoinDesk",
      date: "Il y a 3 jours",
      summary: "Bitcoin et Ethereum affichent des gains significatifs cette semaine.",
      category: "Crypto",
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Actualités Financières
            </h1>
            <p className="text-muted-foreground">
              Restez informé des dernières nouvelles des marchés et de l'économie
            </p>
          </div>

          {/* News Feed */}
          <div className="space-y-4">
            {newsArticles.map((article, i) => (
              <Card 
                key={i}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-premium cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {article.category}
                      </span>
                      {article.trend === "up" && (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      )}
                      {article.trend === "down" && (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-semibold">{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="font-semibold">
              Charger plus d'actualités
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
