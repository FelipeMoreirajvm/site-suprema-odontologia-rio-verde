export function yearsSince(startYear: number, referenceDate: Date): number {
  return referenceDate.getFullYear() - startYear;
}
