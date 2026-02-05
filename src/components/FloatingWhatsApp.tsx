"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5521993739579"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="size-5" />
      Peça seu orçamento
    </a>
  );
}
