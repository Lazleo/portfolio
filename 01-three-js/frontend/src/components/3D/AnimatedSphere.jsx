import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

export default function AnimatedSphere() {
  const meshRef = useRef();
  let axis = new THREE.Vector3(0.1, 0.5, 0).normalize();
  const [angle, setAngle] = useState(0);

  useFrame(() => {
    if (meshRef.current) {
      setAngle((prev) => prev + 0.01);
      const x = 2 * Math.sin(angle);
      const z = 3 * Math.cos(angle);
      const y = 3 * Math.cos(angle);
      meshRef.current.rotateOnAxis(axis, 0.01);
      meshRef.current.position.set(x, y, z);
    }
  });

  const color = "blue";

  return (
    <mesh ref={meshRef} position={[1, 1, 0]}>
      {/* <axesHelper args={[5]} /> */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial transparent={true} color={color} />
    </mesh>
  );
}
