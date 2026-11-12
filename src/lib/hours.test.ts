import { describe, expect, it } from "vitest";

import { formatHour } from "@/lib/hours";

describe("formatHour", () => {
  it("drops the minutes and the leading zero on a whole hour", () => {
    expect(formatHour("08:00")).toBe("8h");
  });

  it("keeps the minutes when they are not zero", () => {
    expect(formatHour("08:30")).toBe("8h30");
  });

  it("keeps two-digit hours as they are", () => {
    expect(formatHour("18:00")).toBe("18h");
  });
});
