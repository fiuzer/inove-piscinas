import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Reforma de Piscina de Fibra", href: "/servicos/reforma-piscina-fibra" },
  { label: "Pintura de Piscina de Fibra", href: "/servicos/pintura-piscina-fibra" },
  { label: "Conserto de Piscina de Fibra", href: "/servicos/conserto-piscina-fibra" },
  { label: "Reforma de Banheira de Fibra", href: "/servicos/reforma-banheira-fibra" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--brand-deep)] pb-8 pt-12 text-sm text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="relative block h-10 w-32">
              <Image
                src="/imagens/logo-branca-inove.PNG"
                alt="Inove Piscinas"
                fill
                className="object-contain object-left"
                sizes="128px"
              />
            </span>
            <p className="mt-4 max-w-xs leading-relaxed text-white/60">
              Especialistas em reforma e pintura de piscinas e banheiras de
              fibra no Rio de Janeiro e Niterói.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Serviços
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Contato
            </p>
            <div className="space-y-2">
              <p className="text-white">(21) 99373-9579</p>
              <p>atendimento@inovepiscinas.com</p>
              <p className="mt-3">Rio de Janeiro e Niterói</p>
              <p className="text-white/50">Segunda a sábado — 8h às 20h</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p>© 2016–2026 Inove Piscinas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/projetos" className="transition hover:text-white">
              Projetos
            </Link>
            <Link href="/sobre" className="transition hover:text-white">
              Sobre
            </Link>
            <Link href="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
