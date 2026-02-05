import type { HTMLAttributes } from "react";

type WaveDividerProps = HTMLAttributes<HTMLDivElement> & {
  flip?: boolean;
  variant?: "light" | "dark";
};

export function WaveDivider({
  flip,
  variant = "light",
  className,
  ...props
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
      {...props}
    >
      <svg
        className={`h-16 w-full ${
          flip ? "rotate-180" : ""
        } ${variant === "dark" ? "text-[var(--brand-deep)]" : "text-white"}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,32L48,58.7C96,85,192,139,288,154.7C384,171,480,149,576,128C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </div>
  );
}
