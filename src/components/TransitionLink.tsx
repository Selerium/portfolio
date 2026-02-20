"use client";

import Link, { LinkProps } from "next/link";
import { MouseEvent, ReactNode } from "react";
import { useRouteTransition } from "./RouteTransition";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function TransitionLink({ onClick, children, ...props }: Props) {
  const ctx = useRouteTransition();

  return (
    <Link
      {...props}
      onClick={(e) => {
        ctx?.start();
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}

