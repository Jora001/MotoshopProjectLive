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
  const spacing = 120;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top;
      const relativeScroll = window.scrollY + window.innerHeight / 2 - offsetTop;

      let closestIndex = 0;
      let minDist = Infinity;

      allEvents.forEach((_, idx) => {
        const yPos = idx * spacing + 50;
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 px-4 md:px-6 bg-black text-white"
      style={{ minHeight: `${allEvents.length * spacing + 100}px` }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Key Dates</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline events */}
        {allEvents.map((event, idx) => {
          const topPos = idx * spacing + 50;

          return (
            <div
              key={event.year}
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
                    {activeIndex === idx && (
                      <div className="w-3 h-3 bg-red-600 rounded-full transition-all duration-300" />
                    )}
                  </div>
                </div>
              )}

              {/* Right side */}
              {!event.isLeft && (
                <div className="flex items-center ml-auto gap-4 relative">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    {activeIndex === idx && (
                      <div className="w-3 h-3 bg-red-600 rounded-full transition-all duration-300" />
                    )}
                  </div>
                  <span className="font-semibold text-left max-w-[280px] md:max-w-[320px] z-10">
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
