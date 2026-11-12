import { describe, expect, it } from "vitest";

import { yearsSince } from "@/lib/years";

describe("yearsSince", () => {
  it("counts the years between the start year and the date", () => {
    const today = new Date("2026-06-15T12:00:00");

    expect(yearsSince(2015, today)).toBe(11);
  });

  it("returns zero during the start year", () => {
    const today = new Date("2015-03-01T12:00:00");

    expect(yearsSince(2015, today)).toBe(0);
  });
});
