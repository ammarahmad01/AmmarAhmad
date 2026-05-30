import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export const HtmlLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-[300px] bg-transparent">
      <span className="canvas-loader"></span>
      <p className="text-secondary text-sm font-semibold mt-6 tracking-wider">
        Loading 3D Experience...
      </p>
    </div>
  );
};

export default CanvasLoader;

