import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function Tube({ curve}) {

    const brainMat = useRef();

    const BrainShiftMaterial = shaderMaterial(
      { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
      // vertex shader
      /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      // fragment shader
      /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(1.,0.,0.,1.);
    }
  `
    );

    // declaratively
    extend({ BrainShiftMaterial });



  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.01, 8, false]} />
      <brainShiftMaterial ref={brainMat} />
    </mesh>
  );
}
