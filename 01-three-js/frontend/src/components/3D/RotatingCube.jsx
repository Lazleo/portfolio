import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

export default function RotatingCube({
  spherePosition,
  isAnimating,
  toggleAnimation,
}) {
  const meshRef = useRef();
  const [color, setColor] = useState("rgb(0, 150, 175)");
  const [colorChangeCount, setColorChangeCount] = useState(0);

  const generateRandomColor = () => {
    const r = 125 + Math.floor(Math.random() * 0);
    const g = 125 + Math.floor(Math.random() * 120);
    const b = 125 + Math.floor(Math.random() * 120);
    return `rgb(${r},${g},${b})`;
  };

  useFrame(() => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.y += 0.01;

      const distance = meshRef.current.position.distanceTo(spherePosition);
      if (distance <= 2) {
        setColor(generateRandomColor());
      }
    }
  });

  useEffect(() => {
    if (colorChangeCount <= 2) {
      setColorChangeCount((prevCount) => prevCount + 1);
    } else {
    //   toggleAnimation();
    }
  }, [color]);

  useEffect(() => {
    if (meshRef.current) {
      const initialRotationY = 90 * (Math.PI / 180);
      meshRef.current.rotation.y = initialRotationY;
    }
  }, []);

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial transparent={true} color={color} />
        {/* <axesHelper position={[0, 0, 0]} args={[5]} /> */}
      </mesh>
    </>
  );
}
