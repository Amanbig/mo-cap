"use client";

import React from "react";
import { Button } from "../ui/button"; // Import ShadCN UI Button component
import { Loader2 } from "lucide-react"; // Import Loader2 icon from Lucide (for the loading spinner)

function Reloader() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center space-x-2">
          <Loader2 className="animate-spin h-10 w-10 text-gray-400" /> {/* Loading spinner */}
          <span className="text-lg">Loading...</span>
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Refresh Page
        </Button>
      </div>
    </div>
  );
}

export default Reloader;
