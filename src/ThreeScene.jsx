import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from './Loader';

// const Model = ({ path }) => {
//   const { scene } = useGLTF(path);
  
//   // Adjust the model's position, rotation, and scale
//   scene.position.set(0, 0, 0);
//   scene.rotation.set(0, Math.PI / 4, 0); // Rotate 45 degrees on the Y axis
//   scene.scale.set(0.5, 0.5, 0.5); // Scale down by half
  
//   return <primitive object={scene} />;
// };


const ThreeScene = () => {
  const mountRef = useRef(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.set(-20, 20, 25);
    camera.lookAt(0, 0, 0);

    // Room 1 Floor
    const floor1Geometry = new THREE.PlaneGeometry(40, 25); // approx 1000 units
    // const floor1Material = new THREE.MeshBasicMaterial({color: 0x7CFC00, side: THREE.DoubleSide});
    const floor1Material = new THREE.MeshBasicMaterial({color: 0x7CFC00});
    const floor1 = new THREE.Mesh(floor1Geometry, floor1Material);
    floor1.rotation.x = -Math.PI / 2;
    floor1.position.set(-3, 0, 0);
    scene.add(floor1);


    // Outer walls 

    // Full wall 1
    const wallGeometry1 = new THREE.BoxGeometry(0.2, 5, 25);
    const wallMaterial1 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
    const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial1);
    wall1.position.set(17, 2.5, 0);
    scene.add(wall1);

    // Full wall 2
    const wallGeometry2 = new THREE.BoxGeometry(0.2, 5, 25);
    const wallMaterial2 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial2);
    wall2.rotation.y = -Math.PI /2;
    wall2.position.set(4.5, 2.5, -12.5);
    scene.add(wall2);

    // Full wall 3
    const wallGeometry3 = new THREE.BoxGeometry(0.2, 5, 25);
    const wallMaterial3 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall3 = new THREE.Mesh(wallGeometry3, wallMaterial3);
    // wall3.rotation.y = -Math.PI /2;
    wall3.position.set(-8, 2.5, 0);
    scene.add(wall3);

    // Full wall 4
    const wallGeometry4 = new THREE.BoxGeometry(0.2, 5, 15);
    const wallMaterial4 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall4 = new THREE.Mesh(wallGeometry4, wallMaterial4);
    wall4.rotation.y = -Math.PI /2;
    wall4.position.set(-15.5, 2.5, -7.5);
    scene.add(wall4);

    // Full wall 5
    const wallGeometry5 = new THREE.BoxGeometry(0.2, 5, 20);
    const wallMaterial5 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall5 = new THREE.Mesh(wallGeometry5, wallMaterial5);
    // wall5.rotation.y = -Math.PI /2;
    wall5.position.set(-23, 2.5, 2.5);
    scene.add(wall5);

    // Full wall 6
    const wallGeometry6 = new THREE.BoxGeometry(0.2, 5, 15);
    const wallMaterial6 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall6 = new THREE.Mesh(wallGeometry6, wallMaterial6);
    wall6.rotation.y = -Math.PI /2;
    wall6.position.set(-15.5, 2.5, 12.5);
    scene.add(wall6);

    // Full wall 7
    const wallGeometry7 = new THREE.BoxGeometry(0.2, 5, 10);
    const wallMaterial7 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall7 = new THREE.Mesh(wallGeometry7, wallMaterial7);
    wall7.rotation.y = -Math.PI /2;
    wall7.position.set(12, 2.5, 12.5);
    scene.add(wall7);


    // Inner walls

    // Full wall 1 copy 

    const wallGeometry9 = new THREE.BoxGeometry(0.2, 5, 15);
    const wallMaterial9 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall9 = new THREE.Mesh(wallGeometry9, wallMaterial9);
    wall9.position.set(7, 2.5, 5);
    scene.add(wall9);

    const wallGeometry10 = new THREE.BoxGeometry(0.2, 5, 10);
    const wallMaterial10 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall10 = new THREE.Mesh(wallGeometry10, wallMaterial10);
    wall10.position.set(4, 2.5, 7.5);
    scene.add(wall10);

    // Full wall 2 copy 
    const wallGeometry11 = new THREE.BoxGeometry(0.2, 5, 25);
    const wallMaterial11 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall11 = new THREE.Mesh(wallGeometry11, wallMaterial11);
    wall11.rotation.y = -Math.PI /2;
    wall11.position.set(4.5, 2.5, -2.5);
    scene.add(wall11);

    const wallGeometry12 = new THREE.BoxGeometry(0.2, 5, 5);
    const wallMaterial12 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall12 = new THREE.Mesh(wallGeometry12, wallMaterial12);
    wall12.rotation.y = -Math.PI /2;
    wall12.position.set(1.5, 2.5, -7.5);
    scene.add(wall12);

    const wallGeometry14 = new THREE.BoxGeometry(0.2, 5, 15);
    const wallMaterial14 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall14 = new THREE.Mesh(wallGeometry14, wallMaterial14);
    wall14.rotation.y = -Math.PI /2;
    wall14.position.set(-0.5, 2.5, 2.5);
    scene.add(wall14);

    const wallGeometry16 = new THREE.BoxGeometry(0.2, 5, 3);
    const wallMaterial16 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5});
    const wall16 = new THREE.Mesh(wallGeometry16, wallMaterial16);
    wall16.rotation.y = -Math.PI /2;
    wall16.position.set(5.5, 2.5, 7);
    scene.add(wall16);


    // Full wall 3 copy
    const wallGeometry8 = new THREE.BoxGeometry(0.2, 5, 5);
    const wallMaterial8 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
    const wall8 = new THREE.Mesh(wallGeometry8, wallMaterial8);
    // wall3.rotation.y = -Math.PI /2;
    wall8.position.set(4, 2.5, -10);
    scene.add(wall8);

    const wallGeometry13 = new THREE.BoxGeometry(0.2, 5, 5);
    const wallMaterial13 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
    const wall13 = new THREE.Mesh(wallGeometry13, wallMaterial13);
    // wall3.rotation.y = -Math.PI /2;
    wall13.position.set(-1, 2.5, -5);
    scene.add(wall13);

    const wallGeometry15 = new THREE.BoxGeometry(0.2, 5, 5);
    const wallMaterial15 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false });
    const wall15 = new THREE.Mesh(wallGeometry15, wallMaterial15);
    // wall3.rotation.y = -Math.PI /2;
    wall15.position.set(-2.5, 2.5, 0);
    scene.add(wall15);

    // doors 
    // center right
    const doorGeometry1 = new THREE.BoxGeometry(0.2, 4, 2.5);
    const doorMaterial1 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door1 = new THREE.Mesh(doorGeometry1, doorMaterial1);
    door1.position.set(7, 2, 0);
    scene.add(door1);
    // center middle
    const doorGeometry2 = new THREE.BoxGeometry(0.2, 4, 2.5);
    const doorMaterial2 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door2 = new THREE.Mesh(doorGeometry2, doorMaterial2);
    door2.position.set(-2.5, 2, 0);
    scene.add(door2);
    // left
    const doorGeometry3 = new THREE.BoxGeometry(0.2, 4, 2.5);
    const doorMaterial3 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door3 = new THREE.Mesh(doorGeometry3, doorMaterial3);
    door3.position.set(-8, 2, -5);
    scene.add(door3);
    // top middle left
    const doorGeometry4 = new THREE.BoxGeometry(0.2, 4, 2.5);
    const doorMaterial4 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door4 = new THREE.Mesh(doorGeometry4, doorMaterial4);
    door4.position.set(-8, 2, -10);
    scene.add(door4);
    // top right
    const doorGeometry5 = new THREE.BoxGeometry(0.2, 4, 2.5);
    const doorMaterial5 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door5 = new THREE.Mesh(doorGeometry5, doorMaterial5);
    door5.position.set(17, 2, -5);
    scene.add(door5);

    // windows 

    const doorGeometry10 = new THREE.BoxGeometry(0.2, 2, 1.5);
    const doorMaterial10= new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door10 = new THREE.Mesh(doorGeometry10, doorMaterial10);
    door10.position.set(17, 3, -10);
    scene.add(door10);

    const doorGeometry11 = new THREE.BoxGeometry(0.2, 2, 3.5);
    const doorMaterial11= new THREE.MeshBasicMaterial({color: 0x0000ff});
    const door11 = new THREE.Mesh(doorGeometry11, doorMaterial11);
    door11.position.set(17, 3, 8);
    scene.add(door11);


    //  Load the GLTF model

  
    const loader = new GLTFLoader();
    loader.load('./models/desktop_pc/scene.gltf', (gltf) => {
      const model1 = gltf.scene;
      model1.position.set(-15.5, 0, -5);
      model1.rotation.set(0, - Math.PI / 2, 0); // Rotate 45 degrees on the Y axis
      model1.scale.set(0.5, 0.5, 0.5); // Scale down by half
      scene.add(model1);
    });

    loader.load('./models/desktop_pc/scene.gltf', (gltf) => {      
      const model2 = gltf.scene;
      model2.position.set(-15.5, 0, 9.5);
      model2.rotation.set(0, Math.PI / 2, 0); // Rotate 45 degrees on the Y axis
      model2.scale.set(0.5, 0.5, 0.5); // Scale down by half
      scene.add(model2);
    });



    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation is enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 50;
    // controls.maxPolarAngle = Math.PI / 2;


    // Light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Ambient light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Point light
      pointLight.position.set(0, 10, 10);
      scene.add(pointLight);

      const spotLight = new THREE.SpotLight(0xffffff, 1); // Spot light
      spotLight.position.set(0, 10, 10);
      spotLight.angle = Math.PI / 4;
      spotLight.penumbra = 0.05;
      spotLight.decay = 2;
      spotLight.distance = 200;
      scene.add(spotLight);

      // Hemisphere light
      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.6); 
      scene.add(hemisphereLight);


    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {loading && <CanvasLoader />}
    </div>
    );
};

export default ThreeScene;





