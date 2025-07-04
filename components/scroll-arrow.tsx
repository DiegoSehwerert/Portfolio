// app/components/ScrollArrow.tsx
"use client";

export function ScrollArrow() {
  return (
    <button
      className="mt-10 animate-bounce text-muted-foreground cursor-pointer border-none bg-transparent"
      onClick={() => {
        const el = document.getElementById("scroll-target");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      ⬇️ Descubre más
    </button>
  );
}
