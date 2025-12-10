"use client";

import Image from "next/image";
import { FOOTER_RESOURCES_LINKS } from "@/constants/navlinks";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      className="bg-cover bg-center bg-no-repeat text-white px-4 py-8 md:p-8 2xl:px-24 2xl:py-13"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap">
        {FOOTER_RESOURCES_LINKS.map((section) => (
          <div key={section.title} className="w-1/2 md:w-1/4 mb-8 px-2">
              <div className="inline-block border-b border-[#F5F5F5]">
                <h3 className="text-sm 2xl:text-2xl font-semibold 2xl:font-bold py-1">
                  {section.title}
                </h3>
              <div/>
          </div>
          

            <div className="space-y-2 mt-2">
              {section.content.map((item, idx) => {
                const isPayment = item.label === "Վճարման եղանակներ";

                return (
                  <div
                    key={idx}
                    className={`text-xs 2xl:text-base py-1 gap-2
                      ${isPayment ? "flex flex-col items-start" : "flex items-center"}
                    `}
                  >
                    {section.title === "Հետադարձ կապ" && item.icon && (
                      Array.isArray(item.icon) ? (
                        <div className="flex gap-2">
                          {item.icon.map((icon) => (
                            <div className="relative w-6 h-6 2xl:w-12 2xl:h-12" key={icon}>
                              <Image
                                src={`/icons/${icon}.svg`}
                                alt={icon}
                                fill
                                className="object-cover"
                                priority
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative w-6 h-6 2xl:w-8 2xl:h-8">
                          <Image
                            src={`/icons/${item.icon}.svg`}
                            alt={item.icon}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      )
                    )}
                    {item.label && !Array.isArray(item.label) && (
                      <a href={item.href} className="hover:underline">
                        {item.label}
                      </a>
                    )}

                    {Array.isArray(item.label) && (
                      <div className="flex flex-col">
                        {item.label.map((text) => (
                          <p key={text}>{text}</p>
                        ))}
                      </div>
                    )}

                    {section.title !== "Հետադարձ կապ" && item.icon && (
                      <div
                        className={`
                          ${isPayment ? "flex gap-3 pt-1" : "flex items-center gap-2"}
                        `}
                      >
                        {Array.isArray(item.icon) ? (
                          item.icon.map((icon) => (
                            <div
                              className="relative w-6 h-6 2xl:w-12 2xl:h-12"
                              key={icon}
                            >
                              <Image
                                src={`/icons/${icon}.svg`}
                                alt={icon}
                                fill
                                className="object-cover"
                                priority
                              />
                            </div>
                          ))
                        ) : (
                          <div className="relative w-[86px] 2xl:w-29 h-20 2xl:h-28">
                            <Image
                              src={`/icons/${item.icon}.svg`}
                              alt={item.icon}
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <div className="relative hidden md:flex md:w-[342px] md:h-15 2xl:w-110 2xl:h-20">
          <Image
            src={`/icons/footer_bottom.svg`}
            alt="footer_bottom"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative flex w-45 h-[38px] md:hidden">
          <Image
            src={`/icons/footer_bottom_mobile.svg`}
            alt="footer_bottom"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
