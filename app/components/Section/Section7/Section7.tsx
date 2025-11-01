"use client";

import React from "react";
import Image from "next/image";
import { POSTS } from "@/constants/posts";

const Section7 = () => {
  return (
    <section className="bg-black py-8 flex flex-col items-center gap-4 px-4 md:px-8 2xl:px-24">
      <div>
        <h2 className="text-white text-4xl font-bold">
          Վերջին հրապարակումները
        </h2>
      </div>
      <div className="flex flex-col py-4 gap-4">
        <div className="flex ">
          <div>

          </div>
          <div className="2xl:max-w-6xl flex flex-col 2xl:grid 2xl:grid-cols-3 gap-2 md:gap-4 2xl:gap-8 2xl:px-4">
            {POSTS.map((post) => (
              <div
                key={post.title}
                className="bg-white rounded-sm 2xl:rounded-xl shadow-lg flex flex-row-reverse justify-between 2xl:justify-start 2xl:flex-col"
              >
                <div className="p-2 md:p-4 2xl:p-0">
                  <div className="relative w-42 h-31 2xl:w-full 2xl:h-80">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover rounded-xs md:rounded-sm 2xl:rounded-t-xl"
                      priority
                    />
                  </div>
                </div>
                <div className="p-2 md:p-4 2xl:pl-3 2xl:pt-4 flex flex-col gap-4 justify-between 2xl:justify-start">
                  <h3 className="text-lg font-semibold text-black">
                    {post.title}
                  </h3>
                  <div className="flex gap-4">
                    <div className="relative h-[18px] w-[18px]">
                      <Image
                        src="/icons/date.svg"
                        alt="date"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <p className="text-gray-500 text-base font-normal">
                      {post.date.toLocaleDateString("hy-AM", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="hidden 2xl:flex relative h-7 w-7 ">
            <Image
              src="/icons/right.svg"
              alt="right"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </div>
          </div>
        </div>
        <div className="flex justify-center 2xl:hidden">
          <div className="text-[#FFFFFF] text-base p-2 border border-[#FFFFFF] rounded-lg">
            View more
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;