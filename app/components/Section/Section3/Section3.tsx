"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Section3 = () => {
  const cards = [
    { id: 1, title: "Card 1", img: "/wow.png" },
    { id: 2, title: "Card 2", img: "/wow3.png" },
    { id: 3, title: "Card 3", img: "/jug.png" },
    { id: 4, title: "Card 4", img: "/jugs.jpg" },
    { id: 5, title: "Card 5", img: "/wow2.png" },
    { id: 6, title: "Card 6", img: "/wow4.png" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-black overflow-hidden">
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
              "linear-gradient(269.79deg, rgba(10, 10, 10, 0.8) 0.16%, rgba(10, 10, 10, 0.1) 99.8%)",
          }}
        >
          <h3 className="text-white font-bold text-[24px] md:text-[30px] leading-[40px] font-[GHEA Grapalat] max-w-[510px]">
            Միայն մեկ քայլ է բաժանում Ձեզ Ձեր գնումից
          </h3>

          <p className="text-white font-medium text-[15px] md:text-[16px] leading-[24px] font-[Noto Sans Armenian] max-w-[398px]">
            Ստուգեք ապառիկի պայմանները և պարզեք բանկի հաստատումը՝ ընդամենը մի քանի վայրկյանում
          </p>

          <button className="rounded-[12px] w-[280px] md:w-[350px] h-[44px] bg-white text-[#D0021B] font-medium text-[16px] leading-[20px] hover:bg-[#f5f5f5] transition">
            Ստուգել իմ համապատասխանությունը
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1440px] flex items-end border-b border-[#2E2E2E] px-6 md:px-[96px] pt-[60px] pb-[20px] mt-8">
        <h2 className="text-white font-bold text-[32px] md:text-[48px] leading-[58px] font-[GHEA Grapalat]">
          Թոփ վաճառքները
        </h2>
      </div>

      <div className="w-full max-w-[1440px] relative px-6 md:px-[96px] mt-10 mb-16">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-[36px] overflow-x-hidden scroll-smooth"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[350px] bg-white rounded-[8px] flex flex-col items-center overflow-hidden transition-transform duration-300 hover:scale-105"
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

        <div className="absolute top-1/2 -translate-y-1/2 right-0 flex gap-2">
          <button
            onClick={scrollPrev}
            className="bg-white text-black px-3 py-2 rounded shadow hover:bg-gray-200 transition"
          >
            ◀
          </button>
          <button
            onClick={scrollNext}
            className="bg-white text-black px-3 py-2 rounded shadow hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
