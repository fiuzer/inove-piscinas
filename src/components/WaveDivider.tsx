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
        className={`h-24 w-full ${
          flip ? "rotate-180" : ""
        } ${variant === "dark" ? "text-[var(--brand-deep)]" : "text-white"}`}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,140 480,140 720,96 C960,52 1200,52 1440,96 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}
