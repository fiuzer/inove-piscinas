import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Inove Piscinas | Reforma de piscinas no RJ",
    template: "%s | Inove Piscinas",
  },
  description:
    "Reforma e pintura de piscinas de fibra no Rio de Janeiro e Niterói. Atendimento rápido, garantia e equipe especializada.",
  metadataBase: new URL("https://www.inovepiscinas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Inove Piscinas | Reforma de piscinas no RJ",
    description:
      "Especialistas em reforma e pintura de piscinas. Orçamento rápido via WhatsApp.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6ZQFMT3');`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${montserrat.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZQFMT3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
