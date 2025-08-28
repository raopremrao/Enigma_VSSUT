// import * as THREE from "three/webgpu";
// import {
//  uv,
//  time,
//  sin,
//  cos,
//  floor,
//  vec2,
//  fract,
//  mix,
//  step,
//  mul,
//  add,
//  sub,
//  pow,
// } from "three/tsl";

// // ====== Scene, Camera, Renderer ======
// const container = document.getElementById('outroCanvas')
// const scene = new THREE.Scene();
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
// const renderer = new THREE.WebGPURenderer({ canvas: container ,antialias: false});
// renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // ====== TV Static Noise Shader ======
// const tvStatic = () => {
//  const uvCoords = uv();
 
//  // Create multiple noise layers without directional movement
//  const scale1 = 250.0;  // Fine grain
//  const scale2 = 90.0;  // Medium grain
//  const scale3 = 15.0;   // Large patches
 
//  // Static fine noise - no movement, just time-based randomness
//  const seed1 = floor(time.mul(60.0)); // Change seed every frame at 60fps
//  const p1 = floor(uvCoords.mul(scale1));
//  const noise1 = fract(sin(p1.dot(vec2(127.1, 311.7)).add(seed1.mul(13.7))).mul(43758.5453));
 
//  // Medium noise with slower time variation
//  const seed2 = floor(time.mul(30.0));
//  const p2 = floor(uvCoords.mul(scale2));
//  const noise2 = fract(sin(p2.dot(vec2(269.5, 183.3)).add(seed2.mul(7.3))).mul(17612.1234));
 
//  // Large patches with very slow variation
//  const seed3 = floor(time.mul(10.0));
//  const p3 = floor(uvCoords.mul(scale3));
//  const noise3 = fract(sin(p3.dot(vec2(73.2, 157.8)).add(seed3.mul(3.1))).mul(29834.7821));
 
//  // Add extra randomness layer that changes every few frames
//  const seed4 = floor(time.mul(45.0));
//  const p4 = floor(uvCoords.mul(1200.0));
//  const noise4 = fract(sin(p4.dot(vec2(91.6, 241.9)).add(seed4.mul(17.9))).mul(51827.3492));
 
//  // Combine all noise layers
//  let combined = noise1.mul(0.35)
//    .add(noise2.mul(0.25))
//    .add(noise3.mul(0.2))
//    .add(noise4.mul(0.2));
 
//  // Dramatically increase blacks - much more aggressive contrast
//  combined = pow(combined, 5.0);  // Higher power = more blacks
//  combined = combined.mul(0.35).add(0.02);  // Scale down further, minimal offset
 
//  // Add even more black crushing
//  combined = step(0.15, combined).mul(combined);  // Cut off low values entirely
 
//  // Add subtle scan lines that don't move
//  const staticScanLines = sin(uvCoords.y.mul(1200.0)).mul(0.02).add(0.98);
//  combined = combined.mul(staticScanLines);
 
//  // Occasional random interference (less frequent to reduce flickering)
//  const interferenceChance = step(0.995, fract(sin(time.mul(0.1)).mul(12345.0)));
//  const interferencePattern = fract(sin(uvCoords.y.mul(800.0)).mul(9999.0));
//  combined = mix(combined, interferencePattern.mul(0.2), interferenceChance.mul(0.15));
 
//  return combined.toVar();
// };

// // ====== Material ======
// const material = new THREE.MeshBasicNodeMaterial();
// material.colorNode = tvStatic();

// // ====== Fullscreen Quad ======
// const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
// scene.add(plane);

// // ====== Animate ======
// function animate() {
//  renderer.renderAsync(scene, camera);
//  requestAnimationFrame(animate);
// }
// animate();

// // ====== Handle Resize ======
// window.addEventListener("resize", () => {
//  renderer.setSize(window.innerWidth, window.innerHeight);
// });