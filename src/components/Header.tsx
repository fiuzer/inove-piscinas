"use client";

import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

const services = [
  {
    label: "Reforma de Piscina de Fibra",
    href: "/servicos/reforma-piscina-fibra",
  },
  {
    label: "Pintura de Piscina de Fibra",
    href: "/servicos/pintura-piscina-fibra",
  },
  {
    label: "Conserto de Piscina de Fibra",
    href: "/servicos/conserto-piscina-fibra",
  },
  {
    label: "Reforma de Banheira de Fibra",
    href: "/servicos/reforma-banheira-fibra",
  },
];

const WHATSAPP_URL = WHATSAPP_LINKS.home;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full transition ${
          scrolled
            ? "bg-white/90 text-[var(--brand-deep)] shadow-lg backdrop-blur"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="relative mt-0.5 h-12 w-36">
              <Image
                src={
                  scrolled
                    ? "/imagens/logo-inove-piscinas-azul.webp"
                    : "/imagens/logo-branca-inove.webp"
                }
                alt="Inove Piscinas"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 180px"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[var(--brand)]"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Serviços
                <ChevronDown
                  className={`size-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen ? (
                <div
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-100 bg-white py-2 shadow-xl"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2.5 text-sm text-[var(--brand-deep)] transition hover:bg-slate-50 hover:text-[var(--brand)]"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <Link href="/projetos" className="hover:text-[var(--brand)]">
              Projetos
            </Link>
            <Link href="/sobre" className="hover:text-[var(--brand)]">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-[var(--brand)]">
              Contato
            </Link>

            <TrackedWhatsAppLink
              href={WHATSAPP_URL}
              location="header"
              className="rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
            >
              Peça seu orçamento
            </TrackedWhatsAppLink>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="md:hidden">
          <div className="mx-6 rounded-2xl bg-white/95 p-6 text-[var(--brand-deep)] shadow-xl backdrop-blur">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <button
                type="button"
                className="flex items-center justify-between"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
              >
                Serviços
                <ChevronDown
                  className={`size-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen ? (
                <div className="ml-4 flex flex-col gap-3 font-normal text-[var(--muted)]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link href="/projetos" onClick={() => setMobileOpen(false)}>
                Projetos
              </Link>
              <Link href="/sobre" onClick={() => setMobileOpen(false)}>
                Sobre
              </Link>
              <Link href="/contato" onClick={() => setMobileOpen(false)}>
                Contato
              </Link>

              <TrackedWhatsAppLink
                href={WHATSAPP_URL}
                location="header-mobile"
                className="rounded-full bg-[var(--brand)] px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white shadow-lg"
              >
                Peça seu orçamento
              </TrackedWhatsAppLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
