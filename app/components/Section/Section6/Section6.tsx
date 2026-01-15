"use client";

import React from "react";
import Image from "next/image";

const Section6 = () => {
  const cards = [
    {
      text: "Աշխատակիցները շատ հոգատար ու համբերատար էին։ Պատասխանեցին բոլոր հարցերիս և նույնիսկ օգտակար խորհուրդներ տվեցին, նախքան իմ առաջին վարելը։ Ամբողջ ընթացքում ինձ իսկապես աջակցված զգացի։",
      name: "Դավիթ Արամյան",
      job: "Մոտոցիկլասեր",
      img: "/rev1.jpg",
    },
    {
      text: "Այստեղից գնած մոտոցիկլի հանդերձանքը հենց այնպիսին էր, ինչպես նկարագրված էր․ ամուր, բարձրորակ ու ոճային։ Այն գերազանցեց իմ սպասումները և վստահություն տվեց ճանապարհին։",
      name: "Լիլիթ Հակոբյան",
      job: "Ճանապարհորդող / բլոգեր",
      img: "/rev2.jpg",
    },
    {
      text: "Կայքում փնտրելուց մինչև պատվերը ստանալը ամեն ինչ հեշտ ու հաճելի էր։ Շատ հազվադեպ է լինում խանութ, որ այսքան լավ ապրանքները համատեղի նման լավ փորձառության հետ։",
      name: "Անանուն օգտատեր",
      job: "",
      img: "/rev3.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 sm:py-16 md:py-20">
      {/* Background */}
      <Image
        src="/tra.jpg"
        alt="Section 6 Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Title */}
     <div className="relative z-10 w-full max-w-[1440px] mx-auto border-b border-[#2E2E2E] px-6 sm:px-8 md:px-[64px] xl:px-[96px] pb-6 md:pb-[20px]">
  <h2
    className="text-white font-bold text-[24px] sm:text-[32px] md:text-[40px] xl:text-[44px] leading-tight"
    style={{ fontFamily: 'GHEA Grapalat' }}
  >
    Կարծիքներ և փորձառություններ
  </h2>
</div>


      {/* Cards */}
      <div
        className="
        relative z-10 
        mt-10 sm:mt-12 md:mt-[48px] 
        max-w-[1440px] mx-auto 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 sm:gap-8 md:gap-10 
        px-6 sm:px-8 md:px-[64px] xl:px-[96px]
      "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[24px] p-5 sm:p-6 md:p-8 flex flex-col justify-start items-start bg-gradient-to-b from-white/20 to-neutral-400/20 backdrop-blur-sm"
          >
            {/* Quote icon */}
            <div className="w-[48px] sm:w-[60px] h-[48px] sm:h-[60px] mb-4 sm:mb-6">
              <Image
                src="/Icons.png"
                alt="Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p
              className="text-white text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-semibold mb-6 md:mb-[24px]"
              style={{ fontFamily: "GHEA Grapalat" }}
            >
              {card.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p
                  className="text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] leading-[26px] sm:leading-[28px] md:leading-[32px]"
                  style={{ fontFamily: "GHEA Grapalat" }}
                >
                  {card.name}
                </p>
                {card.job && (
                  <p
                    className="text-white/90 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[20px]"
                    style={{ fontFamily: "Noto Sans Armenian" }}
                  >
                    {card.job}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="relative z-10 mt-10 sm:mt-12 md:mt-[48px] flex justify-center">
        <button className="w-[180px] sm:w-[198px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[56px] bg-white text-[#D0021B] rounded-[12px] sm:rounded-[16px] font-bold text-[14px] sm:text-[15px] md:text-[16px] flex items-center justify-center px-6 py-2 hover:bg-[#f5f5f5] transition">
          Թողնել կարծիք
        </button>
      </div>
    </section>
  );
};

export default Section6;
