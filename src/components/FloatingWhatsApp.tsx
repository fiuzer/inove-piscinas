"use client";

import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5521993739579?text=Ol%C3%A1!%20Vim%20atraves%20do%20seu%20site%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
      target="_blank"
      rel="noopener noreferrer"
      className="glow-pulse fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-500 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
      aria-label="Falar no WhatsApp"
    >
      <Image
        src="/imagens/whatsapp.png"
        alt="WhatsApp"
        width={40}
        height={40}
        className="object-contain"
      />
    </a>
  );
}
