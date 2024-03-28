import { data } from "../../data/brainData";
import * as THREE from "three";
import Tube from "./Tube";

const PATHS = data.economics[0].paths;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

let curves = [];
for (let i = 0; i < 100; i++) {
  let points = [];
  let length = randomRange(0.2, 1);
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        5,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2
      )
    );
  }
  curves.push(new THREE.CatmullRomCurve3(points));
}

let brainCurves = [];  

PATHS.forEach((path) => {
    let points = [];
    for (let i = 0; i < path.length; i+=3) {
        points.push(new THREE.Vector3(path[i], path[i+1], path[i+2]));
    }
    brainCurves.push(new THREE.CatmullRomCurve3(points));
});

export default function AllTubes() {
  return (
    <>
      {brainCurves.map((curve, i) => (
        <Tube key={i} curve={curve} />
      ))}
    </>
  );
}
