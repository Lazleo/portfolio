import { Canvas } from '@react-three/fiber'


export default function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </Canvas>
  )
}
