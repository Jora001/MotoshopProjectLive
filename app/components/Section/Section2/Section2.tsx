"use client";

import React, { useState } from "react";
import Image from "next/image";

const Section2 = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const cardsData = [
    { id: 1, title: "Մոտոցիկլեր", src: "/desk1.png" },
    { id: 2, title: "Աքսեսուադրներ", src: "/desk2.png" },
    { id: 3, title: "Պահեստամասեր", src: "/desk3.png" },
    { id: 4, title: "Մանկական", src: "/desk4.png" },
  ];

  const smallCards = [
    { id: 1, title: "Քրուիզերներ" },
    { id: 2, title: "Սպորտային մոտոցիկլներ" },
    { id: 3, title: "Էնդուրո" },
    { id: 4, title: "Սկուտերներ" },
    { id: 5, title: "Goggles" },
  ];

  const getVerticalPosition = (cardId: number, index: number) => {
    if (cardId === activeCard) return "translate-y-0"; 
    switch (activeCard) {
      case 1:
        return index % 2 === 0 ? "-translate-y-8" : "translate-y-8";
      case 2:
        return index === 0
          ? "translate-y-4"
          : index === 2
          ? "-translate-y-4"
          : index === 3
          ? "translate-y-8"
          : "translate-y-0";
      case 3:
        return index === 0
          ? "-translate-y-4"
          : index === 1
          ? "translate-y-4"
          : index === 3
          ? "translate-y-8"
          : "translate-y-0";
      case 4:
        return index === 0
          ? "-translate-y-8"
          : index === 1
          ? "translate-y-4"
          : index === 2
          ? "-translate-y-4"
          : "translate-y-0";
      default:
        return "translate-y-0";
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center bg-black py-50 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/erk.jpg"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] flex flex-col gap-5">
        <div className="w-full px-4 sm:px-8 lg:px-[96px] pb-5 flex items-center border-b border-white">
          <h2 className="text-white font-bold text-2xl sm:text-3xl">
            Կատեգորիա
          </h2>
        </div>

        <div className="relative z-10 flex justify-center flex-wrap md:flex-nowrap gap-6 mt-5 mb-5">
          {cardsData.map((card, index) => {
            const isActive = card.id === activeCard;
            return (
              <div
                key={card.id}
                className={`flex flex-col cursor-pointer transition-all duration-500 ease-in-out ${getVerticalPosition(
                  card.id,
                  index
                )}`}
                style={{
                  width: isActive ? 360 : 270,
                  height: isActive ? 570 : 450,
                }}
                onClick={() => setActiveCard(card.id)}
              >
                <div className="flex items-center justify-between h-[48px] border-b border-[#E0E0E0] px-2 bg-black/60 backdrop-blur-sm">
                  <h3 className="text-white text-base font-medium">
                    {card.title}
                  </h3>
                  <Image src="/Vector.png" alt="Arrow" width={24} height={13} />
                </div>
                <div className="relative mt-2 flex-1 overflow-hidden rounded-b-lg">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-10 w-full px-6 md:px-[96px]">
          {smallCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col w-[180px] sm:w-[200px] h-[240px] rounded-lg bg-white overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-[200px] rounded-t-lg">
                <Image
                  src={`/moto${card.id}.png`}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[40px] flex items-center justify-center text-black text-sm font-medium">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
