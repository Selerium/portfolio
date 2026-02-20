"use client";

import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { primary } from "../styles/fonts";

type RouteTransitionContextValue = {
  start: () => void;
};

const RouteTransitionContext = createContext<RouteTransitionContextValue | null>(null);

export function useRouteTransition() {
  return useContext(RouteTransitionContext);
}

async function waitForImages(container: HTMLElement | null, timeoutMs: number) {
  const root = container ?? document.documentElement;
  const imgs = Array.from(root.querySelectorAll("img"));

  if (imgs.length === 0) return;

  await new Promise<void>((resolve) => {
    let done = false;
    let remaining = 0;

    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };

    const timer = window.setTimeout(finish, timeoutMs);

    const onOneDone = () => {
      remaining -= 1;
      if (remaining <= 0) {
        window.clearTimeout(timer);
        finish();
      }
    };

    imgs.forEach((img) => {
      if (img.complete) return;
      remaining += 1;
      img.addEventListener("load", onOneDone, { once: true });
      img.addEventListener("error", onOneDone, { once: true });
    });

    if (remaining === 0) {
      window.clearTimeout(timer);
      finish();
    }
  });
}

export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [active, setActive] = useState(true);
  const startRef = useRef<() => void>(() => {});

  const start = useCallback(() => {
    setActive(true);
  }, []);

  startRef.current = start;

  const ctx = useMemo<RouteTransitionContextValue>(() => ({ start }), [start]);

  useEffect(() => {
    // Fallback: if navigation happens without our links (back/forward),
    // show the overlay once pathname changes.
    startRef.current();

    let cancelled = false;

    const run = async () => {
      // Wait until the new route has rendered at least once.
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      await new Promise<void>((r) => requestAnimationFrame(() => r()));

      const container = document.getElementById("route-content");
      await waitForImages(container, 6000);

      if (!cancelled) {
        // Small delay to avoid a visible "blink".
        window.setTimeout(() => {
          if (!cancelled) setActive(false);
        }, 50);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <RouteTransitionContext.Provider value={ctx}>
      {children}
      <div
        className={`fixed inset-0 bg-black flex justify-center items-center transition-opacity duration-300 ${
          active ? "opacity-100 pointer-events-auto z-[9999]" : "opacity-0 pointer-events-none -z-10"
        }`}
      >
        <div className="loaderParent w-32 h-32 flex justify-start items-start rounded-full border border-primary relative">
          <img
            src={`${basePath}/custom-cursor.png`}
            className="rotate-90 w-1/3 h-1/3 object-cover object-left"
            alt="Loading"
          />
          <div className="absolute flex justify-center items-center w-full h-full">
            <h1
              className={`loaderChild text-3xl ${primary.className} tracking-tight pr-0.5 pb-0.5 text-center font-semibold`}
            >
              adi
            </h1>
          </div>
        </div>
      </div>
    </RouteTransitionContext.Provider>
  );
}

