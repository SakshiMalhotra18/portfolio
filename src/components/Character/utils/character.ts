import * as THREE from "three";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loadCharacter = () => {
    return new Promise<any>(async (resolve) => {
      const wrapper = new THREE.Group();

      // The Infinite Data Loop (Torus Knot)
      // This represents continuous data pipelines, infinity, and elegance.
      const knotGeo = new THREE.TorusKnotGeometry(1.4, 0.4, 256, 64);
      
      // Premium Frosted Glass Material
      const knotMat = new THREE.MeshPhysicalMaterial({
        color: 0xc8bfff,          // Subtle purple tint
        metalness: 0.1,           // Slightly reflective
        roughness: 0.2,           // Smooth but slightly frosted
        transmission: 0.9,        // Highly transparent (glass-like)
        thickness: 0.5,           // Glass thickness for refraction
        ior: 1.5,                 // Index of refraction for glass
        clearcoat: 1.0,           // Shiny outer coat
        clearcoatRoughness: 0.1,
        emissive: 0x6a0dad,       // Deep purple inner glow
        emissiveIntensity: 0.2,
      });
      
      const knot = new THREE.Mesh(knotGeo, knotMat);

      // Add a subtle inner wireframe to make it look "techy"
      const wireGeo = new THREE.TorusKnotGeometry(1.4, 0.405, 128, 32);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.05,
      });
      const wireKnot = new THREE.Mesh(wireGeo, wireMat);

      wrapper.add(knot);
      wrapper.add(wireKnot);

      // Smooth, hypnotic animation loop
      const animateObject = () => {
        requestAnimationFrame(animateObject);
        // Slow rotation for a calming, elegant feel
        knot.rotation.x += 0.002;
        knot.rotation.y += 0.003;
        wireKnot.rotation.x += 0.002;
        wireKnot.rotation.y += 0.003;
        
        // Gentle floating effect so it feels alive but unobtrusive
        wrapper.position.y = 11.5 + Math.sin(Date.now() * 0.001) * 0.15;
      };
      animateObject();

      // Adjust initial scale and position to fit perfectly on screen
      const scale = 1.1;
      wrapper.scale.set(scale, scale, scale);
      wrapper.position.set(0, 11.5, 0);

      // Compile and initialize
      await renderer.compileAsync(wrapper, camera, scene);
      
      resolve({ scene: wrapper });
      
      // Pass the abstract object to GSAP
      setCharTimeline(wrapper, camera, wrapper);
      setAllTimeline();
    });
  };

  return { loadCharacter };
};

export default setCharacter;
