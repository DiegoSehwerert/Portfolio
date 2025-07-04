"use client";

import { useEffect, useState } from "react";

interface TypingNameProps {
  fullText: string;
  speed?: number;
}

export function TypingName({ fullText, speed = 90 }: TypingNameProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText("");
    setIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, speed]);

  return (
    <span
      className="text-foreground font-semibold whitespace-pre inline-block relative"
      style={{ minWidth: `${fullText.length}ch` }} // Reserva espacio sin usar invisible
    >
      {text}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </span>
  );
}
