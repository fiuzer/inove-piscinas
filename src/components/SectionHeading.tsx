import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)] ${
            eyebrowClassName ?? ""
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-semibold tracking-tight text-[var(--brand-deep)] sm:text-4xl ${
          titleClassName ?? ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base text-[var(--muted)] sm:text-lg ${
            descriptionClassName ?? ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
