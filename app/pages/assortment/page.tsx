"use client";

import React, { useState } from "react";
import Image from "next/image";

type Badge = "available" | "new" | "sale" | "not-available" | "for-kids";
type Category = "all" | "motorcycles" | "accessories" | "spare-parts" | "kids";

type Product = {
  id: number;
  model: string;
  price: string;
  img: string;
  badges: Badge[];
  category: Category;
};

const products: Product[] = [
  { id: 1, model: "Eliminator 500 մոտոցիկլ", price: "2 660 000", img: "/cd001.jpg", badges: ["available"], category: "motorcycles" },
  { id: 2, model: "Alpinestars Supertech R կոշիկներ", price: "228 000", img: "/sec2f6.jpg", badges: ["available"], category: "accessories" },
  { id: 3, model: "Klim Badlands Pro տաբատ", price: "300 000", img: "/sha002.jpg", badges: ["available"], category: "accessories" },
  { id: 4, model: "Ninja ZX-10R 2025", price: "8 360 000", img: "/mot0003.jpg", badges: ["new", "available"], category: "motorcycles" },
  { id: 5, model: "Honda Gold Wing Tour DCT", price: "10 260 000", img: "/noter.jpg", badges: ["available"], category: "motorcycles" },
  { id: 6, model: "Klim Badlands Pro Jacket", price: "456 000", img: "/bajk.jpg", badges: ["available"], category: "accessories" },
  { id: 7, model: "AGV K6 S Helmet", price: "266 000", img: "/glx.jpg", badges: ["available"], category: "accessories" },
  { id: 8, model: "Fantic XEF 125", price: "2 280 000", img: "/dra.jpg", badges: ["available"], category: "motorcycles" },
  { id: 9, model: "SUZUKI GSX-8R Մոտոցիկլ", price: "3 730 000", img: "/karm.jpg", badges: ["available"], category: "motorcycles" },
  { id: 10, model: "SUZUKI GSX-R600 Մոտոցիկլ", price: "4 950 000", img: "/kap.jpg", badges: ["available"], category: "motorcycles" },
    { id: 11, model: "Honda CBR1000RR  Մոտոցիկլ", price: "57 000", img: "/not.jpg", badges: ["for-kids","available"], category: "kids" },
        { id: 12, model: "Merlin Minworth Heated Gloves ձեռնոցներ", price: "86 000", img: "/acs.jpg", badges: ["available"], category: "accessories" },
    { id: 13, model: "Vespa 946  - Electric children's scooter", price: "49 000", img: "/skido.jpg", badges: ["for-kids","available"], category: "kids" },
            { id: 14, model: "BILT Apex Helmet", price: "76 000", img: "/heml.jpg", badges: ["available"], category: "accessories" },
  { id: 15, model: "Vmoto TC Wanderer Մոտոցիկլ", price: "1 786 000", img: "/moso.jpg", badges: ["available","sale"], category: "motorcycles" },
            { id: 16, model: "100% Youth Strata 2 Goggles - Mirrored Lens", price: "15 200", img: "/akt.jpg", badges: ["not-available"], category: "accessories" },
  { id: 17, model: "Ninja ZX-10RR Մոտոցիկլ", price: "11 722 000", img: "/sec2f1.jpg", badges: ["available"], category: "motorcycles" },
            { id: 18, model: "EMERZE EM5 Armor", price: "55 000", img: "/sec2f2.jpg", badges: ["available"], category: "accessories" },
  { id: 19, model: "CPX Explorer Մոտոցիկլ", price: "2 770 000", img: "/skut.jpg", badges: ["available"], category: "motorcycles" },
            { id: 20, model: "Forma Ice Pro ", price: "123 700", img: "/sec2f4.jpg", badges: ["new", "available"], category: "accessories" },



];

const badgeConfig: Record<Badge, { text: string; className: string }> = {
  available: {
    text: "Առկա է",
    className: "bg-[#F5F5F5] text-[#2E7D32]",
  },
  new: {
    text: "Նորույթ",
    className: "bg-[#2E7D32] text-white",
  },
  sale: {
    text: "Ակցիա 15%",
    className: "bg-[#D0021B] text-white",
  },
  "not-available": {
    text: "Հասանելի չէ",
    className: "bg-[#D0021B] text-white",
  },
  "for-kids": {
    text: "Մանկական",
    className: "bg-[#FFB300] text-black",
  },
};


const filters: { label: string; value: Category }[] = [
  { label: "Բոլորը", value: "all" },
  { label: "Մոտոցիկլներ", value: "motorcycles" },
  { label: "Աքսեսուարներ", value: "accessories" },
  { label: "Պահեստամասեր", value: "spare-parts" },
  { label: "Մանկական", value: "kids" },
];

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main className="w-full min-h-screen bg-black">

      <section className="relative w-full h-screen">
        <Image src="/pimg.png" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-6 bottom-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Տեսականի</h1>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 md:px-[96px] pt-16">
        <div className="flex justify-end">
          <div className="flex gap-8">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className="relative text-white text-[16px] font-medium pb-2"
                >
                  {filter.label}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] bg-[#D0021B] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-[96px] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-[250px] bg-white">
                <div className="absolute top-[45px]  flex flex-col gap-[6px] z-10">
                  {product.badges.map((badge) => (
                    <div
                      key={badge}
                      className={`min-w-[80px] h-[22px] px-[10px] text-[12px] font-semibold flex items-center justify-center ${badgeConfig[badge].className}`}
                    >
                      {badgeConfig[badge].text}
                    </div>
                  ))}
                </div>

                <Image src={product.img} alt={product.model} fill className="object-contain p-4" />
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <h3 className="text-black font-medium text-[16px]">
                    {product.model}
                  </h3>

                  <span className="flex items-center gap-1 text-[16px] font-normal text-black whitespace-nowrap">
                    {product.price}
                    <span className="font-normal">֏</span>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 border border-[#FFB300] text-[#FFB300] rounded-[8px] hover:bg-[#FFB300] hover:text-black transition">
                    Տեսնել ավել
                  </button>

                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Image src="/lov.jpg" alt="fav" width={16} height={16} />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Image src="/smg.jpg" alt="compare" width={16} height={16} />
                    </button>

                    {product.category === "motorcycles" && (
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Image src="/eng.jpg" alt="engine" width={16} height={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
};

export default Page;
