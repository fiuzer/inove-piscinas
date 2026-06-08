import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import Script from "next/script";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    default: "Reforma de Piscina de Fibra no Rio de Janeiro | Inove Piscinas",
    template: "%s | Inove Piscinas",
  },
  description:
    "Especialistas em reforma, pintura e manutenção de piscinas e banheiras de fibra no RJ e Niterói. +10 anos de experiência. Orçamento rápido pelo WhatsApp.",
  keywords: [
    "reforma piscina fibra RJ",
    "pintura piscina fibra",
    "reforma banheira fibra",
    "conserto piscina Niterói",
    "reforma piscina Rio de Janeiro",
    "pintura banheira fibra",
  ],
  metadataBase: new URL("https://www.inovepiscinas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reforma de Piscina de Fibra no Rio de Janeiro | Inove Piscinas",
    description:
      "Especialistas em reforma, pintura e manutenção de piscinas e banheiras de fibra no RJ e Niterói. +10 anos de experiência. Orçamento rápido pelo WhatsApp.",
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
        <Script id="gtm-deferred" strategy="afterInteractive">
          {`(function(w,d,l,i){
  w[l]=w[l]||[];
  var loaded=false;
  function load(){
    if(loaded) return;
    loaded=true;
    w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName('script')[0],j=d.createElement('script');
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+'&l='+l;
    f.parentNode.insertBefore(j,f);
  }
  function scheduleAfterLoad(){
    var run = function(){
      if (w.requestIdleCallback) {
        w.requestIdleCallback(load,{timeout:8000});
      } else {
        setTimeout(load,8000);
      }
    };
    if (d.readyState === 'complete') {
      run();
    } else {
      w.addEventListener('load', run, {once:true});
    }
  }
  scheduleAfterLoad();
  ['pointerdown','scroll','keydown','touchstart'].forEach(function(evt){
    w.addEventListener(evt,load,{once:true,passive:true});
  });
})(window,document,'dataLayer','GTM-W6ZQFMT3');`}
        </Script>
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
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}




