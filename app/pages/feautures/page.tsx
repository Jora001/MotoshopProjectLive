/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, MOBILE_NAV_LINKS } from "@/constants/navlinks";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

export default function Header() {
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [open, setOpen] = useState(false); // popup state

  const pathname = usePathname();

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
    <>
      <header className="w-full">

        {/* TOP BAR */}
        <div className="w-full bg-[#000000] h-16 text-white px-4 py-2 flex items-center justify-between fixed top-0 z-50">

          <nav className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (

              link.label === "Փոխանակում" ? (

                <button
                  key={link.label}
                  onClick={() => setOpen(true)}
                  className="font-medium text-lg text-white"
                >
                  {link.label}
                </button>

              ) : (

                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-lg text-white"
                >
                  {link.label}
                </Link>

              )

            ))}
          </nav>

        </div>

      </header>
     
    </>
  );
}