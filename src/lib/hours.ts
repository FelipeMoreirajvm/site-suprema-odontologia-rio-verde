export function formatHour(time: string): string {
  const [hours = "", minutes = ""] = time.split(":");
  const hourLabel = String(Number(hours));

  return minutes === "00" ? `${hourLabel}h` : `${hourLabel}h${minutes}`;
}
