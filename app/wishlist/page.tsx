"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section3 from "../components/Section/Section3/Section3";
import { useWishlist, WishlistProduct } from "@/app/context/WishlistContext";

/* ================= BADGE STYLE ================= */
const badgeStyles: Record<
  "available" | "new" | "sale" | "not-available" | "for-kids",
  string
> = {
  available: "bg-green-600 text-white",
  new: "bg-blue-600 text-white",
  sale: "bg-red-600 text-white",
  "not-available": "bg-gray-400 text-white",
  "for-kids": "bg-pink-500 text-white",
};

const WishlistPage = () => {
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();
  const [selectedProduct, setSelectedProduct] =
    useState<WishlistProduct | null>(null);

  return (
    <main className="w-full min-h-screen bg-black">
      {/* HERO */}
      <section className="relative w-full bg-black">
        <div className="relative w-full h-[350px]">
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
              Ցանկալի իրեր
            </h1>
          </div>
        </div>
      </section>

      {/* EMPTY STATE */}
      {wishlist.length === 0 && (
        <section className="w-full flex items-center justify-center py-28 px-6">
          <div className="flex flex-col items-center text-center max-w-[520px]">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
              Ձեր ընտրանին դատարկ է
            </h2>

            <div className="relative w-[170px] h-[170px] mb-6 opacity-80">
              <Image
                src="/abul.jpg"
                alt="Empty wishlist"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Պահպանեք ձեր սիրելի իրերը այստեղ՝ դրանք հետագայում հեշտությամբ
              գտնելու համար
            </p>

            <Link
              href="/assortment"
              className="inline-flex items-center justify-center
                bg-white text-[#D0021B]
                px-8 py-3 mt-8
                rounded-[10px]
                font-semibold text-sm md:text-base
                hover:bg-[#D0021B] hover:text-white
                transition"
            >
              Դիտել տեսականին
            </Link>
          </div>
        </section>
      )}

      {/* WISHLIST ITEMS */}
      {wishlist.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 md:px-[96px] py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => {
              const liked = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105 relative"
                >
                  {/* IMAGE */}
                  <div className="relative h-[250px]">
                    <Image
                      src={product.img}
                      alt={product.model}
                      fill
                      className="object-contain p-4"
                    />

                    {/* BADGES */}
                    {product.badges && (
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.badges.map(
                          (badge: keyof typeof badgeStyles, i: number) => (
                            <span
                              key={i}
                              className={`text-xs px-2 py-1 rounded font-medium ${badgeStyles[badge]}`}
                            >
                              {badge === "available"
                                ? "Արկա է"
                                : badge === "sale"
                                ? "Զեղչ"
                                : badge === "new"
                                ? "Նոր"
                                : badge === "not-available"
                                ? "Առկա չէ"
                                : badge === "for-kids"
                                ? "Երեխաների համար"
                                : badge}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
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

                      <div className="flex gap-2 items-center">
                        {/* WISHLIST BUTTON */}
                        <button
                          onClick={() =>
                            toggleWishlist({
                              ...product,
                              badges: product.badges || [],
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

                        {/* COMPARE BUTTON */}
                        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <Image
                            src="/smg.jpg"
                            alt="compare"
                            width={16}
                            height={16}
                          />
                        </button>

                        {/* ONLY FOR MOTORCYCLES */}
                        {product.category === "motorcycles" && (
                          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                            <Image
                              src="/eng.jpg"
                              alt="engine"
                              width={16}
                              height={16}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

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
              </div>
            </div>
          </div>
        </div>
      )}

      <Section3 />
    </main>
  );
};

export default WishlistPage;
