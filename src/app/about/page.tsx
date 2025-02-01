"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Heart, Flag } from 'lucide-react';

const AboutPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [section1Ref, section1InView] = useInView({ threshold: 0.2, triggerOnce: false });

  const teamMembers = [
    { name: "John Doe", role: "Founder", icon: <User className="w-8 h-8 text-blue-500" /> },
    { name: "Jane Smith", role: "Lead Developer", icon: <User className="w-8 h-8 text-green-500" /> },
    { name: "Alice Johnson", role: "UI/UX Designer", icon: <User className="w-8 h-8 text-pink-500" /> },
  ];

  const missionAndVision = [
    { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Our Mission", description: "To revolutionize the animation industry by providing cutting-edge AI tools for creators." },
    { icon: <Flag className="w-8 h-8 text-yellow-500" />, title: "Our Vision", description: "To become the leading platform for AI-driven animation tools that empower creators worldwide." },
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
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="h-screen relative overflow-hidden flex items-center justify-center px-6 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:bg-gradient-to-t dark:from-black/60" />
        <motion.div
          className="text-center max-w-7xl relative z-20"
          animate={
            heroInView
              ? {
                opacity: [0, 1],
                y: [20, 0],
                transition: {
                  opacity: { duration: 0.8, ease: "easeOut" },
                  y: { duration: 0.8, ease: "easeOut" }
                },
              }
              : {}
          }
        >
          <motion.div
            className="mb-6"
            animate={{
              scale: [0.9, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              About Us
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl mb-8 text-gray-800 dark:text-gray-200 opacity-80"
            animate={{ opacity: [0, 1] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5, ease: "easeOut" },
            }}
          >
            Learn more about our mission, vision, and the amazing team behind this project.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
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
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {missionAndVision.map((item, index) => (
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
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section
        className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-gray-100">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full bg-white/90 border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl dark:bg-gray-700/90 dark:hover:bg-gray-600/90">
                  <CardContent className="space-y-4 text-gray-800 dark:text-gray-200">
                    <div className="p-3 rounded-full bg-gray-200 w-fit dark:bg-gray-600">
                      {member.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-lg">{member.role}</p>
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
            Get in Touch
          </h2>
          <p className="text-2xl mb-12 text-gray-800 dark:text-gray-200 opacity-80">
            We'd love to hear from you. Feel free to reach out with any questions or ideas!
          </p>
          <div className="space-x-4 flex justify-center">
            <Button
              className="text-xl px-8 py-6 bg-gradient-to-r from-blue-100 to-green-100 hover:from-blue-200 hover:to-green-200 transform hover:scale-105 transition-all duration-200 shadow-lg rounded-lg text-gray-800"
            >
              Contact Us
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
  );
};

export default AboutPage;
