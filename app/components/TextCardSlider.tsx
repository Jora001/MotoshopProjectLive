"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi"; // ✅ FIXED: hi (ոչ hi2)

const slides = [
  {
    title: "Motoshop Armenia-ի պատմությունը",
    text: `Motoshop Armenia-ն խանութ-արհեստանոցային հարթակ է, որը կենտրոնացած է
մոտոցիկլների, պահեստամասերի և համապատասխան հանդերձանքի վաճառքի և տեխնիկական
սպասարկման վրա։ Հիմնադրվել է 2012 թվականին՝ զարգացնելու մոտոցիկլային մշակույթը Հայաստանում
և լրացնելու ոլորտում առկա բացերը։`,
    image: "/abb888.png",
  },
  {
    title: "",
    text: `Տարիների ընթացքում Motoshop Armenia֊ն դարձել է վստահելի գործընկեր թե՛ պրոֆեսիոնալ մոտոսիրահարների, թե՛ նրանց համար, ովքեր մոտոցիկլը դիտարկում են որպես առօրյա փոխադրամիջոց կամ ազատության և ինքնաարտահայտման խորհրդանիշ։ Մեր նպատակն է առաջարկել ամբողջական և հուսալի ծառայություններ միաժամանակ ստեղծելով մասնագիտական և ջերմ համայնք օգտագործողների համար։`,
    image: "/abb888.png",
  },
];

export default function TextCardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indicatorWidth = 100 / slides.length;

  return (
    <div className="relative w-[720px] h-[400px] rounded-xl overflow-hidden shadow-xl text-white">
      {/* 🖼 BACKGROUND IMAGE */}
      <Image
        src={slides[activeIndex].image}
        alt={slides[activeIndex].title}
        fill
        priority
        className="object-cover"
      />


      {/* 📝 CONTENT */}
      <div className="relative z-20 p-6 h-full flex flex-col justify-center">
        {/* 🔴 SLIDING INDICATOR ABOVE TEXT */}
        <div className="w-[580px] h-[4px] bg-white mb-3 relative mx-auto overflow-hidden rounded-full">
          <div
            className="h-full bg-red-600 transition-all duration-500 absolute top-0"
            style={{
              width: `${indicatorWidth}%`,
              left: `${activeIndex * indicatorWidth}%`,
            }}
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <h2
            style={{
              fontFamily: "GHEA Grapalat, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "36px",
              lineHeight: "48px",
              letterSpacing: "-0.5%",
              width: "645px",
              height: "48px",
              opacity: 1,
              textAlign: "center",
            }}
          >
            {slides[activeIndex].title}
          </h2>

          {/* Text */}
          <p
            style={{
              fontFamily: "GHEA Grapalat, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0%",
              width: "580px",
              height: "168px",
              opacity: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {slides[activeIndex].text}
          </p>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-4 w-full">
          <button
            type="button"
            onClick={nextSlide}
            // className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Next slide"
          >
            <img
              src="/ajov.jpg"
              alt="Next slide"
              className={` transition-transform ${
                activeIndex === slides.length - 1
                  ? "rotate-180"
                  : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
