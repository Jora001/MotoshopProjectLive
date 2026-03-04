/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useWishlist } from "@/app/context/WishlistContext";

/* ================= TYPES ================= */
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

/* ================= BADGE CONFIG ================= */
const badgeConfig: Record<Badge, { text: string; className: string }> = {
  available: { text: "Առկա է", className: "bg-[#F5F5F5] text-[#2E7D32]" },
  new: { text: "Նորույթ", className: "bg-[#2E7D32] text-white" },
  sale: { text: "Ակցիա 15%", className: "bg-[#D0021B] text-white" },
  "not-available": { text: "Առկա չէ", className: "bg-gray-500 text-white" },
  "for-kids": { text: "Մանկական", className: "bg-pink-600 text-white" },
};

/* ================= DATA ================= */
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
];

/* ================= FILTERS ================= */
const filters = [
  { label: "Ամբողջը", value: "all" as Category },
  { label: "Մոտոցիկլներ", value: "motorcycles" as Category },
  { label: "Աքսեսուարներ", value: "accessories" as Category },
  { label: "Պահեստամասեր", value: "spare-parts" as Category },
  { label: "Մանկական", value: "kids" as Category },
];

/* ================= SORT OPTIONS ================= */
const sortOptions = ["Ամենավաճառվողներ", "Ամենաթանկ", "Ամենաէժան"];

/* ================= PAGE ================= */
const Page = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [activeSort, setActiveSort] = useState<string>("Ամենավաճառվողներ");
  const [sortOpen, setSortOpen] = useState<boolean>(false);

  const { toggleWishlist, isInWishlist, hydrated } = useWishlist();
  if (!hydrated) return null;

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main className="w-full min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative w-full h-screen">
        <Image src="/pimg.png" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-6 bottom-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Տեսականի</h1>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 py-10 flex justify-center items-center gap-10 border-b border-gray-700">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className="relative px-4 py-2 text-[18px] font-bold leading-6 transition-all duration-300"
          >
            <span className="relative inline-block">
              {f.label}
              {activeFilter === f.value && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D0021B] rounded-full"></span>
              )}
            </span>
          </button>
        ))}
      </section>

      {/* SORT + TOTAL */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 py-4 flex justify-end items-center gap-6">
        <span className="font-normal">Դասավորել ըստ-</span>

        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1 font-bold text-[18px] leading-6"
          >
            {activeSort}
            <span className={`transform transition-transform ${sortOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
          </button>

          {sortOpen && (
            <ul className="absolute top-full right-0 mt-1 bg-black text-white border border-gray-600 rounded-md z-10">
              {sortOptions.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setActiveSort(opt);
                    setSortOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>

        <span className="font-medium text-[16px] leading-6">
          Ընտրված ապրանքների քանակը: {filteredProducts.length}
        </span>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const liked = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="bg-white text-black rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* IMAGE + BADGES */}
                <div className="relative h-62.5 bg-white">
                  <Image src={product.img} alt={product.model} fill className="object-contain p-4" />
                  <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`min-w-[80px] h-[22px] px-[10px] text-[12px] font-semibold flex items-center justify-center rounded-[1px] ${badgeConfig[badge]?.className}`}
                      >
                        {badgeConfig[badge]?.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* INFO */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <h3 className="font-medium text-[16px]">{product.model}</h3>
                    <span className="flex items-center gap-1 text-[16px] whitespace-nowrap">
                      {product.price} <span>֏</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-[#FFB300] text-[#FFB300] rounded-lg hover:bg-[#FFB300] hover:text-black transition">
                      Տեսնել ավել
                    </button>

                    <button
                      onClick={() =>
                        toggleWishlist({
                          id: product.id,
                          model: product.model,
                          price: product.price,
                          img: product.img,
                          badges: product.badges,
                          category:
                            product.category === "motorcycles" ||
                            product.category === "accessories"
                              ? product.category
                              : undefined,
                        })
                      }
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        liked ? "bg-[#D0021B]" : "bg-white"
                      }`}
                    >
                      <Image src="/lov.jpg" alt="fav" width={16} height={16} className={liked ? "invert brightness-0" : ""} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;