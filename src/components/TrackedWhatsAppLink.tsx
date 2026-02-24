"use client";

import type { ReactNode } from "react";

type TrackedWhatsAppLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  location: string;
};

export function TrackedWhatsAppLink({
  href,
  className,
  children,
  ariaLabel,
  location,
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        if (typeof window === "undefined") return;
        (window as typeof window & { dataLayer?: Array<Record<string, unknown>> })
          .dataLayer?.push({
            event: "whatsapp_click",
            location,
            whatsapp_url: href,
          });
      }}
    >
      {children}
    </a>
  );
}

