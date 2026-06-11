import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import Image from "next/image";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <TrackedWhatsAppLink
      href={WHATSAPP_LINKS.home}
      className="glow-pulse fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-500 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
      ariaLabel="Falar no WhatsApp"
      location="floating"
    >
      <Image
        src="/imagens/whatsapp.webp"
        alt="WhatsApp"
        width={40}
        height={40}
        className="object-contain"
      />
    </TrackedWhatsAppLink>
  );
}

