"use client";

import dynamic from "next/dynamic";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
// import Section5 from "./components/Section5";
// import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
// HeroSection is client-only to avoid hydration errors
const HeroSection = dynamic(() => import("./components/HeroSection"), { ssr: false });

export default function Page() {
  return (
    <div className="w-full overflow-hidden top-80px">
      <HeroSection />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      <Section5/>
      <Section6/>
      <Section7/>    
    </div>
  );
}
