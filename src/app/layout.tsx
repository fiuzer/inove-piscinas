import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Inove Piscinas | Reforma e manutenção de piscinas no RJ",
    template: "%s | Inove Piscinas",
  },
  description:
    "Reforma, pintura e manutenção de piscinas de fibra e alvenaria no Rio de Janeiro e Niterói. Atendimento rápido, garantia e equipe especializada.",
  metadataBase: new URL("https://www.inovepiscinas.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inove Piscinas | Reforma e manutenção de piscinas no RJ",
    description:
      "Especialistas em reforma, pintura e manutenção de piscinas. Orçamento rápido via WhatsApp.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}



