import { FooterContact } from "@/components/FooterContact";
import { FooterSocial } from "@/components/FooterSocial";
import { clinic } from "@/config/clinic";

const FOOTER_STYLE = "border-t border-line bg-surface";
const FOOTER_INNER_STYLE =
  "mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-24 pt-10 text-sm";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={FOOTER_STYLE}>
      <div className={FOOTER_INNER_STYLE}>
        <p className="text-base font-semibold">{clinic.name}</p>
        <FooterContact />
        <FooterSocial />
        <p className="text-ink-muted">
          © {currentYear} {clinic.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
