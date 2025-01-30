"use client";

import React from "react";
import { Button } from "../ui/button"; // Import ShadCN UI Button component

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      {/* Add border on top of the footer */}
      <div className="border-t border-gray-700 pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              MoCap is a leading company in the motion capture industry, providing
              innovative solutions for animators and game developers.
            </p>
            <Button variant="link" className="text-white hover:text-gray-400">
              Learn More
            </Button>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Button variant="link" className="text-white hover:text-gray-400">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white hover:text-gray-400">
                  About
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white hover:text-gray-400">
                  Case Studies
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white hover:text-gray-400">
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2 text-gray-400">Email: info@mocap.com</li>
              <li className="mb-2 text-gray-400">Phone: +123 456 789</li>
              <li>
                <Button variant="link" className="text-white hover:text-gray-400">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; 2025 MoCap. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
