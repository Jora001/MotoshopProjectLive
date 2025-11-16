"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Section6 = () => {
  const cards = [
    { id: 1, title: "Card 1", img: "/wow.png" },
    { id: 2, title: "Card 2", img: "/wow3.png" },
    { id: 3, title: "Card 3", img: "/jug.png" },
    { id: 4, title: "Card 4", img: "/jugs.jpg" },
    { id: 5, title: "Card 5", img: "/wow2.png" },
    { id: 6, title: "Card 6", img: "/wow4.png" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.firstElementChild
      ? (scrollContainer.firstElementChild as HTMLElement).offsetWidth + 36
      : 300;

    const interval = setInterval(() => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center bg-black overflow-hidden">
      {/* Վաճառքների վերնագիր */}
      <div className="w-full max-w-[1440px] flex items-end border-b border-[#2E2E2E] px-6 md:px-[96px] pt-[60px] pb-[20px] mt-8">
        <h2 className="text-white font-bold text-[32px] md:text-[48px] leading-[58px] font-[GHEA Grapalat]">
          Թոփ վաճառքները
        </h2>
      </div>

      {/* Քարտերի հատված */}
      <div className="w-full max-w-[1440px] relative px-6 md:px-[96px] mt-10 mb-16">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-[36px] overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide pb-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px]
                         bg-white rounded-[8px] flex flex-col items-center overflow-hidden
                         transition-transform duration-300 hover:scale-105 snap-start"
            >
              <div className="relative w-full h-[200px] md:h-[254px]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-[8px]"
                />
              </div>
              <h3 className="text-black font-medium text-[16px] md:text-[18px] mt-4 text-center px-2">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
