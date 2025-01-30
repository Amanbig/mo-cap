"use client";

import React from "react";
import { Button } from "../ui/button"; 
import { ModeToggle } from "./themeToggle";

function MenuBar() {
  return (
    <div className="flex justify-between items-center w-full p-6 dark:bg-black dark:text-white text-black px-10">
      <h2 className="text-2xl font-bold px-4">MoCap</h2>
      <ul className="flex text-lg">
        <li>
          <Button variant="link" className=" hover:text-gray-400">
            Home
          </Button>
        </li>
        <li>
          <Button variant="link" className=" hover:text-gray-400">
            About
          </Button>
        </li>
        <li>
          <Button variant="link" className=" hover:text-gray-400">
            Case Studies
          </Button>
        </li>
        <li>
          <Button variant="link" className=" hover:text-gray-400">
            Process
          </Button>
        </li>
        <li>
          <Button variant="link" className=" hover:text-gray-400">
            Contact
          </Button>
        </li>
      </ul>
      <div className="flex flex-row justify-center items-center gap-4">
      <Button 
        variant="default" 
        className="rounded-full dark:border-white border-black border-2"
      >
        Contact Us
      </Button>
      <ModeToggle/>
      </div>
    </div>
  );
}

export default MenuBar;
