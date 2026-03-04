"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useWishlist } from "@/app/context/WishlistContext";

type Badge = "available" | "new" | "sale";

type Card = {
  id: number;
  model: string;
  price: string;
  img: string;
  badges: Badge[];
};

const cards: Card[] = [
  { id: 11, model: "Ninja ZX-10RR", price: "11 722 000", img: "/sec2f1.jpg", badges: ["available"] },
  { id: 12, model: "Forma Ice Pro", price: "123 700", img: "/sec2f4.jpg", badges: ["new", "available"] },
  { id: 13, model: "EMERZE EM5 Armor", price: "55 000", img: "/sec2f2.jpg", badges: ["available"] },
  { id: 14, model: "Vmoto TC Wanderer", price: "1 786 000", img: "/sec2f5.jpg", badges: ["sale", "available"] },
  { id: 15, model: "CPX Explorer", price: "2 770 000", img: "/sec2f3.jpg", badges: ["available"] },
  { id: 16, model: "BILT Apex Helmet", price: "76 000", img: "/heml.jpg", badges: ["new", "available"] },
];

const badgeConfig: Record<Badge, { text: string; className: string }> = {
  available: { text: "Առկա է", className: "bg-[#F5F5F5] text-[#2E7D32]" },
  new: { text: "Նորույթ", className: "bg-[#2E7D32] text-white" },
  sale: { text: "Ակցիա 15%", className: "bg-[#D0021B] text-white" },
};

const Section3 = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { toggleWishlist, isInWishlist } = useWishlist();

  const CARD_WIDTH = 386;
  const INTERVAL = 3000;
  const visibleSlides = 3;
  const totalSlides = cards.length - visibleSlides + 1;

  // ✅ Auto slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // ✅ Scroll when index changes
  useEffect(() => {
    scrollRef.current?.scrollTo({
      left: activeIndex * CARD_WIDTH,
      behavior: "smooth",
    });
  }, [activeIndex]);

  // ✅ Start interval once
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const scrollToIndex = (index: number) => {
    stopAutoSlide();
    setActiveIndex(index);

    setTimeout(() => {
      startAutoSlide();
    }, INTERVAL);
  };

  return (
    <section className="w-full bg-black">
      
      {/* TITLE */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[96px] pt-[60px] pb-[20px] border-b border-[#2E2E2E]">
        <h2 className="text-white font-bold text-[32px] md:text-[48px]">
          Թոփ վաճառքները
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[96px] mt-10 mb-10">

        <div
          ref={scrollRef}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          className="flex gap-[36px] overflow-hidden scroll-smooth"
        >
          {cards.map((card) => {
            const liked = isInWishlist(card.id);

            return (
              <div
                key={card.id}
                className="flex-shrink-0 w-[350px] bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                
                {/* IMAGE */}
                <div className="relative w-[350px] h-[250px] bg-white">
                  
                  <div className="absolute top-[45px] left-0 flex flex-col gap-[6px] z-10">
                    {card.badges.map((badge) => (
                      <div
                        key={badge}
                        className={`min-w-[80px] h-[22px] px-[10px] text-[12px] font-semibold flex items-center justify-center rounded-[1px] ${badgeConfig[badge].className}`}
                      >
                        {badgeConfig[badge].text}
                      </div>
                    ))}
                  </div>

                  <Image
                    src={card.img}
                    alt={card.model}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-3">
                  
                  <div className="flex items-end justify-between">
                    <h3 className="text-black font-semibold text-[16px]">
                      {card.model}
                    </h3>

                    <span className="text-[16px] text-black">
                      {card.price} ֏
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    
                    <button className="px-4 py-2 rounded-[8px] bg-white border border-[#FFB300] text-[#FFB300] text-[14px] font-medium hover:bg-[#FFB300] hover:text-white transition">
                      Տեսնել ավել
                    </button>

                    {/* WISHLIST */}
                    <button
                      onClick={() =>
                        toggleWishlist({
                          id: card.id,
                          model: card.model,
                          price: card.price,
                          img: card.img,
                          category: "motorcycles",
                        })
                      }
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        liked ? "bg-[#D0021B]" : "bg-white"
                      }`}
                    >
                      <Image
                        src="/lov.jpg"
                        alt="Favorite"
                        width={16}
                        height={16}
                        className={liked ? "invert brightness-0" : ""}
                      />
                    </button>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-6 h-3 bg-white"
                  : "w-3 h-3 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;