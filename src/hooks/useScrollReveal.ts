"use client";

import { useEffect, useRef, type RefObject } from "react";
import { animate, createScope, set, stagger } from "animejs";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type RevealOptions = {
  selector?: string;
  x?: number;
  y?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  start?: number;
};

export function useScrollReveal<T extends HTMLElement>(
  rootRef: RefObject<T | null>,
  {
    selector = "[data-reveal]",
    x = 0,
    y = 32,
    scale = 1,
    duration = 300,
    stagger: staggerAmount = 20,
    start = 0,
  }: RevealOptions = {}
) {
  const reducedMotion = usePrefersReducedMotion();
  const scope = useRef<any>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!targets.length) return;

    if (reducedMotion) {
      set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    let observer: IntersectionObserver | null = null;

    scope.current = createScope({ root }).add(() => {
      set(targets, { opacity: 0, x, y, scale });

      const io = new IntersectionObserver(
        (entries) => {
          const entering = entries.filter((entry) => entry.isIntersecting);

          entering.forEach((entry, index) => {
            io.unobserve(entry.target);
            animate(entry.target, {
              opacity: [0, 1],
              x: [x, 0],
              y: [y, 0],
              scale: [scale, 1],
              duration,
              delay: start + index * staggerAmount,
              ease: "outCubic",
            });
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -6% 0px",
        }
      );

      observer = io;
      targets.forEach((target) => io.observe(target));
    });

    return () => {
      observer?.disconnect();
      observer = null;
      scope.current?.revert();
      scope.current = null;
    };
  }, [
    rootRef,
    selector,
    x,
    y,
    scale,
    duration,
    staggerAmount,
    start,
    reducedMotion,
  ]);
}

export function useMountReveal<T extends HTMLElement>(
  rootRef: RefObject<T | null>,
  {
    selector = "[data-reveal]",
    x = 0,
    y = 28,
    scale = 1,
    duration = 200,
    stagger: staggerAmount = 20,
    start = 0,
  }: RevealOptions = {}
) {
  const reducedMotion = usePrefersReducedMotion();
  const scope = useRef<any>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!targets.length) return;

    if (reducedMotion) {
      set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    scope.current = createScope({ root }).add(() => {
      set(targets, { opacity: 0, x, y, scale });

      animate(targets, {
        opacity: [0, 1],
        x: [x, 0],
        y: [y, 0],
        scale: [scale, 1],
        duration,
        delay: stagger(staggerAmount, { start }),
        ease: "outCubic",
      });
    });

    return () => {
      scope.current?.revert();
      scope.current = null;
    };
  }, [
    rootRef,
    selector,
    x,
    y,
    scale,
    duration,
    staggerAmount,
    start,
    reducedMotion,
  ]);
}
