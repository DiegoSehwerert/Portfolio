"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const [initialized, setInitialized] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitialized(true);
    });
  }, []);

  if (!initialized) return null;

  const isDark = resolvedTheme === "dark";

  const particleColor = isDark ? "#ffffff" : "#000000";
  const linkColor = isDark ? "#ffffff" : "#000000";

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        particlesLoaded={async (container) => {
          console.log(container);
        }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: { enable: true },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: particleColor },
            links: {
              enable: true,
              distance: 200,
              color: linkColor,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              direction: "outside",
              outModes: { default: "bounce" },
              random: true,
              speed: 6,
              straight: false,
            },
            number: { value: 20 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
