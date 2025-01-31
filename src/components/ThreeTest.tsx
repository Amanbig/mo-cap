"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeTest: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const lastTimeRef = useRef<number>(0);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    
    // Get container dimensions
    const containerWidth = mountRef.current.clientWidth;
    const containerHeight = mountRef.current.clientHeight;

    // Adjust camera for better model visibility
    const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 1000);
    camera.position.set(0, 0.5, 3); // Adjusted camera position for better vertical alignment
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff0000, 0.8, 0.2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load('/spider2099.glb', (gltf) => {
      modelRef.current = gltf.scene;
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1.5 / maxDim; // Adjust scale factor as needed
      
      gltf.scene.position.x = -center.x;
      gltf.scene.position.y = -center.y + 0.5; // Offset model position upward
      gltf.scene.position.z = -center.z;
      gltf.scene.scale.setScalar(scale);
      
      scene.add(gltf.scene);

      mixerRef.current = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => {
        const action = mixerRef.current?.clipAction(clip);
        if (action) {
          action.play();
          action.setEffectiveTimeScale(0.5);
        }
      });
    });

    // Add responsive handling
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    const animate = (time: number) => {
      requestAnimationFrame(animate);

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (mixerRef.current) {
        mixerRef.current.update(delta * 0.001);
      }

      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005; // Slow rotation for better visibility
      }

      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeTest;