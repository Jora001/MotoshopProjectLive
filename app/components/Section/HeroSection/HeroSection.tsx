"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = ["/first.jpg", "/first.jpg", "/first.jpg"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Tablet detection
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop կարմիր շեյփի տեքստը ըստ slide
  const getDesktopText = () => {
    switch (currentIndex) {
      case 1:
        return "Ակցիան գործում է սեպտեմբերի 30-ից  նոյեմբերի 15-ը նշված տեսականու վրա։";
      case 2:
        return "Սկսիր զրոյից՝ մասնագետների աջակցությամբ և հստակ ուսուցման ծրագրով։";
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full top-25 min-h-[815px] flex justify-center overflow-hidden bg-black">
      <div
        className={`absolute inset-0 w-full h-full z-10 transition-all duration-500 2xl:translate-x-80`}
        style={{ left: isTablet ? "70px" : "0px" }}
      >
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute top-10 transition-opacity duration-700 
              ${currentIndex === index ? "opacity-100" : "opacity-0"} 
              2xl:min-w-[819px] w-full h-full`}
            style={{ height: "100%" }}
          >
            <Image
              src={src}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="hidden 2xl:flex absolute inset-0 z-20">
        <div
          className="absolute top-0 left-0 h-full bg-black"
          style={{
            width: "55%",
            clipPath: "polygon(79% 0%, 100% 46%, 79% 100%, 0 100%, 0 0)",
          }}
        >
          {/*  շեյփ */}
          <div
            className="absolute"
            style={{
              top: "13%",
              left: "-5%",
              width: "30%",
              height: "83%",
              background: "#4A4A4ACC",
              clipPath: "polygon(23% 12.25%, 23% 30.25%, 95% 95%)",
              zIndex: 10,
            }}
          />
          {/* Փոքր կարմիր  */}
          <div
            className="absolute"
            style={{
              top: "43%",
              left: "98%",
              width: "50%",
              height: "4%",
              background:
                "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 59.18%, rgba(176, 0, 0, 0) 99.41%)",
              transform: "rotate(-113.97deg)",
              zIndex: 20,
            }}
          />
          {/*  կարմիր շեյփ */}
          <div
            className="absolute"
            style={{
              top: "76%",
              width: "70%",
              height: "16%",
              background: "linear-gradient(90deg, #D0021B 0%, #9F0115 100%)",
              clipPath: "polygon(100% 0%, 90% 100%, 0 100%, 0 0)",
              zIndex: 15,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            {currentIndex === 0 ? (
              <div className="flex flex-col justify-center items-center -space-y-6">
                <div className="flex justify-center items-center gap-6">
                  {[1, 2, 3].map((num) => (
                    <Image
                      key={num}
                      src={`/rek${num}.png`}
                      alt={`logo${num}`}
                      width={90}
                      height={50}
                      className="object-contain transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>
                <div className="flex justify-center items-center gap-6">
                  {[4, 5, 6].map((num) => (
                    <Image
                      key={num}
                      src={`/rek${num}.png`}
                      alt={`logo${num}`}
                      width={90}
                      height={50}
                      className="object-contain transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p
                style={{
                  fontFamily: "GHEA Grapalat",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: 20,
                  lineHeight: "28px",
                  textAlign: "justify",
                  width: 455,
                  height: 56,
                  color: "white",
                }}
              >
                {getDesktopText()}
              </p>
            )}
          </div>
        </div>

        <div className="relative z-30 flex flex-col justify-center pl-[96px] max-w-[1440px] w-full pb-[185px]">
          <h2 className="text-white font-bold text-[36px] leading-[48px] w-[525px] font-[GHEA Grapalat]">
            Ազատությունը սկսվում է <span className="block">ճանապարհից</span>
          </h2>
          <p className="text-white text-[24px] font-semibold mt-4">
            Ուժ և վերահսկում՝ ցանկացած ճանապարհին
          </p>
          <button className="px-6 py-3 mt-6 bg-red-600 text-white rounded-lg w-fit">
            Դիտել տեսականին
          </button>
        </div>
      </div>

      {/* Tablet Layout (<1440px) */}
      <div className="flex 2xl:hidden flex-col absolute inset-0 z-20">
        <div
          className="absolute top-0 left-0 h-full bg-black"
          style={{
            width: "70%",
            clipPath: "polygon(0 0, 45% 0, 90% 100%, 0% 100%)",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "400px",
              height: "350px",
              top: "380px",
              backgroundColor: "silver",
              clipPath: "polygon(0 65%, 0 40%, 22% 100%, 20% 100%)",
              zIndex: 20,
            }}
          />
        </div>

        {/* Կարմիր թեք շեյփ */}
        {/* <div
          className="absolute"
          style={{
            width: "268px",
            height: "333px",
            top: "38px",
            left: "154px",
            transform: "rotate(-8.1deg)",
            background:
              "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 49.18%, rgba(176, 0, 0, 0) 94.41%)",
            clipPath: "polygon(43% 0, 50% 0, 68% 93%, 60% 88%)",
          }}
        /> */}

        {/* Tablet Text + Button */}
        <div
          className="absolute z-30 flex flex-col"
          style={{
            width: "362px",
            height: "136px",
            top: "36%",
            left: "32px",
            transform: "translateY(-50%)",
            gap: "32px",
          }}
        >
          <h4
            className="text-white"
            style={{
              fontFamily: "GHEA Grapalat",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "40px",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            Ազատությունը <br /> սկսվում է ճանապարհից
          </h4>

          <p
            className="text-white"
            style={{
              fontFamily: "GHEA Grapalat",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "28px",
              margin: 0,
            }}
          >
            Ուժ և վերահսկում՝ ցանկացած ճանապարհին
          </p>

          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm w-fit">
            Դիտել տեսականին
          </button>
        </div>

        {/* Ներքևի logos */}
        <div
          className="absolute flex flex-wrap justify-center items-center gap-6 w-full"
          style={{
            top: "720px",
            height: "50px",
            backgroundColor: "#850112",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            padding: "0 16px",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`/rek${num}.png`}
              alt={`photo${num}`}
              width={50}
              height={30}
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {heroImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-gray-400 w-5" : "bg-gray-400 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;






























