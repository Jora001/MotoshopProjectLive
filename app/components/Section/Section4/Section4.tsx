"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    gsap.to(".image-second", {
      y: "0%",
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "50% top",
        scrub: true,
        pin: true,
      },
    });

    gsap.to(".content-second", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="scroll-section relative w-full h-screen overflow-hidden bg-black">
      <div className="relative w-full h-full">
        <img
          src="/78f9de612f3324c981f6006c873877ee99f09d95.png"
          alt="First background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <img
          src="/2d51e824b87c3dd53aedb5de77f237598f2869a8.png"
          alt="Second background"
          className="image-second absolute top-0 left-0 w-full h-full object-cover translate-y-full z-20"
        />

        {/* <div className="content-second absolute w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 text-center text-white top-2/3 left-1/2 -translate-x-1/2 opacity-0 translate-y-12 z-30 transition-all duration-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Our Section
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            This is an engaging section with GSAP scroll animations, fully responsive.
          </p>
          <button className="px-6 py-3 text-black bg-[#61ffc9] rounded-lg font-semibold hover:bg-[#4bd5b1] transition-colors">
            Click Me
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Section4;
