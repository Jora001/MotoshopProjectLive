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
  { year: 2022, text: "հաճախորդների թիվը անցավ 1000-ը", isLeft: false },
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
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
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
    x: isMobile ? centerX : centerX + (e.isLeft ? -offsetX : offsetX),
    y: baseY + index * gapY,
  }));

  const totalHeight = points[points.length - 1].y + 200;

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
        className="text-left text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-12"
        style={{ fontFamily: "GHEA Grapalat, sans-serif" }}
      >
        Կարևոր Տարեթվեր
      </h2>

      <div
        className="relative mx-auto"
        style={{
          maxWidth: containerWidth,
          minHeight: totalHeight,
        }}
      >
        <svg
          width="100%"
          height={totalHeight}
          viewBox={`0 0 ${containerWidth} ${totalHeight}`}
          className="absolute top-0 left-0 pointer-events-none"
        >
          {isMobile ? (
            <>
              <line
                x1={centerX}
                y1={baseY}
                x2={centerX}
                y2={points.at(-1)?.y}
                stroke="#fff"
                strokeWidth={1.5}
                strokeDasharray="8 6"
              />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={7} fill="#fff" />
              ))}
              <motion.circle r={9} fill="#D0051D" cx={dotX} cy={dotY} />
            </>
          ) : (
            <>
              <polyline
                points={polylinePoints}
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeDasharray="8 6"
              />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={8} fill="#fff" />
              ))}
              <motion.circle r={9} fill="#D0051D" cx={dotX} cy={dotY} />
            </>
          )}
        </svg>

        {events.map((event, index) => {
          const p = points[index];
          const textWidth = isMobile ? 220 : 300;
          const gap = isMobile ? 35 : 100;

          const left = isMobile
            ? centerX + gap
            : event.isLeft
            ? centerX - gap - textWidth
            : centerX + gap;

          return (
            <div
              key={event.year}
              className="absolute text-[13px] md:text-[15px]"
              style={{
                top: p.y,
                left,
                width: textWidth,
                transform: "translateY(-50%)",
                textAlign: isMobile ? "left" : event.isLeft ? "right" : "left",
              }}
            >
              <strong>{event.year} — </strong>
              {event.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
