import { clinic } from "@/config/clinic";

const SOCIAL_LINKS = [
  { label: "Instagram", url: clinic.social.instagram },
  { label: "Facebook", url: clinic.social.facebook },
  { label: "YouTube", url: clinic.social.youtube },
];

export function FooterSocial() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {link.label}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
