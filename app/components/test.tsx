"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const heroImages = ["/first.jpg", "/erkrord.png", "/errord.jpg"]; // hero slide-ի նկարները

const Section7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ավտոմատ թերթում hero-ի նկարները
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Ֆոնային slide նկար */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700">
        <Image
          src={heroImages[currentIndex]}
          alt="Hero Background"
          fill
          className="object-cover transition-opacity duration-700
                     md:left-[257px] md:w-[511px] md:h-[823px]"
          priority
        />
      </div>

      {/* --- Slide Indicators --- */}
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {heroImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-gray-400 w-5" : "bg-gray-400 w-3"
            }`}
          ></div>
        ))}
      </div>

      {/* Վերևի ձախ սեւ polygon shape */}
      <div
        className="absolute top-0 left-0 h-full bg-black"
        style={{
          width: "70%",
          clipPath: "polygon(0 0, 15% 0, 80% 100%, 0% 100%)",
          opacity: 1,
        }}
      >
        {/* Ներքևի փոքր սեւ polygon — overlay վերևի ձախ շեյփի վրա */}
        <div
          className="absolute"
          style={{
            width: "400px",
            height: "350px",
            top: "450px",
            opacity: 1,
            clipPath: "polygon(0 65%, 0 40%, 22% 100%, 20% 100%)",
            backgroundColor: "silver",
            zIndex: 20,
          }}
        ></div>

        {/* Tablet համար բարձրացնում ենք silver polygon-ը */}
        <div
          className="hidden md:block absolute"
          style={{
            width: "400px",
            height: "350px",
            top: "380px", // բարձրացրել ենք վերև
            opacity: 1,
            clipPath: "polygon(0 65%, 0 40%, 22% 100%, 20% 100%)",
            backgroundColor: "silver",
            zIndex: 20,
          }}
        ></div>
      </div>

      {/* Նոր վերևի շեղված polygon shape */}
      <div
        className="absolute"
        style={{
          width: "268px",
          height: "333px",
          left: "-80px",
          transform: "rotate(-3.1deg)",
          opacity: 1,
          background:
            "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 49.18%, rgba(176, 0, 0, 0) 94.41%)",
          clipPath: "polygon(43% 0, 50% 0, 68% 93%, 60% 88%)",
        }}
      ></div>

      {/* Text + button block — vertical-centered, left-aligned */}
      <div
        className="absolute top-1/2 left-0 flex flex-col gap-4 items-start transform -translate-y-1/2 z-24"
        style={{
          width: "317px",
          height: "198px",
          paddingTop: "18px",
          paddingRight: "16px",
          paddingBottom: "12px",
          paddingLeft: "16px",
          opacity: 1,
        }}
      >
        {/* H4 տեքստ */}
        <h4
          className="text-white font-bold text-left"
          style={{
            fontFamily: "GHEA Grapalat, sans-serif",
            fontWeight: 700,
            fontSize: "23px",
            lineHeight: "32px",
            letterSpacing: "-0.5%",
            width: "285px",
            height: "64px",
            verticalAlign: "middle",
          }}
        >
          Ազատությունը սկսվում է <br /> ճանապարհից
        </h4>

        {/* Ներքևի տեքստ */}
        <p
          className="text-white font-semibold text-left"
          style={{
            fontFamily: "Noto Sans Armenian, sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "20px",
            letterSpacing: "0.2%",
            width: "185px",
            height: "40px",
          }}
        >
          Ուժ և վերահսկում՝ <br /> ցանկացած ճանապարհին
        </p>

        {/* Button */}
        <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm w-fit">
          Դիտել տեսականին
        </button>
      </div>

      {/* Նոր լրացուցիչ polygon shape — 100% լայնությամբ */}
      <div
        className="absolute flex justify-center items-center gap-4 w-full"
        style={{
          top: "720px", // մոբայլ
          height: "50px",
          left: "0px",
          paddingTop: "10px",
          paddingRight: "16px",
          paddingBottom: "10px",
          paddingLeft: "16px",
          opacity: 1,
          backgroundColor: "#850112",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: 15,
        }}
      >
        <Image
          src="/rek1.png"
          alt="photo1"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/rek2.png"
          alt="photo2"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/rek3.png"
          alt="photo3"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/rek4.png"
          alt="photo4"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/rek5.png"
          alt="photo5"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/rek6.png"
          alt="photo6"
          width={50}
          height={30}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Section7;
