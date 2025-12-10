"use client";

import { useRef, useState, useEffect } from "react";
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
    x: isMobile ? centerX : centerX + (e.isLeft ? -offsetX : offsetX),
    y: baseY + index * gapY,
  }));

  const totalHeight = points[points.length - 1].y + 200;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const activeIndex = useTransform(scrollYProgress, (progress) => {
    if (!progress || isNaN(progress)) return 0;
    const clamped = Math.max(0, Math.min(1, progress));
    const raw = clamped * (points.length - 1);
    return Math.round(raw);
  });

  const dotX = useTransform(activeIndex, (index) => {
    const safeIdx = Math.max(0, Math.min(points.length - 1, index || 0));
    return points[safeIdx].x;
  });

  const dotY = useTransform(activeIndex, (index) => {
    const safeIdx = Math.max(0, Math.min(points.length - 1, index || 0));
    return points[safeIdx].y;
  });

  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section
      ref={containerRef}
      className="w-full relative py-20 px-4 md:px-8 lg:px-16 text-white"
      style={{
        minHeight: totalHeight + 200,
        backgroundColor: "#0A0A0A",
        backgroundImage: "url('/timeline-bg.png')", // ←‼️ ԱՅՍ Է ՓՈԽՎԱԾ
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-left text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-8 sm:mb-12 text-white pl-2 sm:pl-4"
        style={{ fontFamily: "GHEA Grapalat, sans-serif" }}
      >
        Կարևոր Տարեթվեր
      </h2>

      <div
        className="relative mx-auto px-2 sm:px-0"
        style={{
          width: "100%",
          maxWidth: containerWidth,
          minHeight: totalHeight,
        }}
      >
        <svg
          width="100%"
          height={totalHeight}
          viewBox={`0 0 ${containerWidth} ${totalHeight}`}
          className="absolute top-0 left-0 pointer-events-none"
          style={{ overflow: "visible" }}
          preserveAspectRatio="xMidYMin meet"
        >
          {isMobile ? (
            <>
              <line
                x1={centerX}
                y1={baseY}
                x2={centerX}
                y2={points[points.length - 1].y}
                stroke="#ffffff"
                strokeWidth={1.5}
                strokeDasharray="8 6"
                strokeLinecap="round"
              />

              {points.map((p, idx) => (
                <circle key={idx} cx={p.x} cy={p.y} r={7} fill="#ffffff" />
              ))}
              <motion.circle r={9} fill="#D0051D" cx={dotX} cy={dotY} />
            </>
          ) : (
            <>
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
                <circle key={idx} cx={p.x} cy={p.y} r={8} fill="#ffffff" />
              ))}
              <motion.circle r={9} fill="#D0051D" cx={dotX} cy={dotY} />
            </>
          )}
        </svg>

        {events.map((event, index) => {
          const p = points[index];
          const textWidth = isMobile ? 220 : 300;
          const gapFromLine = isMobile ? 35 : 100;

          const leftPos = isMobile
            ? centerX + gapFromLine
            : event.isLeft
            ? centerX - gapFromLine - textWidth
            : centerX + gapFromLine;

          return (
            <div
              key={event.year}
              className="absolute text-[12px] md:text-[15px] leading-relaxed text-white"
              style={{
                top: p.y,
                left: `${leftPos}px`,
                width: `${textWidth}px`,
                transform: "translateY(-50%)",
                textAlign: isMobile ? "left" : event.isLeft ? "right" : "left",
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
