"use client";

import { useEffect, useState, useRef } from "react";

interface TimelineEvent {
  year: number;
  text: string;
  isLeft: boolean;
}

const allEvents: TimelineEvent[] = [
  { year: 2012, text: "Motoshop Armenia was founded", isLeft: false },
  { year: 2013, text: "The first store was opened", isLeft: true },
  { year: 2016, text: "A new store was launched", isLeft: false },
  { year: 2018, text: "Recorded the highest sales", isLeft: true },
  { year: 2020, text: "The HAYASA brand was created", isLeft: false },
  { year: 2021, text: "The online store was launched", isLeft: true },
  { year: 2022, text: "The number of customers exceeded 1000", isLeft: false },
  { year: 2023, text: "A new range of international brands was added", isLeft: true },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
<<<<<<< HEAD

  const spacing = 70;
=======
  const spacing = 120;
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
<<<<<<< HEAD
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetTop = scrollY + rect.top;

=======
      const offsetTop = window.scrollY + rect.top;
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
      const relativeScroll = window.scrollY + window.innerHeight / 2 - offsetTop;

      let closestIndex = 0;
      let minDist = Infinity;

      allEvents.forEach((_, idx) => {
<<<<<<< HEAD
        const yPos = idx * spacing + 75;
=======
        const yPos = idx * spacing + 50;
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
        const dist = Math.abs(yPos - relativeScroll);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
<<<<<<< HEAD

=======
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
<<<<<<< HEAD
      className="w-full py-20 px-6 bg-black relative"
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "white",
        minHeight: `${allEvents.length * spacing + 150}px`,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 15px,
          rgba(30,30,30,0.3) 15px,
          rgba(30,30,30,0.3) 30px
        )`,
      }}
      ref={containerRef}
    >
      <h2 className="text-3xl font-bold mb-12 pl-4">Key Dates</h2>

      <div className="max-w-4xl mx-auto relative">
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2"
          width={200}
          height={allEvents.length * spacing + 150}
          style={{ overflow: "visible" }}
        >
          {allEvents.map((_, idx) => {
            if (idx === allEvents.length - 1) return null;

            const yStart = idx * spacing + 75 + 10;
            const yEnd = (idx + 1) * spacing + 75 + 10;

            const xStart = 0;

            const xMid = idx % 2 === 0 ? -120 : 120;
            const xEnd = 0;

            return (
              <path
                key={idx}
                d={`M${xStart} ${yStart} Q${xMid} ${(yStart + yEnd) / 2} ${xEnd} ${yEnd}`}
                stroke="white"
                strokeWidth={2}
                fill="none"
                strokeDasharray="5 3"
                opacity={0.7}
              />
            );
          })}
        </svg>

        {allEvents.map((event, idx) => {
          const topPos = idx * spacing + 75;
=======
      ref={containerRef}
      className="relative w-full py-20 px-4 md:px-6 bg-black text-white"
      style={{ minHeight: `${allEvents.length * spacing + 100}px` }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Key Dates</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline events */}
        {allEvents.map((event, idx) => {
          const topPos = idx * spacing + 50;
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5

          return (
            <div
              key={event.year}
<<<<<<< HEAD
              className="absolute flex items-center w-full"
              style={{ top: topPos }}
            >
              {event.isLeft && (
                <div className="flex items-center ml-0 mr-auto" style={{ gap: "8px" }}>
                  <span className="font-semibold text-right" style={{ maxWidth: 320 }}>
                    <strong>{event.year} — </strong>
                    {event.text}
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 border-white flex-shrink-0 relative flex items-center justify-center">
=======
              className="absolute w-full flex items-center"
              style={{ top: topPos }}
            >
              {/* Left side */}
              {event.isLeft && (
                <div className="flex items-center ml-0 mr-auto gap-4 relative">
                  <span className="font-semibold text-right max-w-[280px] md:max-w-[320px] z-10">
                    <strong>{event.year} — </strong>
                    {event.text}
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
                    {activeIndex === idx && (
                      <div className="w-3 h-3 bg-red-600 rounded-full transition-all duration-300" />
                    )}
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {!event.isLeft && (
                <div className="flex items-center ml-auto" style={{ gap: "8px" }}>
                  <div className="w-5 h-5 rounded-full border-2 border-white flex-shrink-0 relative flex items-center justify-center">
=======
              {/* Right side */}
              {!event.isLeft && (
                <div className="flex items-center ml-auto gap-4 relative">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
                    {activeIndex === idx && (
                      <div className="w-3 h-3 bg-red-600 rounded-full transition-all duration-300" />
                    )}
                  </div>
<<<<<<< HEAD
                  <span className="font-semibold text-left" style={{ maxWidth: 320 }}>
=======
                  <span className="font-semibold text-left max-w-[280px] md:max-w-[320px] z-10">
>>>>>>> a30ed184e4b6257d1e63696468cda156ebe142e5
                    <strong>{event.year} — </strong>
                    {event.text}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
