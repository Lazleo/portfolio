import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

export default function AnimatedSphere({
  setSpherePosition,
  isAnimating,
  cubeSpeed,
}) {
  const meshRef = useRef();
  let axis = new THREE.Vector3(0.1, 0.5, 0).normalize();
  const [angle, setAngle] = useState(0);

  const adjustmentX = 3.0;
  const adjustmentY = 0.5;

  const orbitCenter = { x: 0, y: 0, z: 0 };
  const orbitRadius = 0.7;
  const ellipseRadiusX = 5.2 + orbitRadius + adjustmentX;
  const ellipseRadiusY = 1.7997 + orbitRadius - adjustmentY;

  const tiltAngle = THREE.MathUtils.degToRad(25);
  useFrame(() => {
    if (meshRef.current && isAnimating) {
      setAngle((prev) => prev + cubeSpeed);

      const x = orbitCenter.x + ellipseRadiusX * Math.sin(angle);
      const z = orbitCenter.z + ellipseRadiusY * Math.cos(angle);
      const y = 0;
        meshRef.current.rotateOnAxis(axis, cubeSpeed);
      const cosTilt = Math.cos(tiltAngle);
      const sinTilt = Math.sin(tiltAngle);
      const tiltedX = x * cosTilt - y * sinTilt;
      const tiltedY = x * sinTilt + y * cosTilt;

      meshRef.current.position.set(tiltedX, tiltedY, z);
      const position = meshRef.current.position;
      setSpherePosition({ x: position.x, y: position.y, z: position.z });
    }
  });

  const color = "blue";

  return (
    <>
      <mesh position={[orbitCenter.x, orbitCenter.y, orbitCenter.z]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial transparent={true} color={color} />
        {/* <axesHelper args={[5]} /> */}
      </mesh>
    </>
  );
}
