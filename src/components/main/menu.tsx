"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./themeToggle";
import { Menu, X } from "lucide-react";

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Process", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center w-full p-4 md:p-6 dark:bg-black dark:text-white text-black md:px-10">
        <h2 className="text-2xl font-bold px-4">MoCap</h2>
        
        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "64px" }} // Height of the header
        >
          <div className="flex flex-col h-full">
            <ul className="flex-1 flex flex-col items-center pt-8 space-y-6">
              {menuItems.map((item) => (
                <li key={item.label} className="w-full px-8">
                  <Button
                    variant="ghost"
                    className="w-full text-lg justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="p-8 flex flex-col items-center space-y-4 border-t dark:border-gray-800">
              <Button 
                variant="default"
                className="w-full rounded-full dark:border-white border-black border-2"
              >
                Login
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Button variant="link" className="hover:text-gray-400">
                {item.label}
              </Button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <Button 
            variant="default" 
            className="rounded-full dark:border-white border-black border-2"
          >
            Login
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;