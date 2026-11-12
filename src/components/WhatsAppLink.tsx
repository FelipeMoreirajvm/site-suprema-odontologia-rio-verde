import type { ReactNode } from "react";

import { clinic } from "@/config/clinic";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  children: ReactNode;
  message?: string;
  className?: string;
};

export function WhatsAppLink({
  children,
  message = clinic.whatsappMessage,
  className,
}: WhatsAppLinkProps) {
  const href = buildWhatsAppLink(clinic.phone.international, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  );
}
