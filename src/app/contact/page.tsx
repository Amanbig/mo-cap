"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Mail, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        <motion.div
          className="relative text-center text-white max-w-4xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                content: "+1 (123) 456-7890",
                color: "bg-blue-500",
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                content: "hello@mocap.com",
                color: "bg-purple-500",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                content: "123 Innovation Drive, Tech City, TC 12345",
                color: "bg-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-white`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'subject', label: 'Subject', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label 
                  htmlFor={field.name}
                  className="block text-sm font-medium mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors[field.name as keyof typeof errors]
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors[field.name as keyof typeof errors] && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message
                    ? 'border-red-500 dark:border-red-400'
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-colors`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;