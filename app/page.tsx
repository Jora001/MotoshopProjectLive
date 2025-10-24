"use client";

import dynamic from "next/dynamic";
import Section2 from "./components/Section/Section2/Section2";
import Section3 from "./components/Section/Section3/Section3";
// import Section5 from "./components/Section5";
import Section4 from "./components/Section/Section4/Section4";
import Section5 from "./components/Section/Section5/Section5";
import Section6 from "./components/Section/Section6/Section6";
import Section7 from "./components/Section/Section7/Section7";
// HeroSection is client-only to avoid hydration errors
const HeroSection = dynamic(() => import("./components/Section/HeroSection/HeroSection"), { ssr: false });

export default function Page() {
  return (
    <div className="w-full overflow-hidden top-80px">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/>
      <Section7/>    
    </div>
  );
}
