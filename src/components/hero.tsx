"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, createScope, onScroll, set, splitText, stagger } from "animejs";
import { primary } from "@/styles/fonts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroProps = {
  changeSite: () => void;
};

const capabilities = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "UI/UX",
  "Vue",
];

export default function Hero({ changeSite }: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);
  const reducedMotion = usePrefersReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const imageSrcs = [
    `${basePath}/youth-sample.webp`,
    `${basePath}/aziza-sample.webp`,
    `${basePath}/junia-sample.webp`,
  ];
  const imageLabels = ["youth", "aziza", "junia"];
  const [activeElement, setActiveElement] = useState(1);

  const setActive = (index: number) => {
    setActiveElement((index + imageSrcs.length) % imageSrcs.length);
  };
  const moveLeft = () => setActive(activeElement - 1);
  const moveRight = () => setActive(activeElement + 1);

  useEffect(() => {
    const rootElement = root.current;
    if (!rootElement) return;

    if (reducedMotion) {
      rootElement.querySelector(".hero-title")?.classList.remove("invisible");
      set(
        rootElement.querySelectorAll<HTMLElement>(
          ".hero-eyebrow, .hero-sub, .hero-rail, .hero-deck-controls, .deck-card-inner"
        ),
        { opacity: 1, x: 0, y: 0, scale: 1 }
      );
      set(".hero-accent", { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    scope.current = createScope({ root }).add(() => {
      const split = splitText(".hero-title-line", {
        words: { wrap: "visible" },
      });

      set(split.words, { opacity: 0, y: 30 });
      set(".hero-accent", { opacity: 0, y: 30 });
      set(".hero-eyebrow, .hero-sub, .hero-rail, .hero-deck-controls", {
        opacity: 0,
        y: 16,
      });
      set(".deck-card-inner", { opacity: 0, y: 24, scale: 0.94 });
      rootElement.querySelector(".hero-title")?.classList.remove("invisible");

      animate(".hero-eyebrow", {
        opacity: [0, 1],
        y: [16, 0],
        duration: 200,
        ease: "outCubic",
      });

      animate(split.words, {
        opacity: [0, 1],
        y: [30, 0],
        duration: 200,
        delay: stagger(25, { start: 40 }),
        ease: "outCubic",
      });

      animate(".hero-accent", {
        opacity: [0, 1],
        y: [30, 0],
        duration: 200,
        delay: 120,
        ease: "outCubic",
      });

      animate(".hero-sub", {
        opacity: [0, 1],
        y: [16, 0],
        duration: 200,
        delay: 160,
        ease: "outCubic",
      });

      animate(".hero-rail", {
        opacity: [0, 1],
        y: [16, 0],
        duration: 200,
        delay: 200,
        ease: "outCubic",
      });

      animate(".hero-deck-controls", {
        opacity: [0, 1],
        y: [16, 0],
        duration: 200,
        delay: 230,
        ease: "outCubic",
      });

      animate(".deck-card-inner", {
        opacity: [0, 1],
        y: [24, 0],
        scale: [0.94, 1],
        duration: 200,
        delay: stagger(35, { start: 80 }),
        ease: "outCubic",
      });

      animate(".hero-copy", {
        y: [0, -70],
        opacity: [1, 0.25],
        ease: "linear",
        autoplay: onScroll({
          target: rootElement,
          enter: "top top",
          leave: "bottom top",
          sync: true,
        }),
      });

      animate(".deck-track", {
        y: [0, 70],
        rotateX: [0, 10],
        scale: [1, 0.94],
        ease: "linear",
        autoplay: onScroll({
          target: rootElement,
          enter: "top top",
          leave: "bottom top",
          sync: true,
        }),
      });
    });

    return () => {
      scope.current?.revert();
      scope.current = null;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const stageElement = stage.current;
    const tiltElement = tilt.current;
    if (!stageElement || !tiltElement) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const renderTilt = () => {
      frame = 0;
      tiltElement.style.setProperty("--tilt-x", `${nextX}deg`);
      tiltElement.style.setProperty("--tilt-y", `${nextY}deg`);
    };

    const scheduleTilt = () => {
      if (!frame) frame = window.requestAnimationFrame(renderTilt);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = stageElement.getBoundingClientRect();
      nextY = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      nextX = -((event.clientY - rect.top) / rect.height - 0.5) * 8;
      scheduleTilt();
    };

    const handlePointerLeave = () => {
      nextX = 0;
      nextY = 0;
      scheduleTilt();
    };

    stageElement.addEventListener("pointermove", handlePointerMove);
    stageElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      stageElement.removeEventListener("pointermove", handlePointerMove);
      stageElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reducedMotion]);

  const handleDeckKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveLeft();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveRight();
    }
  };

  return (
    <section
      ref={root}
      className="hero relative isolate flex min-h-dvh w-full max-w-dvw flex-col justify-between overflow-hidden"
    >
      <div className="hero-aurora hero-aurora-one" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-11/12 flex-1 grid-cols-1 min-h-fit items-center gap-8 pb-6 pt-28 lg:grid-cols-2 lg:gap-8 lg:pt-24">
        <div className="hero-copy relative z-10 min-w-0 max-w-3xl">
          <p className="hero-eyebrow opacity-0 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200/80">
            Software Engineer | Product Focused | Full Stack | Creative
          </p>
          <h1 className="w-full hero-title invisible mt-5 font-semibold tracking-[-0.055em]">
            <span className="hero-title-line block">Build digital experiences</span>
            <span className="hero-accent block">that make a statement.</span>
          </h1>
          <p className="w-3/5 hero-sub opacity-0 mt-6 text-base font-light leading-relaxed text-white/65 lg:text-lg">
            Thoughtful interfaces, robust systems, and the details that make a
            product feel effortless from the first frame to the last interaction.
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/85">
              Relocating to London · Open to UK roles
            </span>
          </p>

          <div className="hero-rail opacity-0 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/connect"
              onClick={changeSite}
              className={`${primary.className} hero-cta link rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur transition-all hover:bg-white hover:text-black`}
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div
          ref={stage}
          className="hero-stage relative z-10 flex w-full max-h-full min-w-0 items-center justify-center py-4 lg:py-8"
          onKeyDown={handleDeckKeyDown}
        >
          <div ref={tilt} className="deck-tilt w-full">
            <div className="deck-track">
            {imageSrcs.map((img, index) => {
              const isActive = index === activeElement;
              const isLeft =
                index ===
                (activeElement - 1 + imageSrcs.length) % imageSrcs.length;
              const isRight =
                index === (activeElement + 1) % imageSrcs.length;

              return (
                <button
                  type="button"
                  key={img}
                  aria-label={
                    isLeft
                      ? "Show previous project"
                      : isRight
                        ? "Show next project"
                        : "Current project preview"
                  }
                  aria-current={isActive}
                  disabled={isActive}
                  className={`deck-card max-h-full max-w-full ${
                    isActive ? "is-active" : isLeft ? "is-left" : "is-right"
                  }`}
                  style={{
                    transform:
                      "translate3d(calc(-50% + var(--deck-x)), -50%, var(--deck-z)) rotateY(var(--deck-ry)) scale(var(--deck-scale))",
                  }}
                  onClick={isLeft ? moveLeft : isRight ? moveRight : undefined}
                >
                  <div className="deck-card-inner opacity-0 absolute inset-0">
                    <Image
                      src={img}
                      alt={isActive ? "Featured project preview" : "Project preview"}
                      fill
                      draggable={false}
                      priority={index === 1}
                      quality={90}
                      sizes="(max-width: 1023px) 90vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 lg:p-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
                          selected work
                        </p>
                        <p className="mt-1 text-xl font-semibold lowercase tracking-tight text-white">
                          {imageLabels[index]}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                        0{index + 1} / 0{imageSrcs.length}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous project"
            className="hero-deck-controls hero-control absolute left-2 top-1/2 z-20 -mt-5 opacity-0"
            onClick={moveLeft}
          >
            <img
              src={`${basePath}/arrow.svg`}
              alt=""
              className="h-4 w-auto"
            />
          </button>

          <button
            type="button"
            aria-label="Next project"
            className="hero-deck-controls hero-control absolute right-2 top-1/2 z-20 -mt-5 opacity-0"
            onClick={moveRight}
          >
            <img
              src={`${basePath}/arrow.svg`}
              alt=""
              className="h-4 w-auto rotate-180"
            />
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-11/12 pb-6">
        <div className="hero-marquee border-y border-white/10 py-3">
          <div className="hero-marquee-track">
            {[0, 1, 2].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy > 0}
                className="hero-marquee-group flex shrink-0 items-center gap-8 pr-8"
              >
                {capabilities.map((capability) => (
                  <span
                    key={`${copy}-${capability}`}
                    className="text-xs uppercase tracking-[0.28em] text-white/45"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
