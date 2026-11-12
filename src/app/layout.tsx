import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { clinic } from "@/config/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${clinic.name} - Dentistas em Rio Verde GO`,
  description: `${clinic.name}: clínica odontológica em ${clinic.address.city}, ${clinic.address.state}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <SiteHeader />
        <main
          id="conteudo"
          tabIndex={-1}
          className="flex flex-1 flex-col focus:outline-none"
        >
          {children}
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
