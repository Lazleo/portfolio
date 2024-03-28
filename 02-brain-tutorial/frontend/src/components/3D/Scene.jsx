import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AllTubes from "./AllTubes";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}>
      <color attach="background" args={["black"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[10, 10, 10]} intensity={0.75} />
      <AllTubes />
      <OrbitControls />
    </Canvas>
  );
}
