import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useMobile } from "../../hooks/useMobile";
import ErrorBoundary from "./ErrorBoundary";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2.0 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const isMobile = useMobile(768);

  const fallbackUI = (
    <div className='flex flex-col justify-center items-center w-full h-full min-h-[300px] border border-dashed border-secondary/20 rounded-2xl p-6 bg-primary/10'>
      <div className='w-20 h-20 rounded-full bg-[#915EFF]/10 border border-[#915EFF]/30 flex justify-center items-center animate-pulse mb-3'>
        <span className='text-[#915EFF] text-2xl'>🌍</span>
      </div>
      <p className='text-sm font-semibold text-secondary text-center'>
        Failed to load interactive planet.
      </p>
    </div>
  );

  return (
    <ErrorBoundary fallback={fallbackUI}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: isMobile ? 55 : 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth isMobile={isMobile} />

          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;

