
      "use client";

      import React, { useState, useEffect } from "react";
      import Image from "next/image";
      import { HERO_SLIDES } from "@/constants/heroSlides";

      const HeroSection = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isTablet, setIsTablet] = useState(false);
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
          const handleResize = () => {
            const width = window.innerWidth;
            setIsTablet(width >= 768 && width <= 1280);
            setIsMobile(width < 768);
          };

          handleResize();
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
          }, 4000);
          return () => clearInterval(interval);
        }, []);

        const currentSlide = HERO_SLIDES[currentIndex];

        return (
          <section className="relative w-full top-32 min-h-[815px] flex justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 w-full h-full z-10 transition-all duration-500">
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={
                      isMobile && slide.mobileImg
                        ? slide.mobileImg
                        : isTablet && slide.tabletImg
                        ? slide.tabletImg
                        : slide.img
                    }
                    alt={`Hero ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="flex absolute inset-0 z-20">
              <div
                className="absolute top-0 left-0 h-full bg-transparent"
                style={{
                  width: isTablet || isMobile ? "100%" : "55%",
                  clipPath:
                    isTablet || isMobile
                      ? "none"
                      : "polygon(79% 0%, 100% 46%, 79% 100%, 0 100%, 0 0)",
                }}
              >
                <div
                  className="absolute"
                  style={{
                    top: isTablet || isMobile ? "auto" : "76%",
                    bottom: isTablet || isMobile ? "0" : "auto",
                    width: isTablet || isMobile ? "100%" : "70%",
                    height: isTablet ? 88 : isMobile ? 88 : "16%",
                    background: "linear-gradient(90deg, #D0021B 0%, #9F0115 100%)",
                    clipPath:
                      isTablet || isMobile
                        ? "none"
                        : "polygon(100% 0%, 90% 100%, 0 100%, 0 0)",
                    opacity: 1,
                    zIndex: 15,
                    display: "flex",
                    flexDirection: isTablet || isMobile ? "row" : "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: isTablet || isMobile ? "16px 32px" : "0 10px",
                    gap: isTablet || isMobile ? "24px" : "0",
                    transition: "all 0.5s ease",
                  }}
                >
                  {currentSlide.showLogos ? (
                    <div
                      className={`flex justify-center items-center ${
                        isTablet || isMobile ? "flex-row gap-6" : "flex-col -space-y-6"
                      }`}
                    >
                      {isTablet || isMobile ? (
                        <>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <Image
                              key={num}
                              src={`/rek${num}.png`}
                              alt={`logo${num}`}
                              width={90}
                              height={50}
                              className="object-contain transition-transform duration-300 hover:scale-110"
                            />
                          ))}
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  ) : (
                    <p
                      style={{
                        fontFamily: isTablet
                          ? "Noto Sans Armenian"
                          : isMobile
                          ? "Noto Sans Armenian"
                          : "GHEA Grapalat",
                        fontWeight: isTablet || isMobile ? 400 : 700,
                        fontStyle: isTablet || isMobile ? "normal" : "italic",
                        fontSize: isTablet ? 16 : isMobile ? 14 : 20,
                        lineHeight: isTablet ? "20px" : isMobile ? "18px" : "28px",
                        textAlign: isTablet ? "justify" : isMobile ? "center" : "justify",
                        width: isTablet ? 631 : isMobile ? 358 : 455,
                        height: isTablet ? 20 : isMobile ? 36 : 56,
                        opacity: 1,
                        whiteSpace: "pre-line",
                        transition: "opacity 0.5s ease",
                        color: "white",
                      }}
                    >
                      {currentSlide.redShapeText}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative z-30 flex flex-col justify-center pl-[96px] max-w-[1440px] w-full pb-[185px]">
                <h2
                  className={`text-white font-bold font-[GHEA Grapalat] ${
                    isTablet
                      ? "text-[28px] leading-[38px] w-[400px]"
                      : isMobile
                      ? "text-[24px] leading-[34px] w-[300px]"
                      : "text-[36px] leading-[48px] w-[525px]"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {currentSlide.mainTitle}
                </h2>
                <p
                  className={`text-white font-semibold mt-4 ${
                    isTablet ? "text-[20px]" : isMobile ? "text-[16px]" : "text-[24px]"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {currentSlide.mainSubtitle}
                </p>
                <button
                  className={`mt-6 bg-red-600 text-white rounded-lg w-fit ${
                    isTablet
                      ? "px-5 py-2 text-[16px]"
                      : isMobile
                      ? "px-4 py-2 text-[14px]"
                      : "px-6 py-3 text-[18px]"
                  }`}
                >
                  {currentSlide.buttonText}
                </button>
              </div>
            </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-40">
            {HERO_SLIDES.map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    transition-all duration-300 rounded-full
                    ${isActive 
                      ? "w-6 h-3 bg-white"
                      : "w-3 h-3 bg-white/40"}    // պասիվ → շրջան
                  `}
                />
              );
            })}
          </div>
          </section>
        );
      };

      export default HeroSection;
