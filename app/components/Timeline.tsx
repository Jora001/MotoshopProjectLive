"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEvent {
  year: number;
  text: string;
  isLeft: boolean;
}

const events: TimelineEvent[] = [
  { year: 2012, text: "Հիմնադրվեց Motoshop Armenia", isLeft: false },
  { year: 2013, text: "բացվեց առաջին խանութը", isLeft: true },
  { year: 2016, text: "բացվեց նոր խանութ", isLeft: false },
  { year: 2018, text: "գրանցվեցին աննախադեպ վաճառքներ", isLeft: true },
  { year: 2020, text: "ստեղծվեց HAYASA բրենդը", isLeft: false },
  { year: 2021, text: "մեկնարկեց առցանց խանութը", isLeft: true },
  { year: 2022, text: "հաճախորդների թիվը անցավ 1000‑ը", isLeft: false },
  {
    year: 2023,
    text: "ավելացվեց միջազգային բրենդների նոր շարք",
    isLeft: true,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerWidth = isMobile ? 380 : 900;

  const centerX = isMobile ? 40 : containerWidth / 2;
  const offsetX = isMobile ? 0 : 80;

  const baseY = isMobile ? 100 : 120;
  const gapY = isMobile ? 110 : 140;

  const points = events.map((e, index) => ({
    x: centerX + (e.isLeft ? -offsetX : offsetX),
    y: baseY + index * gapY,
  }));

  const totalHeight = points[points.length - 1].y + 200;

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Active index based on scroll - step by step movement
  const activeIndex = useTransform(scrollYProgress, (progress) => {
    if (!progress || isNaN(progress)) return 0;
    const clamped = Math.max(0, Math.min(1, progress));
    const raw = clamped * (points.length - 1);
    return Math.round(raw);
  });

  // Red dot position - directly from active index
  const dotX = useTransform(activeIndex, (idx) => {
    const safeIdx = Math.max(0, Math.min(points.length - 1, idx || 0));
    return points[safeIdx].x;
  });
  
  const dotY = useTransform(activeIndex, (idx) => {
    const safeIdx = Math.max(0, Math.min(points.length - 1, idx || 0));
    return points[safeIdx].y;
  });

  // Zig-zag path
  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section
      ref={containerRef}
      className="w-full relative py-20 px-4 md:px-8 lg:px-16 text-white"
      style={{
        minHeight: totalHeight + 200,
        backgroundColor: "#0A0A0A",
        backgroundImage: "url('/timeline-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-left text-[28px] md:text-[32px] font-bold mb-12 text-white pl-4"
        style={{ fontFamily: "GHEA Grapalat, sans-serif" }}
      >
        Կարևոր Տարեթվեր
      </h2>

      <div
        className="relative mx-auto"
        style={{ width: containerWidth, minHeight: totalHeight }}
      >
        <svg
          width={containerWidth}
          height={totalHeight}
          className="absolute top-0 left-0 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#ffffff"
            strokeWidth={2}
            strokeDasharray="8 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((p, idx) => (
            <circle
              key={idx}
              cx={p.x}
              cy={p.y}
              r={8}
              fill="#ffffff"
              stroke="none"
            />
          ))}

          <motion.circle
            r={9}
            fill="#D0051D"
            stroke="none"
            style={{
              cx: dotX,
              cy: dotY,
            } as React.CSSProperties & { cx: typeof dotX; cy: typeof dotY }}
          />
        </svg>

        {events.map((event, index) => {
          const p = points[index];
          const isLeft = event.isLeft;
          const textWidth = 300;
          const gapFromLine = 100;

          const leftPos = isLeft
            ? centerX - gapFromLine - textWidth
            : centerX + gapFromLine;

          return (
            <div
              key={event.year}
              className="absolute text-[13px] md:text-[15px] leading-relaxed"
              style={{
                top: p.y,
                left: leftPos,
                width: textWidth,
                transform: "translateY(-50%)",
                textAlign: isLeft ? "right" : "left",
              }}
            >
              <span className="font-bold">{event.year} — </span>
              <span>{event.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
