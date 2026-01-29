"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section3 from "../components/Section/Section3/Section3";
import { useWishlist } from "@/app/context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

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
              Պահպանեք ձեր սիրելի իրերը այստեղ՝ դրանք հետագայում
              հեշտությամբ գտնելու համար
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
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[12px] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* IMAGE */}
                <div className="relative h-[250px] bg-white">
                  <Image
                    src={product.img}
                    alt={product.model}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <h3 className="text-black font-medium text-[16px]">
                      {product.model}
                    </h3>

                    <span className="flex items-center gap-1 text-[16px] text-black">
                      {product.price} <span>֏</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 border border-[#FFB300] text-[#FFB300] rounded-[8px] hover:bg-[#FFB300] hover:text-black transition">
                      Տեսնել ավել
                    </button>

                    <div className="flex gap-2">
                      {/* REMOVE */}
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="w-8 h-8 rounded-full bg-[#D0021B] flex items-center justify-center hover:opacity-80 transition"
                      >
                        <Image
                          src="/lov.jpg"
                          alt="remove"
                          width={16}
                          height={16}
                          className="invert brightness-0"
                        />
                      </button>

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
            ))}
          </div>
        </section>
      )}

      <Section3 />
    </main>
  );
};

export default WishlistPage;
