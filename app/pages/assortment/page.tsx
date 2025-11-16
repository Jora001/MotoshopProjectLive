"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main className="w-full min-h-screen relative">
      <section className="relative w-full h-screen">
        <Image
          src="/pimg.png" 
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-10 text-left">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
Տեսականի          </h1>
          
        </div>
      </section>
    </main>
  );
};

export default Page;
