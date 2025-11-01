"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, MOBILE_NAV_LINKS } from "@/constants/navlinks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// import WishIcon from "@/public/icons/wish-list.svg";


const menuVariants = {
  hidden: { x: "-100%" },  // start off-screen to the left
  visible: { x: 0 },       // slide in to full view
  exit: { x: "-100%" },    // slide out to the left
};


export default function Header() {
  const pathname = usePathname();

  const [showBottomBar, setShowBottomBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const goingUp = currentScroll < lastScrollY || currentScroll < 10;
      setShowBottomBar(goingUp);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMounted]);

  if (!isMounted) return null;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#0A0A0A] h-16 text-white px-4 py-2 md:h-18 md:px-8 md:pt-[14px] md:pb-[10px] 2xl:pt-[54px] 2xl:pb-5 2xl:h-[110px] 2xl:px-5 2xl:px-24 flex items-center justify-between  shadow-md fixed top-0 z-50 transition-transform duration-300">
        <div className="p-[6px] 2xl:hidden">
          <button className="relative h-9 w-9 2xl:hidden"
            onClick={() => setMobileMenuOpen(true)}>
            <Image
              src="/icons/burger-menu.svg"
              alt="burger-menu"
              fill
              className="object-contain"
              priority
            />
          </button>

        </div>

        <div className="hidden 2xl:flex">
          <nav className="flex items-center ">
            {NAV_LINKS.map((link) => (
              <div className="px-[6px]  2xl:px-[10px]" key={link.label}>
                <div className={`border-b-2 border-transparent ${link.label === "Ապառիկ" ? "hover:border-[#FFC107]" : "hover:border-white"} cursor-pointer py-2`}>
                  <Link
                    href={link.href}
                    className={`font-semibold text-[14px] transition-colors ${link.label === "Ապառիկ" ? "text-[#FFC107]" : "text-[#F5F5F5] "}  
                  }`}
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-3 h-10 flex items-center align-center justify-center md:hidden z-20">
          <div className="relative h-10 w-18">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0  flex items-center  z-20 2xl:h-30 2xl:top-[-24px]">
          <div className="flex items-center justify-center h-16 w-[234px] 2xl:h-[134px] 2xl:w-[175px] px-8 py-2 bg-white"
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            }}
          >
            <div
              className="relative h-[53px] w-24 2xl:h-20 2xl:w-36 bg-white "
            >
              <Image
                src="/icons/logo-desktop.svg"
                alt="logo"
                fill
                className="object-contain "
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 md:gap-6 2xl:gap-10 hover:color-red-400 2xl:pb-5">
          <div className="flex items-center px-[2px] md:px-[5px] 2xl:px-[10px]">
            <div className="relative h-6 w-6 md:h-[30px] md:w-[30px] 2xl:h-7 2xl:w-7">
              <Image
                src="/icons/language.svg"
                alt="language"
                fill
                className="object-contain cursor-pointer"
                priority
              />
            </div>
          </div>
          <div className="relative h-8 w-8 md:h-10 md:w-10 2xl:hidden cursor-pointer">
            <Image
              src="/icons/sign-up.svg"
              alt="sign-up"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </div>
          <div className="relative hidden bg-white h-11 rounded-xl px-4 py-[10px] 2xl:flex cursor-pointer hover:bg-[#D0021B]">
            <div className="text-[#0A0A0A] text-base " >
              Մուտք
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`w-full bg-gradient-to-r from-[#0A0A0A] to-[#4A4A4A] flex items-center justify-between px-4 py-[14px] md:px-8 2xl:px-24 2xl:h-16 shadow-md
        fixed top-16 md:top-18 2xl:top-[110px] z-40 backdrop-blur-md transition-transform duration-300 ${showBottomBar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="relative flex items-center h-7 md:h-10 2xl:h-11 w-[115px] md:w-70 rounded-lg md:rounded-[10px] 2xl:rounded-xl border border-[#F5F5F5]  ">
          <div className="pl-2 md:pl-4">
            <div className="relative h-3 w-3 ">
              <Image
                src="/icons/search.svg"
                alt="Search"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="text-[#E0E0E0] text-[8px] md:text-xs w-full pl-2 md:pl-3 bg-transparent outline-none">
            Որոնել ...
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 h-6 w-18 md:h-10 md:w-30">
          <Image
            src="/icons/logo-2.svg"
            alt="Hayasa Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex gap-[15.5px] md:gap-3 2xl:gap-6 items-center">
          <div className="p-[2px] md:p-[5px] cursor-pointer">
            <div className="relative h-6 w-6 md:h-[30px] md:w-[30px] 2xl:h-7 2xl:w-7">
              <Image
                src="/icons/compair.svg"
                alt="compair"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="p-[2px] md:p-[5px] cursor-pointer">
            <div className="relative h-6 w-6 md:h-[30px] md:w-[30px] 2xl:h-7 2xl:w-7">
              <Image
                src="/icons/wish-list.svg"
                alt="wish-list"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="p-[2px] md:p-[5px] cursor-pointer">
            <div className="relative h-6 w-6 md:h-[30px] md:w-[30px] 2xl:h-7 2xl:w-7">
              <Image
                src="/icons/trash.svg"
                alt="trash"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Burger Manu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed top-0 left-0 h-full w-full z-[200] bg-white flex flex-col gap-8 overflow-y-auto max-h-screen"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-8 md:pt-8">
              <div className="relative h-10 w-18 md:h-[53px] md:w-24">
                <Image
                  src="/icons/logo-desktop.svg"
                  alt="logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-6 w-6 md:h-10 md:w-10 p-[2px] md:p-[5px]">
                <button
                  className="relative h-full w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/icons/close.svg"
                    alt="close"
                    fill
                    className="object-contain"
                    priority
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              {MOBILE_NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="flex flex-col border-b border-b-[#E0E0E0]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="">
                    <div className="flex justify-between items-center px-4 py-5 md:px-8 md:py-[21px] gap-3 cursor-pointer">
                      <Link
                        href={link.href}
                        className={`font-medium md:font-semibold text-lg transition-colors ${pathname === link.href
                          } ${link.label === "Ապառիկ" ? "text-[#D0021B]" : ""}`}
                      >
                        {link.label}
                      </Link>

                      {link.icon && (
                        <div key={link.label} className="relative h-8 w-8 md:h-11 md:w-11 p-[6px]">
                          <div className="relative w-full h-full">
                            <Image
                              src={`/icons/mobile-menu-${link.icon}.svg`}
                              alt={`${link.label} icon`}
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {"products" in link && (
                    <div className="flex flex-col justify-between gap-1">
                      {link.products.map((product) => (
                        <div
                          key={product.label}
                          className="flex items-center justify-between px-4 py-5 md:px-8 md:py-[38px] border-b border-t border-b-[#F5F5F5] border-t-[#F5F5F5]"
                        >
                          <Link
                            href={product.href}
                            className="text-gray-600 hover:text-orange-600 font-normal text-sm md:text-base"
                          >
                            {product.label}
                          </Link>
                          <div className="relative h-[50px] w-[50px] md:h-20 md:w-20">
                            <div className="relative w-full h-full">
                              <Image
                                src={`/icons/mobile-menu-product-${product.icon}.svg`}
                                alt={`${product.label} icon`}
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}