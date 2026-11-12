import Link from "next/link";

import { navigation } from "@/config/navigation";

export function SiteNavigation() {
  if (navigation.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Principal">
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
