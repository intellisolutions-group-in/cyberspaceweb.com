"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const MotionLink = motion.create(Link);

const EASE = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: EASE,
    },
  }),
};

const reducedRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: { duration: 0.3, delay: index * 0.05 },
  }),
};

export type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
  style?: React.CSSProperties;
  as?: "div" | "article" | "aside";
  href?: string;
  hoverBorderColor?: string;
  /** card = lift + glow (default), row = flat highlight for table rows */
  hoverVariant?: "card" | "row";
};

export default function MotionCard({
  children,
  className = "",
  index = 0,
  hover = true,
  style,
  as = "div",
  href,
  hoverBorderColor = "#FFD600",
  hoverVariant = "card",
}: MotionCardProps) {
  const reduced = useReducedMotion() ?? false;

  const hoverTransition = { duration: 0.22, ease: EASE };

  const cardHover = {
    y: -10,
    scale: 1.02,
    borderColor: hoverBorderColor,
    boxShadow:
      "0 28px 70px rgba(255, 214, 0, 0.22), 0 0 0 1px rgba(255, 214, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
    zIndex: 20,
  };

  const rowHover = {
    backgroundColor: "#141414",
    boxShadow: "inset 4px 0 0 #FFD600",
    zIndex: 10,
  };

  const hoverProps =
    hover && !reduced
      ? {
          whileHover: hoverVariant === "row" ? rowHover : cardHover,
          whileTap: hoverVariant === "row" ? { scale: 0.998 } : { scale: 0.985, y: -4 },
          transition: hoverTransition,
        }
      : {};

  const motionProps = {
    custom: index,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.12, margin: "0px 0px -48px 0px" },
    variants: reduced ? reducedRevealVariants : revealVariants,
    ...hoverProps,
    className: `${className}${hover ? " relative cursor-pointer" : ""}`,
    style,
  };

  if (href) {
    return (
      <MotionLink href={href} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  const MotionTag = motion[as];

  return <MotionTag {...motionProps}>{children}</MotionTag>;
}
