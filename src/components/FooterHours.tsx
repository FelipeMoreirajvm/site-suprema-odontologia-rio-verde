import { clinic } from "@/config/clinic";
import { formatHour } from "@/lib/hours";

export function FooterHours() {
  return (
    <ul className="flex flex-col gap-1">
      {clinic.hours.map((period) => (
        <li key={period.days}>
          {period.days}: {formatHour(period.opens)} às{" "}
          {formatHour(period.closes)}
        </li>
      ))}
    </ul>
  );
}
