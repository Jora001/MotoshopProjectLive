"use client";

import React from "react";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="relative w-full h-[979px] overflow-hidden bg-black">
      <Image
        src="/secty6.png"
        alt="Section 5 Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-[1440px] h-[196px] flex items-end px-[96px] pt-[40px] pb-[20px] border-b border-[#2E2E2E]">
        <h2
          className="text-white font-bold text-[48px] leading-[58px]"
          style={{
            fontFamily: "GHEA Grapalat",
            letterSpacing: "-1%",
          }}
        >
          Արհեստանոց և սպասարկում
        </h2>
      </div>

      <div className="relative z-10 mt-[48px] max-w-[1440px] mx-auto flex gap-[48px] px-[96px]">
        <div className="w-[600px] h-[629px] rounded-[4px] overflow-hidden opacity-100 relative">
          <Image
            src="/yux.png"
            alt="Main Image"
            width={600}
            height={629}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-[40px] left-[20px] w-[510px] h-[180px] flex flex-col gap-[32px]">
            <h3
              className="text-white font-bold text-[36px] leading-[48px]"
              style={{
                fontFamily: "GHEA Grapalat",
                letterSpacing: "-0.5%",
              }}
            >
              Շարժիչի յուղի փոխում
            </h3>

            <p
              className="text-white font-bold text-[18px] leading-[22px]"
              style={{
                fontFamily: "Noto Sans Armenian",
                letterSpacing: "0.5%",
              }}
            >
              Յուղի արագ և որակյալ փոխման ծառայություն մեր արհեստանոցում՝
              օգտագործելով բարձրորակ յուղեր
            </p>

            <button
              className="w-[245px] h-[40px] bg-[#D0021B] text-[#FFFFFF] rounded-[8px] font-bold text-[14px] flex items-center justify-center px-[20px] py-[10px]"
            >
              Պատվիրել հիմա
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="w-[600px] h-[199px] rounded-[4px] overflow-hidden opacity-100 relative">
            <Image
              src="/yux1.png"
              alt="Right Image 1"
              width={600}
              height={199}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[10px] right-[10px] w-[348px] h-[64px]  flex items-center justify-end px-[16px]">
              <h4
                className="font-bold text-[19px] leading-[32px]"
                style={{
                  fontFamily: "GHEA Grapalat",
                  letterSpacing: "-0.5%",
                  textAlign: "right",
                }}
              >
                Պահեստամասերի
                <br />
                վերանորոգում և փոխարինում
              </h4>
            </div>
          </div>

          <div className="w-[600px] h-[199px] rounded-[4px] overflow-hidden opacity-100 relative">
            <Image
              src="/yux2.png"
              alt="Right Image 2"
              width={600}
              height={199}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[10px] right-[10px] w-[348px] h-[64px]  flex items-center justify-end px-[16px]">
              <h4
                className="font-bold text-[19px] leading-[32px]"
                style={{
                  fontFamily: "GHEA Grapalat",
                  letterSpacing: "-0.5%",
                  textAlign: "right",
                }}
              >
Շարժիչի վերանորոգում
                <br />
և ամբողջական վերակառուցում               </h4>
            </div>
          </div>

          <div className="w-[600px] h-[199px] rounded-[4px] overflow-hidden opacity-100 relative">
            <Image
              src="/yux3.png"
              alt="Right Image 3"
              width={600}
              height={199}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-[10px] right-[10px] w-[348px] h-[64px]flex items-center justify-սs px-[16px]">
              <h4
                className="font-bold text-[19px] leading-[32px]"
                style={{
                  fontFamily: "GHEA Grapalat",
                  letterSpacing: "-0.5%",
                  textAlign: "right",
                }}
              >
                Էլեկտրական անսարքությունների
                <br />
 հայտնաբերում և վերացում
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
