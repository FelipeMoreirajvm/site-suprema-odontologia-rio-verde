import { FooterHours } from "@/components/FooterHours";
import { clinic } from "@/config/clinic";

const LINK_STYLE = "hover:underline";

export function FooterContact() {
  const { address, phone, email } = clinic;

  return (
    <address className="flex flex-col gap-3 not-italic">
      <a
        href={address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_STYLE}
      >
        {address.street} – {address.district}, {address.city} – {address.state}
        <span className="sr-only"> (abre o mapa em nova aba)</span>
      </a>
      <FooterHours />
      <a href={`tel:${phone.international}`} className={LINK_STYLE}>
        {phone.display}
      </a>
      <a href={`mailto:${email}`} className={LINK_STYLE}>
        {email}
      </a>
    </address>
  );
}
