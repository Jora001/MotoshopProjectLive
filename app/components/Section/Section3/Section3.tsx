"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

type Badge = "available" | "new" | "sale";

type Card = {
  id: number;
  model: string;
  price: string;
  img: string;
  badges: Badge[];
};

const cards: Card[] = [
  { id: 1, model: "Ninja ZX-10RR", price: "11 722 000", img: "/sec2f1.jpg", badges: ["available"] },
  { id: 2, model: "Forma Ice Pro", price: "123 700", img: "/sec2f4.jpg", badges: ["new", "available"] },
  { id: 3, model: "EMERZE EM5 Armor", price: "55 000", img: "/sec2f2.jpg", badges: ["available"] },
  { id: 4, model: "Vmoto TC Wanderer", price: "1 786 000", img: "/sec2f5.jpg", badges: ["sale", "available"] },
  { id: 5, model: "CPX Explorer", price: "2 770 000", img: "/sec2f3.jpg", badges: ["available"] },
  { id: 6, model: "BILT Apex Helmet", price: "76 000", img: "/heml.jpg", badges: ["new", "available"] },
];

const badgeConfig: Record<Badge, { text: string; className: string }> = {
  available: { text: "Առկա է", className: "bg-[#F5F5F5] text-[#2E7D32]" },
  new: { text: "Նորույթ", className: "bg-[#2E7D32] text-white" },
  sale: { text: "Ակցիա 15%", className: "bg-[#D0021B] text-white" },
};

const Section3 = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const SPEED = 0.45;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;

    const animate = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += SPEED;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="w-full bg-black">
      {/* TITLE */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[96px] pt-[60px] pb-[20px] border-b border-[#2E2E2E]">
        <h2 className="text-white font-bold text-[32px] md:text-[48px] font-[GHEA Grapalat]">
          Թոփ վաճառքները
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[96px] mt-10 mb-16">
        <div ref={scrollRef} className="flex gap-[36px] overflow-hidden select-none">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              onMouseEnter={() => (isPausedRef.current = true)}
              onMouseLeave={() => (isPausedRef.current = false)}
              className="flex-shrink-0 w-[350px] bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* IMAGE */}
              <div className="relative w-[350px] h-[250px] bg-white">
                <div className="absolute top-[45px] flex flex-col gap-[6px] z-10">
                  {card.badges.map((badge) => (
                    <div
                      key={badge}
                      className={`
                        min-w-[80px] h-[22px]
                        px-[10px] py-[2px]
                        text-[12px] font-semibold
                        flex items-center justify-center
                        whitespace-nowrap
                        rounded-[1px]
                        ${badgeConfig[badge].className}
                      `}
                    >
                      {badgeConfig[badge].text}
                    </div>
                  ))}
                </div>

                <Image src={card.img} alt={card.model} fill className="object-contain p-4" />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-end justify-between">
                  <h3 className="text-black font-semibold text-[16px]">{card.model}</h3>
                  <span className="font-['Roboto'] text-[16px] leading-[24px] text-[#0c0607]">
                    {card.price} ֏
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <button className="px-4 py-2 rounded-[8px] bg-white border border-[#FFB300] text-[#FFB300] text-[14px] font-medium hover:bg-[#FFB300] hover:text-white transition">
                    Տեսնել ավել
                  </button>

                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Image src="/lov.jpg" alt="Favorite" width={16} height={16} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Image src="/smg.jpg" alt="Compare" width={16} height={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
