/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const triggers: ScrollTrigger[] = [];

    const imageTween = gsap.to(".image-wrapper", {
      y: "0%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
        pin: true,
      },
    });
    triggers.push(imageTween.scrollTrigger!);

    const textTween = gsap.fromTo(
      ".text-overlay",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      }
    );
    triggers.push(textTween.scrollTrigger!);

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section relative w-full h-screen overflow-hidden bg-black"
    >
      <img
        src="/78f9de612f3324c981f6006c873877ee99f09d95.png"
        alt="First background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="image-wrapper absolute top-0 left-0 w-full h-full overflow-hidden translate-y-full z-10">
        <img
          src="/2d51e824b87c3dd53aedb5de77f237598f2869a8.png"
          alt="Second background"
          className="w-full h-full object-cover"
        />

        <div className="text-overlay absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div
            className="
              px-4 py-3 sm:px-6 sm:py-4
              rounded-[8px] sm:rounded-[10px]
              max-w-[480px] sm:max-w-[540px]
              text-center leading-tight
            "
          >
            <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide">
              Պարզապես գնելու փոխարեն
            </p>
            <p className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold mt-1 tracking-[0.04em] uppercase">
              ՓՈԽԱՆԱԿԻՐ ԵՎ ԽՆԱՅԻՐ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
