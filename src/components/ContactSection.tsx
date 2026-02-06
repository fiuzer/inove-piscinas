"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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

    console.log("Contato recebido", sanitized);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contato" className="relative bg-[var(--brand-deep)] py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-white">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos cuidar da sua piscina?"
          description="Solicite um orçamento rápido ou tire dúvidas com nosso time."
          titleClassName="text-white"
          eyebrowClassName="text-base sm:text-lg"
          descriptionClassName="text-white/70 text-sm sm:text-base"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-600">
                Recebemos sua mensagem! Em breve entraremos em contato.
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
