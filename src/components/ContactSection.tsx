"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";

const formSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Informe um telefone válido"),
  service: z.string().min(3, "Descreva o serviço desejado"),
  message: z.string().min(10, "Conte mais sobre o seu projeto"),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const sanitize = (value: string) =>
  value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.company) {
      return;
    }

    const sanitized = {
      ...data,
      name: sanitize(data.name),
      email: sanitize(data.email),
      phone: sanitize(data.phone),
      service: sanitize(data.service),
      message: sanitize(data.message),
    };

    setErrorMessage(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitized),
    });

    if (!response.ok) {
      setErrorMessage("Não foi possível enviar. Tente novamente.");
      return;
    }

    if (typeof window !== "undefined") {
      (window as typeof window & { dataLayer?: Array<Record<string, unknown>> })
        .dataLayer?.push({
          event: "form_submit",
          form_id: "contact",
        });
    }

    setSubmitted(true);
    reset();
  };

  return (
    <section id="contato" className="relative -mt-px bg-[var(--brand-deep)] py-12 sm:py-16 cv-auto">
      <div className="mx-auto max-w-6xl px-6 text-white">
        <SectionHeading
          eyebrow="Contato"
          title={
            <>
              Vamos cuidar da sua <span className="text-white">piscina</span>?
            </>
          }
          description={
            <>
              Solicite um orçamento rápido e 100% gratuito com nosso time.
            </>
          }
          titleClassName="text-sky-300"
          eyebrowClassName="text-base sm:text-lg text-white/80"
          descriptionClassName="text-white/70 text-sm sm:text-base"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold">Canais de atendimento</h3>
            <p className="text-sm text-white/80">
              Atendimento de segunda a sábado, das 8h às 20h.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-[var(--brand)]" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-white/80">(21) 99373-9579</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-[var(--brand)]" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-white/80">atendimento@inovepiscinas.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-[var(--brand)]" />
                <div>
                  <p className="font-semibold">Regiões atendidas</p>
                  <p className="text-white/80">Rio de Janeiro e Niterói</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 text-[var(--brand)]" />
                <div>
                  <p className="font-semibold">Horário</p>
                  <p className="text-white/80">Segunda a sábado • 8h às 20h</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold">Redes sociais</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@inovepiscinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 -translate-x-0.5"
                    fill="currentColor"
                  >
                    <path d="M18.5 4.2c-.9-1-1.4-2.2-1.4-3.6h-3.1v12.2c0 1.1-.9 2-2 2s-2-.9-2-2 0-2 2-2c.3 0 .6.1.9.2V7.5c-.3 0-.6-.1-.9-.1-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2V8.6c1 .7 2.2 1.1 3.6 1.1V6.6c-1.1 0-2.1-.5-2.8-1.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/inovepiscinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://www.facebook.com/inoveservicosdepiscina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-white/10 bg-white p-8 text-[var(--brand-deep)] shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Nome</label>
                <input
                  {...register("name")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
                  placeholder="Seu nome completo"
                />
                {errors.name ? (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">E-mail</label>
                <input
                  {...register("email")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
                  placeholder="voce@email.com"
                />
                {errors.email ? (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Telefone</label>
                <input
                  {...register("phone")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
                  placeholder="(21) 99999-9999"
                />
                {errors.phone ? (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Serviço</label>
                <input
                  {...register("service")}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
                  placeholder="Reforma, pintura, manutenção..."
                />
                {errors.service ? (
                  <p className="text-xs text-red-500">
                    {errors.service.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-semibold">Mensagem</label>
              <textarea
                {...register("message")}
                className="h-28 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
                placeholder="Conte detalhes do que você precisa."
              />
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              ) : null}
            </div>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
              {...register("company")}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Peça seu orçamento"}
            </button>

            {errorMessage ? (
              <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
            ) : null}

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-600">
                Recebemos sua mensagem! Em breve entraremos em contato.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
