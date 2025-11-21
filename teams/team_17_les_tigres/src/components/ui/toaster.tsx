import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import richieAvatar from "@/assets/richie-avatar.png";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="border-l-4 border-champagne">
            <div className="flex gap-3">
              {/* Richie Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-champagne flex-shrink-0 mt-1">
                <img
                  src={richieAvatar}
                  alt="Richie"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid gap-1 flex-1">
                {title && (
                  <ToastTitle className="flex items-center gap-2">
                    {title}
                  </ToastTitle>
                )}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
