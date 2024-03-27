import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingCube from "./RotatingCube";
import AnimatedSphere from "./AnimatedSphere";

export default function Scene() {
  const [spherePosition, setSpherePosition] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const [cubeSpeed, setCubeSpeed] = useState(0.01);

  const [x, y, z] = [10, 5, 10];

  const cameraAnglebyY = 45;

  const theta = cameraAnglebyY * (Math.PI / 180);

  const newX = x * Math.cos(theta) + z * Math.sin(theta);
  const newZ = -x * Math.sin(theta) + z * Math.cos(theta);

  function toggleAnimation() {
    setIsAnimating((prev) => !prev);
  }

  return (
    <Canvas
      camera={{ position: [newX, y, newZ], fov: 45 }}
      style={{ background: "lightblue" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={4} />
      {/* <RotatingCube
        spherePosition={spherePosition}
        isAnimating={isAnimating}
        toggleAnimation={toggleAnimation}
        cubeSpeed={cubeSpeed}
      /> */}
      {/* <AnimatedSphere
        setSpherePosition={setSpherePosition}
        isAnimating={isAnimating}
        cubeSpeed={cubeSpeed}
      /> */}
    </Canvas>
  );
}
