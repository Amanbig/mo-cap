"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeTest: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null); // Reference to the loaded 3D model
  const mixerRef = useRef<THREE.AnimationMixer | null>(null); // Reference to the animation mixer
  const lastTimeRef = useRef<number>(0); // Store the last time to control the model movement
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null); // Camera reference
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // The initial position of the model
  const initialModelPosition = 5; // Start closer to the camera
  const maxScrollDistance = 10; // Max distance the model should come closer to the camera

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    console.log(isScrolling)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = initialModelPosition;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lighting setup
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Load 3D model with animations using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      '/untitled.glb', // Replace with your model's path
      (gltf) => {
        // Store the model in a reference
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);

        // Set up the animation mixer for the loaded model
        mixerRef.current = new THREE.AnimationMixer(gltf.scene);

        // Loop through all animations in the model and add them to the mixer
        gltf.animations.forEach((clip) => {
          const action = mixerRef.current?.clipAction(clip);
          if (action) {
            action.play();

            // Slow down the animation by reducing the effective time scale
            action.setEffectiveTimeScale(0.5); // Slow down the animation to half speed
          }
        });

        // Set initial position for model (adjust if needed)
        if (modelRef.current) {
          modelRef.current.position.z = initialModelPosition;
        }
      },
      undefined, 
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Camera position
    camera.position.y = 0.01;

    // Handle scroll
    const handleScroll = (e: Event) => {
      e.preventDefault(); // Prevent page scroll

      if (cameraRef.current && modelRef.current) {
        const scrollY = window.scrollY;

        // Calculate the movement based on scroll
        const moveDistance = Math.min(scrollY * 0.05, maxScrollDistance); // Slow down the movement
        modelRef.current.position.z = initialModelPosition - moveDistance;

        // Ensure the page doesn't scroll beyond the max distance
        if (scrollY < maxScrollDistance) {
          setIsScrolling(true);
          document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
          setIsScrolling(false);
          document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      // Calculate delta time to move the model at a constant speed
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Update the mixer with the current time (important for playing animations)
      if (mixerRef.current) {
        mixerRef.current.update(delta * 0.001); // Multiply by 0.001 to convert ms to seconds
      }

      renderer.render(scene, cameraRef.current);
    };

    animate(0);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeTest;
