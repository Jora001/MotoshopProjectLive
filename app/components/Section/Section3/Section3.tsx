/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Section3 = () => {
  const cards = [
    { id: 1, title: "Card 1", img: "/wow.png" },
    { id: 2, title: "Card 2", img: "/wow3.png" },
    { id: 3, title: "Card 3", img: "/jug.png" },
    { id: 4, title: "Card 4", img: "/jugs.jpg" },
    { id: 5, title: "Card 5", img: "/wow2.png" },
    { id: 6, title: "Card 6", img: "/wow4.png" },

    // կրկնվող քարտեր (loop-ի համար)
    { id: 7, title: "Card 5", img: "/wow2.png" },
    { id: 8, title: "Card 6", img: "/wow4.png" },
  ];

  const REAL_CARDS_COUNT = 6;

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardWidthRef = useRef<number>(300);

  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- Auto scroll ---------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement;
    if (firstCard) {
      cardWidthRef.current = firstCard.offsetWidth + 36;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;

        container.scrollTo({
          left: next * cardWidthRef.current,
          behavior: "smooth",
        });

        // 🔑 pagination-ի համար վերադարձնում ենք 0–5 միջակայք
        return next % REAL_CARDS_COUNT;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /* ---------- Pagination click ---------- */
  const goToCard = (index: number) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: index * cardWidthRef.current,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-black overflow-hidden">
      {/* ===== Top image ===== */}
      <div className="relative w-full h-[539px]">
        <Image
          src="/cro.png"
          alt="Main Section Image"
          fill
          className="object-cover"
          priority
        />

        <div
          className="absolute top-0 right-0 flex flex-col items-center justify-center gap-6 px-6 md:px-[96px] text-center"
          style={{
            width: "100%",
            maxWidth: "720px",
            height: "100%",
            background:
              "linear-gradient(269.79deg, rgba(10,10,10,0.8) 0.16%, rgba(10,10,10,0.1) 99.8%)",
          }}
        >
          <h3 className="text-white font-bold text-[24px] md:text-[30px]">
            Միայն մեկ քայլ է բաժանում Ձեզ Ձեր գնումից
          </h3>

          <p className="text-white text-[16px] max-w-[400px]">
            Ստուգեք ապառիկի պայմանները և պարզեք բանկի հաստատումը՝ ընդամենը մի քանի
            վայրկյանում
          </p>

          <button className="rounded-[12px] w-[320px] h-[44px] bg-white text-[#D0021B]">
            Ստուգել իմ համապատասխանությունը
          </button>
        </div>
      </div>

      {/* ===== Title ===== */}
      <div className="w-full max-w-[1440px] border-b border-[#2E2E2E] px-6 md:px-[96px] pt-16 pb-6">
        <h2 className="text-white text-[48px] font-bold">
          Թոփ վաճառքները
        </h2>
      </div>

      {/* ===== Cards + Pagination ===== */}
      <div className="w-full max-w-[1440px] px-6 md:px-[96px] mt-10 mb-16">
        {/* Cards */}
        <div
          ref={scrollRef}
          className="
            flex gap-[36px]
            overflow-x-auto scroll-smooth snap-x snap-mandatory
            [&::-webkit-scrollbar]:hidden
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                flex-shrink-0 w-[300px] lg:w-[350px]
                bg-white rounded-[8px] snap-start
                transition-transform hover:scale-105
              "
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-[8px]"
                />
              </div>

              <h3 className="text-black text-center mt-4 mb-4">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* ===== Pagination ===== */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: REAL_CARDS_COUNT }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToCard(index)}
              className={`
                h-[8px] rounded-full cursor-pointer transition-all
                ${
                  activeIndex === index
                    ? "w-[32px] bg-white"
                    : "w-[8px] bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
