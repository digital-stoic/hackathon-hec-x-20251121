import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useNotifications } from '@/contexts/NotificationContext';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Notification } from '@/contexts/NotificationContext';

interface NotificationPanelProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const NotificationPanel = ({ open, onOpenChange }: NotificationPanelProps) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-semibold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-lg">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs text-primary"
            >
              Tout marquer comme lu
            </Button>
          )}
        </div>
        <ScrollArea className="h-[400px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Bell className="h-12 w-12 mb-2 opacity-30" />
              <p className="text-sm">Aucune notification</p>
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                    !notification.read ? 'bg-primary/5' : ''
                  }`}
                  onClick={() => {
                    if (!notification.read) markAsRead(notification.id);
                    setSelectedNotification(notification);
                  }}
                >
                  <div className="flex gap-3">
                    {notification.avatar && (
                      <Avatar className="h-12 w-12 flex-shrink-0">
                        <AvatarImage src={notification.avatar} alt={notification.title} />
                        <AvatarFallback>{notification.title.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDistanceToNow(notification.timestamp, {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>

      <Dialog open={!!selectedNotification} onOpenChange={(open) => !open && setSelectedNotification(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4">
              {selectedNotification?.avatar && (
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedNotification.avatar} alt={selectedNotification.title} />
                  <AvatarFallback>{selectedNotification.title.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div>
                <div className="text-xl font-semibold">{selectedNotification?.title}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedNotification && formatDistanceToNow(selectedNotification.timestamp, {
                    addSuffix: true,
                    locale: fr,
                  })}
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Détails de la notification
          </DialogDescription>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {selectedNotification?.message}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Popover>
  );
};

export default NotificationPanel;
