"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitialized(true);
    });
  }, []);

  if (!initialized) return null;

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
              // onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: { enable: true },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#000000" },
            links: {
              enable: true,
              distance: 150,
              color: "#000000",
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
            number: { value: 16 },
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
