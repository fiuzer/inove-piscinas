import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string().min(3),
  message: z.string().min(10),
  company: z.string().optional(),
});

const sanitize = (value: string) =>
  value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = payloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos." },
        { status: 400 }
      );
    }

    if (parsed.data.company) {
      return NextResponse.json({ ok: true });
    }

    const data = {
      name: sanitize(parsed.data.name),
      email: sanitize(parsed.data.email),
      phone: sanitize(parsed.data.phone),
      service: sanitize(parsed.data.service),
      message: sanitize(parsed.data.message),
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Inove Piscinas <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: data.email,
      subject: `Novo contato - ${data.name}`,
      text: `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\nServiço: ${data.service}\n\nMensagem:\n${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao enviar." },
      { status: 500 }
    );
  }
}
