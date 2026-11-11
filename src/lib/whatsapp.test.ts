import { describe, expect, it } from "vitest";

import { buildWhatsAppLink } from "@/lib/whatsapp";

describe("buildWhatsAppLink", () => {
  it("keeps only the digits of the phone number", () => {
    const link = buildWhatsAppLink("+55 (64) 99333-1774", "Oi");

    expect(link).toBe("https://wa.me/5564993331774?text=Oi");
  });

  it("encodes accents, commas and spaces in the message", () => {
    const link = buildWhatsAppLink("5564993331774", "Olá, gostaria de agendar");

    expect(link).toBe(
      "https://wa.me/5564993331774?text=Ol%C3%A1%2C%20gostaria%20de%20agendar",
    );
  });

  it("throws when the phone number has no digits", () => {
    expect(() => buildWhatsAppLink("abc", "Oi")).toThrow(
      "Phone number must contain at least one digit.",
    );
  });
});
