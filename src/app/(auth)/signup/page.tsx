"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Github, Mail } from 'lucide-react';
import {FaGoogle} from 'react-icons/fa';
import Link from 'next/link';

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md" // Increased from max-w-md to max-w-3xl
      >
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl">
          <CardHeader className="px-8 py-6"> {/* Increased padding */}
            <CardTitle className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Create a Account
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8"> {/* Increased padding */}
            <form onSubmit={handleLogin} className="space-y-6"> {/* Increased spacing */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 text-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg" // Increased padding and text size
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 text-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg" // Increased padding and text size
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 text-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg" // Increased padding and text size
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-7 text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200" // Increased padding and text size
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-7 h-7 border-2 border-white border-t-transparent rounded-full" // Increased loader size
                    />
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </motion.div>

              <div className="relative my-8"> {/* Increased margin */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-base"> {/* Increased text size */}
                  <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6"> {/* Increased gap */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full py-7 text-lg flex items-center justify-center space-x-3 border-2 hover:bg-gray-50 dark:hover:bg-gray-800" // Increased padding, spacing, and text size
                  >
                    <Github className="w-6 h-6" /> {/* Increased icon size */}
                    <span>GitHub</span>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full py-7 text-lg flex items-center justify-center space-x-3 border-2 hover:bg-gray-50 dark:hover:bg-gray-800" // Increased padding, spacing, and text size
                  >
                    <FaGoogle className="w-6 h-6" /> {/* Increased icon size */}
                    <span>Google</span>
                  </Button>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center text-base text-gray-600 dark:text-gray-400 mt-6" // Increased text size and margin
              >
                Already have an account?{' '}
                <Link href="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  Login
                </Link>
              </motion.p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignUpPage;