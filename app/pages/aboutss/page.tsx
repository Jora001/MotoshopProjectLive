"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[875px] flex items-center justify-center text-white overflow-hidden">
      
      {/* Նկարը */}
      <div className="absolute inset-0">
        <Image
          src="/crd.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(178.72deg, rgba(110, 107, 107, 0) 10.58%, #0A0A0A 95.52%)",
        }}
      />

      <div
        className="
          absolute 
          top-[320px] md:top-[420px] lg:top-[620px] 
          left-0 
          flex items-center 
          opacity-90
          w-[260px] h-[55px] 
          md:w-[500px] md:h-[70px]
          lg:w-[636px] lg:h-[78px]
        "
        style={{
          clipPath: "polygon(0 0, 80% 0%, 70% 100%, 0 100%)",
          background:
            "linear-gradient(90deg, rgba(181, 10, 30, 0.7) 0%, #D0051D 100%)",
        }}
      >
        <p
          className="
            text-white font-bold tracking-tight
            text-[20px] leading-[28px] pl-[24px]
            md:text-[30px] md:leading-[38px] md:pl-[160px]
            lg:text-[36px] lg:leading-[44px] lg:pl-[200px]
          "
          style={{
            fontFamily: "GHEA Grapalat, sans-serif",
            letterSpacing: "-0.5%",
            textAlign: "justify",
          }}
        >
          Մեր Մասին
        </p>
      </div>

      <div
        className="
          absolute 
          bottom-[40px] md:bottom-[100px] lg:bottom-[0px]
          right-0 
          flex items-center justify-center
          opacity-90
          w-[200px] h-[45px]
          md:w-[500px] md:h-[70px]
          lg:w-[636px] lg:h-[78px]
        "
        style={{
          clipPath: "polygon(100% 0, 20% 0%, 28% 100%, 100% 100%)",
          background:
            "linear-gradient(90deg, rgba(181, 10, 30, 0.7) 0%, #D0051D 100%)",
        }}
      >
        <p
          className="
            text-white font-bold tracking-tight text-center
            text-[11px] leading-[20px]
            md:text-[17px] md:leading-[24px]
            lg:text-[20px] lg:leading-[28px]
            translate-x-[28px] md:translate-x-[70px] lg:translate-x-[90px]
          "
          style={{
            fontFamily: "GHEA Grapalat, sans-serif",
            letterSpacing: "-0.5%",
          }}
        >
          Ճանապարհը բացում է նոր հորxիզոններ
        </p>
      </div>
    </section>

      <p>Hello</p>
    </div>
  );
};

export default AboutPage;
