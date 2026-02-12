"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Depoimentos", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
          <a href="#" className="flex items-center gap-3 font-semibold">
            <span className="relative mt-0.5 h-12 w-36">
              <Image
                src={
                  scrolled
                    ? "/imagens/logo-inove-piscinas-azul.PNG"
                    : "/imagens/logo-branca-inove.PNG"
                }
                alt="Inove Piscinas"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 180px"\r\n              />
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[var(--brand)]">
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
            >
              Peça seu orçamento
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

            {open ? (
        <div className="md:hidden">
          <div className="mx-6 rounded-2xl bg-white/95 p-6 text-[var(--brand-deep)] shadow-xl backdrop-blur">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--brand)] px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white shadow-lg"
              >
                Peça seu orçamento
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}



