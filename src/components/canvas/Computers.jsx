import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

import CanvasLoader from "../Loader";
import { desktop_pc_mockup } from "../../assets";
import { useMobile } from "../../hooks/useMobile";
import ErrorBoundary from "./ErrorBoundary";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMobile(768);

  if (isMobile) {
    return (
      <div className="absolute inset-0 top-[250px] w-full h-[calc(100vh-250px)] flex justify-center items-center pointer-events-none">
        <div className="w-full h-full max-w-7xl mx-auto flex justify-center items-center px-6">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-full h-[65%] sm:h-[75%] flex justify-center items-center pointer-events-auto"
          >
            <img
              src={desktop_pc_mockup}
              alt="Developer PC Mockup"
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 0 35px rgba(145, 94, 255, 0.35))",
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  const fallbackUI = (
    <div className="absolute inset-0 top-[250px] w-full h-[calc(100vh-250px)] flex justify-center items-center pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto flex justify-center items-center px-6">
        <div className="w-full h-[65%] sm:h-[75%] flex flex-col justify-center items-center border border-dashed border-[#915EFF]/20 rounded-2xl p-4 bg-primary/20 pointer-events-auto">
          <img
            src={desktop_pc_mockup}
            alt="Developer PC Mockup"
            className="w-[120px] h-[120px] object-contain opacity-50 mb-4"
          />
          <p className="text-sm font-semibold text-secondary text-center">
            Failed to initialize 3D scene.
          </p>
          <span className="text-xs text-secondary mt-1 text-center opacity-60">
            Rendered fallback preview (WebGL context not available).
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={fallbackUI}>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;

