"use client";

export function useWhatsAppClick() {
  const trackClick = (origem: string) => {
    if (typeof window === "undefined" || !window.dataLayer) return;
    window.dataLayer.push({
      event: "whatsapp_click",
      whatsapp_origem: origem,
      whatsapp_numero: "5521993739579",
    });
  };

  return { trackClick };
}
