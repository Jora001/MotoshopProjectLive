"use client";
import * as React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <main className="w-full text-white overflow-hidden">
      <section className="relative w-full min-h-[600px] lg:h-[875px] flex items-center justify-center overflow-hidden">
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
          className="absolute top-[320px] md:top-[420px] lg:top-[620px] left-0 flex items-center opacity-90 w-[260px] h-[55px] md:w-[500px] md:h-[70px] lg:w-[636px] lg:h-[78px]"
          style={{
            clipPath: "polygon(0 0, 80% 0%, 70% 100%, 0 100%)",
            background:
              "linear-gradient(90deg, rgba(181, 10, 30, 0.7) 0%, #D0051D 100%)",
          }}
        >
          <p
            className="text-white font-bold tracking-tight text-[20px] leading-[28px] pl-[24px] md:text-[30px] md:leading-[38px] md:pl-[160px] lg:text-[36px] lg:leading-[44px] lg:pl-[200px]"
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
          className="absolute bottom-[40px] md:bottom-[100px] lg:bottom-[0px] right-0 flex items-center justify-center opacity-90 w-[200px] h-[45px] md:w-[500px] md:h-[70px] lg:w-[636px] lg:h-[78px]"
          style={{
            clipPath: "polygon(100% 0, 20% 0%, 28% 100%, 100% 100%)",
            background:
              "linear-gradient(90deg, rgba(181, 10, 30, 0.7) 0%, #D0051D 100%)",
          }}
        >
          <p
            className="text-white font-bold tracking-tight text-center text-[11px] leading-[20px] md:text-[17px] md:leading-[24px] lg:text-[20px] lg:leading-[28px] translate-x-[28px] md:translate-x-[70px] lg:translate-x-[90px]"
            style={{
              fontFamily: "GHEA Grapalat, sans-serif",
              letterSpacing: "-0.5%",
            }}
          >
            Ճանապարհը բացում է նոր հորիզոններ
          </p>
        </div>
      </section>

      <div className="w-full flex items-center justify-center bg-[#D0051D] h-[34px] md:h-[52px] lg:h-[64px]">
        <Image
          src="/vectortw.png"
          alt="Scroll down"
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      <section className="relative w-full min-h-[500px] lg:h-[780px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ab2sec.png"
            alt="About section background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, #0A0A0A 95%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 gap-6 md:gap-10">
          <div className="relative flex justify-center items-center">
            {/* Նկարը */}
            <div className="w-[280px] h-[160px] sm:w-[420px] sm:h-[240px] md:w-[550px] md:h-[300px] lg:w-[700px] lg:h-[429px] rounded-[10px] overflow-hidden shadow-lg transform lg:-translate-y-[130px] lg:-translate-x-[350px]">
              <Image
                src="/xanut.jpg"
                alt="Inner section image"
                width={700}
                height={429}
                className="object-cover w-full h-full"
              />
            </div>

            <div
              className="hidden lg:block absolute rounded-[10px]"
              style={{
                width: "700px",
                height: "400px",
                right: "-200px",
                bottom: "-120px",
                backgroundImage: "url('/abb888.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div
              className="absolute hidden lg:flex flex-col justify-center items-center text-center"
              style={{
                width: "640px",
                height: "400px",
                right: "-170px",
                bottom: "-110px",
                pointerEvents: "none",
              }}
            >
              <p
                className="text-white text-center mb-4"
                style={{
                  fontFamily: "GHEA Grapalat, sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "48px",
                }}
              >
                Motoshop Armenia-ի պատմությունը
              </p>

              <p
                className="text-white text-justify"
                style={{
                  fontFamily: "GHEA Grapalat, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
              >
                Motoshop Armenia-ն խանութ-արհեստանոցային հարթակ է, որը
                կենտրոնացած է մոտոցիկլների, պահեստամասերի և համա- պատասխան
                հանդերձանքի վաճառքի և տեխնիկական սպասարկման վրա։ Հիմնադրվել է
                2012 թվականին՝ զարգացնելու մոտոցիկլային մշակույթը Հայաստանում և
                լրացնելու ոլորտում առկա բացերը։
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:hidden text-center md:text-justify mt-6 md:mt-8 max-w-[90%]">
            <p
              className="text-white font-bold mb-3 text-[22px] sm:text-[26px] md:text-[30px]"
              style={{
                fontFamily: "GHEA Grapalat, sans-serif",
              }}
            >
              Motoshop Armenia-ի պատմությունը
            </p>
            <p
              className="text-white text-[15px] sm:text-[17px] md:text-[18px] leading-[24px]"
              style={{
                fontFamily: "GHEA Grapalat, sans-serif",
              }}
            >
              Motoshop Armenia-ն խանութ-արհեստանոցային հարթակ է, որը
              կենտրոնացած է մոտոցիկլների, պահեստամասերի և համապատասխան
              հանդերձանքի վաճառքի և տեխնիկական սպասարկման վրա։ Հիմնադրվել է
              2012 թվականին՝ զարգացնելու մոտոցիկլային մշակույթը Հայաստանում և
              լրացնելու ոլորտում առկա բացերը։
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
