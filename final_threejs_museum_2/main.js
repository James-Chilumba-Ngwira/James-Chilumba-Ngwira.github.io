import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const canvas = document.querySelector('.webgl');
const overlay = document.getElementById('loading-overlay');
const progressEl = document.getElementById('loading-progress');
const messageEl = document.getElementById('loading-message');
const hintEl = document.getElementById('controls-hint');

function showError(text) {
  if (!overlay || !messageEl) return;
  overlay.classList.add('error');
  messageEl.textContent = text;
}

// Browsers block fetch() of local files under file:// (each local file gets an
// opaque origin), so a double-clicked index.html can never load Scene.json/HDR.
// Fail fast with a clear message instead of spinning at 0% forever.
if (location.protocol === 'file:') {
  showError('This 3D viewer needs to be served over http(s) — it won’t load when opened as a local file. View it on the live site, or run a local static server (e.g. "npx serve" or VS Code’s Live Server) to preview it.');
  throw new Error('Aborting: 3D viewer opened via file:// — local fetch of scene assets is blocked by the browser.');
}

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(0, 1.2, 2);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// The scene's own scale/origin varies by export, so frame the camera from the
// loaded object's actual bounding sphere instead of trusting a hardcoded position.
function frameCameraToObject(object) {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const fitDistance = (sphere.radius / Math.sin((camera.fov * Math.PI / 180) / 2)) * 1.3;

  camera.near = Math.max(fitDistance / 200, 0.01);
  camera.far = fitDistance * 20;
  camera.updateProjectionMatrix();

  camera.position.set(
    sphere.center.x + fitDistance * 0.55,
    sphere.center.y + fitDistance * 0.35,
    sphere.center.z + fitDistance * 0.75
  );
  controls.target.copy(sphere.center);
  controls.minDistance = fitDistance * 0.15;
  controls.maxDistance = fitDistance * 3;
  controls.update();
}

let hdrReady = false;
let sceneReady = false;

function checkReady() {
  if (hdrReady && sceneReady && overlay) {
    overlay.classList.add('done');
    if (hintEl) {
      hintEl.classList.add('show');
      setTimeout(() => hintEl.classList.remove('show'), 3200);
    }
  }
}

// Environment map (HDR night sky)
const rgbeLoader = new RGBELoader();
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

rgbeLoader.load('assets/night_sky.hdr', function (hdrTexture) {
  const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
  scene.background = envMap;
  scene.environment = envMap;
  hdrTexture.dispose();
  pmremGenerator.dispose();
  hdrReady = true;
  checkReady();
}, undefined, function () {
  hdrReady = true; // don't block the scene forever if the HDR fails
  checkReady();
});

// Main gallery scene (large JSON export from the internship project)
const loader = new THREE.ObjectLoader();
loader.load('assets/Scene.json', function (loadedScene) {
  scene.add(loadedScene);
  frameCameraToObject(loadedScene);
  sceneReady = true;
  checkReady();
}, function (evt) {
  if (progressEl && evt.lengthComputable) {
    const pct = Math.min(100, Math.round((evt.loaded / evt.total) * 100));
    progressEl.textContent = pct + '%';
  }
}, function (error) {
  console.error('An error occurred loading the scene:', error);
  showError('Couldn’t load the 3D scene. Check your connection and try again — see the browser console for details.');
});

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
