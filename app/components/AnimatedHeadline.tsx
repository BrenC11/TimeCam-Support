"use client";

import { useMemo } from "react";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export default function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <h1 className={`hero-title ${className || ""}`.trim()} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="hero-title-word" style={{ "--i": index } as React.CSSProperties}>
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}
