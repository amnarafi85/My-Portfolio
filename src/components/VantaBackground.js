import React, { useEffect, useRef, useState } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x111214,
          midtoneColor: 0x0c82a9,
          lowlightColor: 0x231f35,
          baseColor: 0x0e2024,
          blurFactor: 0.84,
          speed: 3.5,
          zoom: 0.3,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
}

export default VantaBackground;
