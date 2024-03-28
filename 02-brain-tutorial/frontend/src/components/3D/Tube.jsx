import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Tube({ curve }) {
  const brainMat = useRef();

  useFrame(({ clock }) => {
    brainMat.current.uniforms.time.value = clock.getElapsedTime();
  });

  const BrainShiftMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.4, 0.1) },
    // vertex shader
    /*glsl*/ `
    varying vec2 vUv;
    uniform float time;
    varying float vProgress;
    void main() {
      vUv = uv;
        vProgress = smoothstep(-1.,1.,sin(vUv.x * 3.14 + time));
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // fragment shader
    /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying float vProgress;
    void main() {
        vec3 color1 = vec3(0., 0., 1.);
        vec3 color2 = vec3(1., 0., 0.);
        vec3 finalColor = mix(color1, color2, vProgress );
      gl_FragColor.rgba = vec4(finalColor,1.);
    }
  `
  );

  // declaratively
  extend({ BrainShiftMaterial });

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.05, 8, false]} />
      <brainShiftMaterial ref={brainMat} side={THREE.DoubleSide} />
    </mesh>
  );
}
