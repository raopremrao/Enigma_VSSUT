import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const diffuseMap = textureLoader.load('/diffuse.png');
const environmentMap = textureLoader.load('/T_Abstract_Background_02_Min.png');
environmentMap.mapping = THREE.EquirectangularReflectionMapping;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

const boxes = [];
let model;

loader.load('/Glass_Box_Split-draco.glb', (gltf) => {
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        map: diffuseMap,
        // metalness: 0.9,
        metalness: 1,
        // roughness: 0.1,
        roughness: 0.0,
        // transmission: 0.1,
        transmission: 1,
        // ior: 2.33,
        ior: 3,
        thickness: 2,
        envMap: environmentMap,
        clearcoat: 1,
        // clearcoatRoughness: 0
        clearcoatRoughness: 0.0,
        transparent: true,
        opacity: 0.98,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0x00e600
    });

    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = glassMaterial;
            boxes.push(child);
        }
    });

    model = gltf.scene;
    model.scale.set(0.015, 0.015, 0.015);
    scene.add(model);
});

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
// camera.position.z = 10;
camera.position.set(0.6854754123196142, 8.132164323341618, 4.036123110995614);
camera.lookAt(
-0.06440750269368016, -0.926376003808186, -0.3710514427476867
)
scene.add(camera);

// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate the model
    if (scene.children.length > 2) {
        scene.children[2].rotation.y = 0.5 * elapsedTime;
    }

    // controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        const cameraPosition = camera.position.clone();
        const lookAtDirection = new THREE.Vector3();
        camera.getWorldDirection(lookAtDirection);

        console.log('Camera Position:', cameraPosition);
        console.log('Camera is looking at direction:', lookAtDirection);
    }
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollRatio = scrollY / window.innerHeight;

    if (model) {
        // Move from center to right
        model.position.x = scrollRatio * 5;
        model.position.y = scrollRatio * 1.7;

        // Scale down
        const scale = 0.015 - scrollRatio * 0.006;
        model.scale.set(scale, scale, scale);
    }

    const delayFactor = 0; // pixels

    boxes.forEach((box, index) => {
        const scrollOffset = index * delayFactor;
        const rotation = ((scrollY - scrollOffset) / (window.innerHeight * 1)) * Math.PI;
        box.rotation.z = Math.max(0, rotation);
    });
});
