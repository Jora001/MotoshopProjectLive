"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section3 from "../components/Section/Section3/Section3";

const WishlistPage = () => {
  return (
    <main className="w-full min-h-screen bg-black">

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
            className="
              inline-flex items-center justify-center
              bg-white text-[#D0021B]
              px-8 py-3 mt-8
              rounded-[10px]
              font-semibold text-sm md:text-base
              hover:bg-[#D0021B] hover:text-white
              transition
            "
          >
            Դիտել տեսականին
          </Link>
        </div>
      </section>

      <Section3 />

    </main>
  );
};

export default WishlistPage;
