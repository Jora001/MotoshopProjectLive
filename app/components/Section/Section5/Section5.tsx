"use client";

import React from "react";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="relative w-full min-h-[979px] overflow-hidden bg-black">
      <Image
        src="/secty6.png"
        alt="Section 5 Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-end border-b border-[#2E2E2E]
        px-4 sm:px-8 md:px-12 xl:px-[96px] pt-[40px] pb-[20px] h-auto md:h-[196px]">
        <h2
          className="text-white font-bold text-[28px] sm:text-[36px] md:text-[44px] xl:text-[48px] leading-tight md:leading-[58px]"
          style={{
            fontFamily: "GHEA Grapalat",
            letterSpacing: "-1%",
          }}
        >
          Արհեստանոց և սպասարկում
        </h2>
      </div>

      <div
        className="relative z-10 mt-[32px] md:mt-[48px] max-w-[1440px] mx-auto flex flex-col md:flex-row 
        gap-[24px] md:gap-[48px] px-4 sm:px-8 md:px-12 xl:px-[96px]"
      >
        <div className="w-full md:w-[600px] h-[400px] sm:h-[500px] md:h-[629px] rounded-[4px] overflow-hidden relative">
          <Image
            src="/yux.png"
            alt="Main Image"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-[20px] left-[16px] sm:bottom-[30px] sm:left-[20px] w-[90%] sm:w-[510px] flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px]">
            <h3
              className="text-white font-bold text-[22px] sm:text-[28px] md:text-[36px] leading-[28px] sm:leading-[36px] md:leading-[48px]"
              style={{
                fontFamily: "GHEA Grapalat",
                letterSpacing: "-0.5%",
              }}
            >
              Շարժիչի յուղի փոխում
            </h3>

            <p
              className="text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px]"
              style={{
                fontFamily: "Noto Sans Armenian",
                letterSpacing: "0.5%",
              }}
            >
              Յուղի արագ և որակյալ փոխման ծառայություն մեր արհեստանոցում՝
              օգտագործելով բարձրորակ յուղեր։
            </p>

            <button
              className="w-[180px] sm:w-[200px] md:w-[245px] h-[36px] sm:h-[40px] bg-[#D0021B] text-white 
              rounded-[8px] font-bold text-[12px] sm:text-[14px] flex items-center justify-center px-[16px] py-[8px]"
            >
              Պատվիրել հիմա
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[600px] gap-[16px]">
          {[
            {
              src: "/yux1.png",
              text: (
                <>
                  Պահեստամասերի
                  <br />
                  վերանորոգում և փոխարինում
                </>
              ),
            },
            {
              src: "/yux2.png",
              text: (
                <>
                  Շարժիչի վերանորոգում
                  <br />
                  և ամբողջական վերակառուցում
                </>
              ),
            },
            {
              src: "/yux3.png",
              text: (
                <>
                  Էլեկտրական անսարքությունների
                  <br />
                  հայտնաբերում և վերացում
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full h-[160px] sm:h-[180px] md:h-[199px] rounded-[4px] overflow-hidden relative"
            >
              <Image
                src={item.src}
                alt={`Right Image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-[10px] right-[10px] w-[80%] sm:w-[348px] flex items-center justify-end px-[12px] sm:px-[16px] text-right">
                <h4
                  className="font-bold text-white text-[16px] sm:text-[18px] md:text-[19px] leading-[24px] sm:leading-[28px] md:leading-[32px]"
                  style={{
                    fontFamily: "GHEA Grapalat",
                    letterSpacing: "-0.5%",
                  }}
                >
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
