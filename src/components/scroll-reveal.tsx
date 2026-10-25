"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  selector?: string;
};

export default function ScrollReveal({
  children,
  className,
  ...options
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, options);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
