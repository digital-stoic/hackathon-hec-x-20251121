import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare, BookOpen, Video } from "lucide-react";

const events = [
  { date: "15 Juin 2024", title: "Petit-déjeuner entrepreneurs Tech", location: "Paris 8ème", attendees: 24 },
  { date: "22 Juin 2024", title: "Masterclass: Exit Strategy", location: "En ligne", attendees: 156 },
  { date: "5 Juillet 2024", title: "Soirée networking Scale-ups", location: "Paris 2ème", attendees: 42 },
];

const groups = [
  { name: "CEOs Scale-up Tech", members: 87, activity: "Très actif" },
  { name: "Transmission Familiale", members: 34, activity: "Actif" },
  { name: "Optimisation Fiscale", members: 124, activity: "Très actif" },
  { name: "Exit & M&A", members: 56, activity: "Modéré" },
];

const content = [
  { title: "Guide de la holding patrimoniale 2024", type: "PDF", duration: "45 min" },
  { title: "Webinar: Optimiser sa rémunération", type: "Vidéo", duration: "1h30" },
  { title: "Check-list pré-levée de fonds", type: "PDF", duration: "20 min" },
  { title: "Template: Pacte d'actionnaires", type: "Document", duration: "—" },
];

const Communaute = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Communauté Entrepreneurs</h1>
        <p className="text-muted-foreground">Échangez avec vos pairs et accédez à des ressources exclusives</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border p-6 shadow-card lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Événements à venir</h2>
          </div>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <Card key={idx} className="bg-secondary border-border p-4 hover:shadow-premium transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="text-xs text-primary font-medium mb-1">{event.date}</p>
                    <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-3 bg-gradient-primary">
                  S'inscrire
                </Button>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-accent border-border p-6 shadow-card">
          <h2 className="text-lg font-semibold text-accent-foreground mb-4">Demandes de Mentorat</h2>
          <p className="text-sm text-accent-foreground/80 mb-4">
            Connectez-vous avec des entrepreneurs expérimentés dans votre domaine
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-accent-foreground/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-accent-foreground">Exit Tech (12 mentors disponibles)</p>
            </div>
            <div className="bg-accent-foreground/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-accent-foreground">Levée de fonds (8 mentors)</p>
            </div>
            <div className="bg-accent-foreground/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-accent-foreground">Transmission familiale (5 mentors)</p>
            </div>
          </div>
          <Button className="w-full bg-background/20 hover:bg-background/30 text-accent-foreground">
            Trouver un mentor
          </Button>
        </Card>
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Groupes de Discussion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, idx) => (
            <Card key={idx} className="bg-secondary border-border p-4 hover:shadow-premium transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{group.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {group.members} membres
                    </span>
                    <span className={`px-2 py-0.5 rounded ${
                      group.activity === "Très actif" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {group.activity}
                    </span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Rejoindre
              </Button>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Contenu Exclusif Premium</h2>
        </div>
        <div className="space-y-3">
          {content.map((item, idx) => (
            <Card key={idx} className="bg-secondary border-border p-4 hover:shadow-premium transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  {item.type === "Vidéo" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  Accéder
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Communaute;