import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { TrendingUp, Lightbulb, Bell, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Notification {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  icon: string;
  variant?: "default" | "success" | "warning";
}

const notifications: Notification[] = [
  {
    id: "opp-1",
    titleFr: "💡 Nouvelle opportunité !",
    titleEn: "💡 New opportunity!",
    descriptionFr: "Un bien immobilier correspond à ton profil",
    descriptionEn: "A property matches your profile",
    icon: "lightbulb",
  },
  {
    id: "perf-1",
    titleFr: "📈 Belle performance",
    titleEn: "📈 Great performance",
    descriptionFr: "Tes actions tech sont en hausse de 3,2%",
    descriptionEn: "Your tech stocks are up 3.2%",
    icon: "trending",
  },
  {
    id: "task-1",
    titleFr: "⏰ Rappel important",
    titleEn: "⏰ Important reminder",
    descriptionFr: "N'oublie pas ton versement PER avant fin décembre",
    descriptionEn: "Don't forget your PER payment before end of December",
    icon: "bell",
  },
  {
    id: "tip-1",
    titleFr: "💡 Conseil de Richie",
    titleEn: "💡 Richie's tip",
    descriptionFr: "Tu pourrais diversifier davantage ton portefeuille",
    descriptionEn: "You could diversify your portfolio more",
    icon: "lightbulb",
  },
  {
    id: "credit-1",
    titleFr: "💰 Capacité d'emprunt",
    titleEn: "💰 Borrowing capacity",
    descriptionFr: "650K€ disponibles pour ton projet immobilier",
    descriptionEn: "650K€ available for your real estate project",
    icon: "dollar",
  },
];

export const DynamicNotifications = () => {
  const { language } = useLanguage();
  const [shownNotifications, setShownNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Show first notification after 10 seconds
    const firstTimeout = setTimeout(() => {
      showRandomNotification();
    }, 10000);

    // Show subsequent notifications every 25-40 seconds
    const interval = setInterval(() => {
      showRandomNotification();
    }, Math.random() * 15000 + 25000); // Random between 25-40 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [language, shownNotifications]);

  const showRandomNotification = () => {
    // Filter out already shown notifications
    const availableNotifications = notifications.filter(
      (notif) => !shownNotifications.includes(notif.id)
    );

    if (availableNotifications.length === 0) {
      // Reset if all notifications have been shown
      setShownNotifications([]);
      return;
    }

    // Pick a random notification
    const randomIndex = Math.floor(Math.random() * availableNotifications.length);
    const notification = availableNotifications[randomIndex];

    const title = language === 'fr' ? notification.titleFr : notification.titleEn;
    const description = language === 'fr' ? notification.descriptionFr : notification.descriptionEn;

    toast({
      title: title,
      description: description,
      duration: 6000,
    });

    // Mark this notification as shown
    setShownNotifications([...shownNotifications, notification.id]);
  };

  return null; // This component doesn't render anything visible
};