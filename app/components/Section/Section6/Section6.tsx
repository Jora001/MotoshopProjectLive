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
      name: "ԱՆանուն օգտատեր",
      job: "",
      img: "/rev2.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Image
        src="/tra.jpg"
        alt="Section 5 Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-[1440px] h-[196px] flex items-end px-6 md:px-[96px] pt-[40px] pb-[20px] border-b border-[#2E2E2E] mx-auto">
        <h2
          className="text-white font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[58px]"
          style={{ fontFamily: "GHEA Grapalat", letterSpacing: "-1%" }}
        >
          Արհեստանոց և սպասարկում
        </h2>
      </div>

      <div className="relative z-10 mt-12 md:mt-[48px] max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8 px-6 md:px-[96px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[384px] h-[480px] rounded-[24px] flex flex-col justify-start items-start p-6 md:p-[24px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(153, 153, 153, 0.2) 100%)",
            }}
          >
            <div className="w-[60px] h-[60px] mb-6 md:mb-[24px]">
              <Image
                src="/icons.png"
                alt="Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="w-full h-[224px] rounded-[8px] flex flex-col justify-center items-start text-left px-4 py-3 mb-6 md:mb-[24px]">
              <p
                className="font-bold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#ffffff]"
                style={{ fontFamily: "GHEA Grapalat" }}
              >
                {card.text}
              </p>
            </div>

            <div className="w-full flex items-center gap-6 mt-auto">
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
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
                  className="text-[20px] md:text-[23px] leading-[28px] md:leading-[32px] text-white font-bold"
                  style={{ fontFamily: "GHEA Grapalat", letterSpacing: "-0.5%" }}
                >
                  {card.name}
                </p>
                {card.job && (
                  <p
                    className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] text-white opacity-90"
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

      <div className="relative z-10 mt-12 md:mt-[48px] flex justify-center">
        <button className="w-[198px] md:w-[220px] h-[48px] md:h-[56px] bg-white text-[#D0021B] rounded-[16px] font-bold text-[16px] md:text-[16px] flex items-center justify-center px-6 py-2 md:px-[24px] md:py-[16px] hover:bg-[#f5f5f5] transition">
          թողնել կարծիք
        </button>
      </div>
    </section>
  );
};

export default Section6;
