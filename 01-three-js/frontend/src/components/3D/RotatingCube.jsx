import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

export default function RotatingCube() {

const meshRef = useRef();

useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.y -= 0.01;
  }
});

const color = "rgb(0, 150, 175)"

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial transparent={true} color={color} />
    </mesh>
  );
}
