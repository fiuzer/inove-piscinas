"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { WaveDivider } from "./WaveDivider";

const Gallery = dynamic(() => import("./Gallery").then((mod) => mod.Gallery), {
  ssr: false,
  loading: () => (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
        <div className="mt-4 h-10 w-72 animate-pulse rounded-2xl bg-slate-200" />
        <div className="mt-8 grid gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-52 rounded-3xl bg-slate-200 md:h-full"
            />
          ))}
        </div>
      </div>
    </section>
  ),
});

const Testimonials = dynamic(
  () => import("./Testimonials").then((mod) => mod.Testimonials),
  {
    ssr: false,
    loading: () => (
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-4 h-10 w-64 animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-8 h-56 rounded-3xl bg-slate-100" />
        </div>
      </section>
    ),
  }
);

const ContactSection = dynamic(
  () => import("./ContactSection").then((mod) => mod.ContactSection),
  {
    ssr: false,
    loading: () => (
      <section className="bg-[var(--brand-deep)] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-6 w-32 animate-pulse rounded-full bg-white/20" />
          <div className="mt-4 h-10 w-64 animate-pulse rounded-2xl bg-white/20" />
          <div className="mt-8 h-64 rounded-3xl bg-white/10" />
        </div>
      </section>
    ),
  }
);

export function DeferredSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const idle = (window as typeof window & { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
    const timeout = window.setTimeout(() => setReady(true), 1500);
    if (idle) {
      idle(() => setReady(true));
    }
    return () => window.clearTimeout(timeout);
  }, []);

  if (!ready) {
    return (
      <>
        <WaveDivider />
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-4 h-10 w-72 animate-pulse rounded-2xl bg-slate-200" />
            <div className="mt-8 grid gap-4 md:grid-cols-4 md:auto-rows-[180px]">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-52 rounded-3xl bg-slate-200 md:h-full"
                />
              ))}
            </div>
          </div>
        </section>
        <WaveDivider flip />
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-6 w-32 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-4 h-10 w-64 animate-pulse rounded-2xl bg-slate-200" />
            <div className="mt-8 h-56 rounded-3xl bg-slate-100" />
          </div>
        </section>
        <WaveDivider variant="dark" flip className="bg-white" />
        <section className="bg-[var(--brand-deep)] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-6 w-32 animate-pulse rounded-full bg-white/20" />
            <div className="mt-4 h-10 w-64 animate-pulse rounded-2xl bg-white/20" />
            <div className="mt-8 h-64 rounded-3xl bg-white/10" />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <WaveDivider />
      <Gallery />
      <WaveDivider flip />
      <Testimonials />
      <WaveDivider variant="dark" flip className="bg-white" />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}




