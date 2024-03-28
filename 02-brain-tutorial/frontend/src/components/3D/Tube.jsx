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
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /*glsl*/ `
    varying vec2 vUv;
    uniform float time;
    varying float vProgress;
    void main() {
      vUv = uv;
        vProgress = smoothstep(-1.,1.,sin(vUv.x * 3.14 + time*2.5));
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
        vec3 finalColor = mix(color, color * 0.25, vProgress );
        float hideCornersLow = smoothstep(0.0, 0.5, vUv.x) + smoothstep(0.0, 0.5, vUv.y);
        float hideCornersHigh = smoothstep(1., 0.9, vUv.x) + smoothstep(1., 0.9, vUv.y);
        vec3 color1 = vec3(1., 0., 0.);
        vec3 color2 = vec3(1., 1., 0.);
      gl_FragColor.rgba = vec4(vec3(vProgress),1.);
      gl_FragColor.rgba = vec4(finalColor, hideCornersLow * hideCornersHigh);
    }
  `
  );

  // declaratively
  extend({ BrainShiftMaterial });

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.001, 8, false]} />
      <brainShiftMaterial
        ref={brainMat}
        side={THREE.DoubleSide}
        transparent={true}
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
