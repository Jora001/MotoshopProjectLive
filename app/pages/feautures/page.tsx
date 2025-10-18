import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/first.jpg"
        alt="Hero"
        fill
        priority   // loads faster
        className="object-cover"
      />
    </div>
  );
};

export default Features;
