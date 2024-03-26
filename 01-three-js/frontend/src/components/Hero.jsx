import React from "react";
import { Canvas } from "@react-three/fiber";
import RotatingCube from "./3D/RotatingCube";
import AnimatedSphere from "./3D/AnimatedSphere";

export default function Hero() {

  return (
    <div className=" bg-blue-700 h-screen w-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <RotatingCube />
        {/* <axesHelper args={[5]} /> */}
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
