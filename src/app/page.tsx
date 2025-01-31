"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import ThreeTest from '@/components/ThreeTest';

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [section1Ref, section1InView] = useInView({ threshold: 0.2, triggerOnce: false });

  const features = [
    { icon: <Sparkles className="w-8 h-8 text-indigo-500" />, title: "AI-Powered Animation", description: "Transform your videos into stunning animations with our cutting-edge AI tools" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Instant Results", description: "Apply animations to 3D models in real-time, fast and efficiently" },
    { icon: <Shield className="w-8 h-8 text-blue-500" />, title: "Seamless Integration", description: "Easily apply your animations to multiple 3D models without hassle" },
    { icon: <Rocket className="w-8 h-8 text-green-500" />, title: "Scalable Technology", description: "Built to handle high-demand projects with ease and speed" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = position / height;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section - Updated layout */}
      <section
  ref={heroRef}
  className="h-screen relative overflow-hidden flex items-center justify-center px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:bg-gradient-to-t dark:from-black/60" />

  {/* Centered 3D Model Behind the Text */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <ThreeTest />
  </div>

  {/* Main Heading - Positioned Above the 3D Model */}
  <motion.div
    className="text-center max-w-7xl relative z-20"
    animate={
      heroInView
        ? {
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.8 },
          }
        : {}
    }
  >
    <motion.div
      className="mb-6"
      animate={{ scale: [0.9, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Elevate Your Videos with AI
      </h1>
    </motion.div>
    <p className="text-xl md:text-3xl mb-8 text-gray-800 dark:text-gray-200 opacity-80">
      Convert your videos into mesmerizing animations for 3D models and beyond.
    </p>
    <Button className="text-lg px-8 py-6 bg-gradient-to-r from-teal-100 to-blue-100 hover:from-teal-200 hover:to-blue-200 transform hover:scale-105 transition-all duration-200 shadow-xl rounded-lg text-gray-800">
      Start Animating
    </Button>
  </motion.div>

  {/* Spiderweb Container */}
  <div className="absolute inset-0 flex items-center justify-center z-15">
    <div className="relative">
      <div className="web-animation w-full h-full absolute bg-transparent z-0"></div> {/* Spiderweb Animation */}
    </div>
  </div>
</section>




      {/* Features Section */}
      <section
        ref={section1Ref}
        className="py-20 px-4 bg-white/90 backdrop-blur-md bg-white dark:bg-black"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={section1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-gray-100">
            Powerful Features for Seamless Animation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={section1InView ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.2 }
                } : {}}
              >
                <Card className="p-6 h-full bg-white/90 border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl dark:bg-gray-700/90 dark:hover:bg-gray-600/90">
                  <CardContent className="space-y-4 text-gray-800 dark:text-gray-200">
                    <div className="p-3 rounded-full bg-gray-200 w-fit dark:bg-gray-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b bg-white dark:bg-black">

        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800 dark:text-gray-100">
            Ready to Animate?
          </h2>
          <p className="text-2xl mb-12 text-gray-800 dark:text-gray-200 opacity-80">
            Join thousands of creators turning their videos into life-like 3D animations.
          </p>
          <div className="space-x-4 flex justify-center">
            <Button
              className="text-xl px-8 py-6 bg-gradient-to-r from-blue-100 to-green-100 hover:from-blue-200 hover:to-green-200 transform hover:scale-105 transition-all duration-200 shadow-lg rounded-lg text-gray-800"
            >
              Start Creating
            </Button>

            <Button
              variant="outline"
              className="text-xl px-8 py-6 border-2 border-indigo-500 hover:bg-indigo-50 hover:dark:bg-black transform hover:scale-105 transition-all duration-200 rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400"
        style={{ width: `${scrollProgress * 100}%`, opacity: scrollProgress > 0 ? 1 : 0 }}
        transition={{ opacity: { duration: 0.5 } }}
      />
    </div>
    // <ThreeTest />
  );
};

export default HomePage;