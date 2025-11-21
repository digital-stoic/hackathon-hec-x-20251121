import { useState } from "react";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, User, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const advisor = {
  name: "Sophie Martin",
  role: "Conseillère M&A Senior",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
};

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const { t, language } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (date && selectedTime) {
      setIsBooked(true);
      toast.success(t('booking.success'), {
        description: `${format(date, "PPP", { locale: language === 'fr' ? fr : enUS })} ${t('booking.at')} ${selectedTime}`,
      });
      setTimeout(() => {
        onOpenChange(false);
        setIsBooked(false);
        setDate(undefined);
        setSelectedTime(undefined);
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-champagne">
            {t('booking.title')}
          </DialogTitle>
          <DialogDescription>
            {t('booking.subtitle')}
          </DialogDescription>
        </DialogHeader>

        {isBooked ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-jade/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-jade" />
            </div>
            <h3 className="text-xl font-serif text-champagne">
              {t('booking.confirmed')}
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              {t('booking.confirmed.desc')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
            {/* Advisor Info */}
            <div className="md:col-span-3 bg-champagne/5 border border-champagne/20 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={advisor.avatar} />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-serif text-champagne">{advisor.name}</h3>
                  <p className="text-sm text-muted-foreground">{advisor.role}</p>
                  <p className="text-xs text-jade mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {t('booking.verified')}
                  </p>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="md:col-span-2 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <CalendarIcon className="w-5 h-5 text-champagne" />
                <h3 className="font-serif text-foreground">
                  {t('booking.select.date')}
                </h3>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                initialFocus
                className={cn("rounded-lg border border-border pointer-events-auto")}
                locale={language === 'fr' ? fr : enUS}
              />
            </div>

            {/* Time Slots */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-champagne" />
                <h3 className="font-serif text-foreground">
                  {t('booking.select.time')}
                </h3>
              </div>
              {!date ? (
                <p className="text-sm text-muted-foreground">
                  {t('booking.select.date.first')}
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "justify-center",
                        selectedTime === time && "bg-champagne hover:bg-champagne-muted"
                      )}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Booking Summary */}
            {date && selectedTime && (
              <div className="md:col-span-3 bg-jade/5 border border-jade/20 rounded-lg p-6">
                <h3 className="font-serif text-champagne mb-4">
                  {t('booking.summary')}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-champagne" />
                    <span className="text-muted-foreground">{t('booking.with')}:</span>
                    <span className="font-medium">{advisor.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-champagne" />
                    <span className="text-muted-foreground">{t('booking.date')}:</span>
                    <span className="font-medium">
                      {format(date, "PPP", { locale: language === 'fr' ? fr : enUS })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-champagne" />
                    <span className="text-muted-foreground">{t('booking.time')}:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>
                <Button
                  onClick={handleBooking}
                  className="w-full mt-6 bg-champagne hover:bg-champagne-muted text-white"
                >
                  {t('booking.confirm')}
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
