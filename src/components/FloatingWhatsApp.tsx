import { ChatIcon } from "@/components/ChatIcon";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const FLOATING_BUTTON_STYLE =
  "fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center gap-2 " +
  "rounded-full bg-brand px-5 py-3 text-sm font-semibold text-on-brand shadow-lg";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink className={FLOATING_BUTTON_STYLE}>
      <ChatIcon />
      Agendar consulta
    </WhatsAppLink>
  );
}
