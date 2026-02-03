"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEvent {
  year: number;
  text: string;
  isLeft: boolean;
}

const events: TimelineEvent[] = [
  { year: 2012, text: "հիմնադրվեց Motoshop Armenia", isLeft: false },
  { year: 2013, text: "բացվեց առաջին խանութը", isLeft: true },
  { year: 2016, text: "բացվեց նոր խանութ", isLeft: false },
  { year: 2018, text: "գրանցվեցին աննախադեպ վաճառքներ", isLeft: true },
  { year: 2020, text: "ստեղծվեց HAYASA բրենդը", isLeft: false },
  { year: 2021, text: "մեկնարկեց առցանց խանութը", isLeft: true },
  { year: 2022, text: "հաճախորդների թիվը անցավ 1000-ը", isLeft: false },
  { year: 2023, text: "ավելացվեց միջազգային բրենդների նոր շարք", isLeft: true },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===== FIXED CANVAS ===== */
  const containerWidth = 1440;
  const totalHeight = 700;

  /* ===== VISUAL TUNING (NO LOGIC CHANGE) ===== */
  const centerX = containerWidth / 2;
  const offsetX = 48;

  const baseY = 75;
  const gapY = 78;

  const points = events.map((e, index) => ({
    x: centerX + (e.isLeft ? -offsetX : offsetX),
    y: baseY + index * gapY,
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const activeIndex = useTransform(scrollYProgress, (progress) => {
    const clamped = Math.max(0, Math.min(1, progress || 0));
    return Math.round(clamped * (points.length - 1));
  });

  const dotX = useTransform(activeIndex, (i) => points[i]?.x ?? points[0].x);
  const dotY = useTransform(activeIndex, (i) => points[i]?.y ?? points[0].y);

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section
      ref={containerRef}
      className="w-full relative text-white"
      style={{
        height: 700,
        backgroundColor: "#0A0A0A",
        backgroundImage: "url('/timeline-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
          className="text-[32px] font-bold px-16 pt-14 mb-2"
          style={{ fontFamily: "GHEA Grapalat, sans-serif", marginLeft: 130 }}
      >
          Կարևոր Տարեթվեր
      </h2>

      <div
        className="relative mx-auto"
        style={{
          width: containerWidth,
          height: totalHeight,
          top: -70,
        }}
      >
        <svg
          width="100%"
          height={totalHeight}
          viewBox={`0 0 ${containerWidth} ${totalHeight}`}
          className="absolute top-0 left-0 pointer-events-none"
        >
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            strokeDasharray="26 20"
          />

          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={8} fill="#fff" />
          ))}

          <motion.circle r={9} fill="#D0051D" cx={dotX} cy={dotY} />
        </svg>

        {events.map((event, index) => {
          const p = points[index];
          const textWidth = 380;
          const gap = 65;

          const left = event.isLeft
            ? centerX - gap - textWidth
            : centerX + gap;

          return (
            <div
              key={event.year}
              className="absolute text-[18px] leading-snug"
              style={{
                top: p.y,
                left,
                width: textWidth,
                transform: "translateY(-50%)",
                textAlign: event.isLeft ? "right" : "left",
                fontFamily: "GHEA Grapalat, sans-serif",
              }}
            >
              <strong>{event.year}</strong> — {event.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
