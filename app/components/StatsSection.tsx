"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export const StatsSection = ({ stats }: StatsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // ✅ միայն մեկ անգամ
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-4xl mx-auto px-6 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stat-border rounded-xl overflow-hidden">
        {stats.map((stat, index) => {
          const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
          const suffix = stat.value.replace(/\d/g, "");

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 px-6
                ${index < stats.length - 1 ? "md:border-r border-stat-border" : ""}
                ${index < stats.length - 1 ? "border-b md:border-b-0 border-stat-border" : ""}
              `}
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {startCount ? (
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  0
                )}
                {suffix}
              </div>

              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
