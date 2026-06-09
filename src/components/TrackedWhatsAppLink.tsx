"use client";

import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";
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
  const { trackClick } = useWhatsAppClick();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackClick(location)}
    >
      {children}
    </a>
  );
}

