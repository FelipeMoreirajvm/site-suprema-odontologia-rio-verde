import Link from "next/link";

import { SiteNavigation } from "@/components/SiteNavigation";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clinic } from "@/config/clinic";

const HEADER_STYLE = "sticky top-0 z-40 border-b border-line bg-canvas";
const HEADER_INNER_STYLE =
  "mx-auto flex max-w-6xl flex-wrap items-center justify-between " +
  "gap-x-6 gap-y-2 px-4 py-3";
const BOOK_BUTTON_STYLE =
  "inline-flex min-h-11 items-center rounded-full bg-brand px-5 " +
  "text-sm font-semibold text-on-brand";

export function SiteHeader() {
  return (
    <header className={HEADER_STYLE}>
      <div className={HEADER_INNER_STYLE}>
        <Link href="/" className="text-lg font-semibold">
          {clinic.name}
        </Link>
        <SiteNavigation />
        <WhatsAppLink className={BOOK_BUTTON_STYLE}>Agendar</WhatsAppLink>
      </div>
    </header>
  );
}
