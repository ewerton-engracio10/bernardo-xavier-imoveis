import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./brand-social.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Bernardo Xavier Imóveis | Alto Padrão no Rio de Janeiro",
  description:
    "Curadoria imobiliária estratégica, lançamentos de alto padrão e atendimento personalizado na Zona Sul do Rio de Janeiro.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
