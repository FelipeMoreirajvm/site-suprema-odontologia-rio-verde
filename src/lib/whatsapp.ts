const WHATSAPP_BASE_URL = "https://wa.me";

export function buildWhatsAppLink(phone: string, message: string): string {
  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly === "") {
    throw new Error("Phone number must contain at least one digit.");
  }

  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}/${digitsOnly}?text=${encodedMessage}`;
}
