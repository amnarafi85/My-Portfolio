import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#121212" },
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          color: { value: "#00ffff" },
          move: { enable: true, speed: 0.5 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
          },
        },
      }}
    />
  );
}

export default ParticlesBg;
