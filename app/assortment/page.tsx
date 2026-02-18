/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useWishlist } from "@/app/context/WishlistContext";

/* ================= ՏԵՍԱԿՆԵՐ ================= */
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

/* ================= ՏՎՅԱԼՆԵՐ ================= */
const products: Product[] = [
  {
    id: 1,
    model: "Eliminator 500 մոտոցիկլ",
    price: "2 660 000",
    img: "/cd001.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 2,
    model: "Alpinestars Supertech R կոշիկներ",
    price: "228 000",
    img: "/sec2f6.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 3,
    model: "Klim Badlands Pro տաբատ",
    price: "300 000",
    img: "/sha002.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 4,
    model: "Ninja ZX-10R 2025",
    price: "8 360 000",
    img: "/mot0003.jpg",
    badges: ["new", "available"],
    category: "motorcycles",
  },
  {
    id: 5,
    model: "Honda Gold Wing Tour DCT",
    price: "10 260 000",
    img: "/noter.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 6,
    model: "Klim Badlands Pro Jacket",
    price: "456 000",
    img: "/bajk.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 7,
    model: "AGV K6 S Helmet",
    price: "266 000",
    img: "/glx.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 8,
    model: "Fantic XEF 125",
    price: "2 280 000",
    img: "/dra.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 9,
    model: "SUZUKI GSX-8R Մոտոցիկլ",
    price: "3 730 000",
    img: "/karm.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 10,
    model: "SUZUKI GSX-R600 Մոտոցիկլ",
    price: "4 950 000",
    img: "/kap.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 11,
    model: "Honda CBR1000RR Մոտոցիկլ",
    price: "57 000",
    img: "/not.jpg",
    badges: ["for-kids", "available"],
    category: "kids",
  },
  {
    id: 12,
    model: "Merlin Minworth Heated Gloves ձեռնոցներ",
    price: "86 000",
    img: "/acs.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 13,
    model: "Vespa 946 Electric scooter",
    price: "49 000",
    img: "/skido.jpg",
    badges: ["for-kids", "available"],
    category: "kids",
  },
  {
    id: 14,
    model: "BILT Apex Helmet",
    price: "76 000",
    img: "/heml.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 15,
    model: "Vmoto TC Wanderer Մոտոցիկլ",
    price: "1 786 000",
    img: "/moso.jpg",
    badges: ["available", "sale"],
    category: "motorcycles",
  },
  {
    id: 16,
    model: "100% Youth Strata 2 Goggles",
    price: "15 200",
    img: "/akt.jpg",
    badges: ["not-available"],
    category: "accessories",
  },
  {
    id: 17,
    model: "Ninja ZX-10RR Մոտոցիկլ",
    price: "11 722 000",
    img: "/sec2f1.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 18,
    model: "EMERZE EM5 Armor",
    price: "55 000",
    img: "/sec2f2.jpg",
    badges: ["available"],
    category: "accessories",
  },
  {
    id: 19,
    model: "CPX Explorer Մոտոցիկլ",
    price: "2 770 000",
    img: "/skut.jpg",
    badges: ["available"],
    category: "motorcycles",
  },
  {
    id: 20,
    model: "Forma Ice Pro",
    price: "123 700",
    img: "/sec2f4.jpg",
    badges: ["new", "available"],
    category: "accessories",
  },
];

/* ================= BADGE ՍՏԵՂԾՄԱՆ ՆՅՈՒԹՆԵՐ ================= */
const badgeStyles: Record<Badge, string> = {
  available: "bg-green-600 text-white",
  new: "bg-blue-600 text-white",
  sale: "bg-red-600 text-white",
  "not-available": "bg-gray-400 text-white",
  "for-kids": "bg-pink-500 text-white",
};

/* ================= ԷՋ ================= */
const Page = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toggleWishlist, isInWishlist, hydrated } = useWishlist();

  if (!hydrated) return null;

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const categories = [
    { label: "Բոլորը", value: "all" },
    { label: "Մոտոցիկլներ", value: "motorcycles" },
    { label: "Աքսեսուարներ", value: "accessories" },
    { label: "Պահեստամասեր", value: "spare-parts" },
    { label: "Մանկական", value: "kids" },
  ];

  return (
    <main className="w-full min-h-screen bg-black">
      {/* HERO ՍԵԿՑԻԱ */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/pimg.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-6 bottom-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Տեսականի
          </h1>
        </div>
      </section>

      {/* ՖԻԼՏՐԻ ԿՈՃԵՐ */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[96px] py-10">
        <div className="flex flex-wrap gap-6 justify-center border-b border-gray-700 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as Category)}
              className={`relative px-4 py-2 text-white font-medium transition-colors cursor-pointer
          ${activeFilter === cat.value ? "text-[#FFB300]" : ""}
        `}
            >
              {cat.label}
              {/* Ակտիվ underline */}
              {activeFilter === cat.value && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[red] rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ԱՊԱՐԱՆՔՆԵՐ */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[96px] pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const liked = isInWishlist(product.id);
            const isDisabled = product.badges.includes("not-available");

            return (
              <div
                key={product.id}
                className="bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105 relative"
              >
                {/* ՊԱՏԿԵՐ */}
                <div className="relative h-[250px]">
                  <Image
                    src={product.img}
                    alt={product.model}
                    fill
                    className="object-contain p-4"
                  />

                  {/* BADGES */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded font-medium ${badgeStyles[badge]}`}
                      >
                        {badge === "available"
                          ? "Արկա է"
                          : badge === "sale"
                          ? "Զեղչ "
                          : badge === "new"
                          ? "Նոր"
                          : badge === "not-available"
                          ? "Առկա չէ"
                          : badge === "for-kids"
                          ? "Երեխաների համար"
                          : badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ՄԱՏԵՐԻԱԼ */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <h3 className="text-black font-medium text-[16px]">
                      {product.model}
                    </h3>
                    <span className="flex items-center gap-1 text-[16px] text-black">
                      {product.price} ֏
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 py-2 border border-[#FFB300] text-[#FFB300] rounded-[8px] hover:bg-[#FFB300] hover:text-black transition"
                    >
                      Տեսնել ավել
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Wishlist Button */}
                      <button
                        onClick={() =>
                          toggleWishlist({
                            id: product.id,
                            model: product.model,
                            price: product.price,
                            img: product.img,
                            badges: undefined
                          })
                        }
                        className="w-8 h-8 flex items-center justify-center transition"
                      >
                        {liked ? (
                          <span className="text-red-500 text-xl">❤️</span>
                        ) : (
                          <span className="text-white text-xl relative">
                            <span className="absolute inset-0 text-red-500">
                              🤍
                            </span>
                            🤍
                          </span>
                        )}
                      </button>

                      {/* Compare Placeholder */}
                      {product.badges.includes("sale") && (
                        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 text-gray-600">
                          A⇄B
                        </button>
                      )}

                      {/* Cart Button */}
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Image
                          src="/smg.jpg"
                          alt="compare"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] md:w-[800px] rounded-[16px] p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-black text-xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[300px]">
                <Image
                  src={selectedProduct.img}
                  alt={selectedProduct.model}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{selectedProduct.model}</h2>
                <p className="text-gray-600">
                  Այստեղ կարող ես տեղադրել տվյալ ապրանքի ամբողջական
                  նկարագրությունը։
                </p>
                <span className="text-xl font-semibold">
                  {selectedProduct.price} ֏
                </span>
                {/* <button className="bg-[#D0021B] text-white py-2 rounded-[8px] hover:opacity-90 transition">
                  Ավելացնել զամբյուղում
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
