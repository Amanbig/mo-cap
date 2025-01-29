"use client";

import React from "react";
import {Card} from "@/components/ui/card";
import { Button } from "../ui/button"; // Import ShadCN UI Button component
import Image from "next/image";

function MainEventCard() {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-black bg-white ">
      <Card className="bg-white p-8 w-full max-w-4xl rounded-xl shadow-lg flex flex-col items-center space-y-6">
        <Image
          src="/path-to-your-event-image.jpg" // Change this to your image path
          alt="Event"
          width={400}
          height={250}
          className="rounded-lg"
        />
        <h2 className="text-3xl font-semibold text-center text-black">
          Major Event Coming Soon!
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Join us for an exclusive event filled with exciting insights, workshops, and networking
          opportunities. Don’t miss out on this fantastic opportunity!
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
          Learn More
        </Button>
      </Card>
    </div>
  );
}

export default MainEventCard;
