
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = ["/first.jpg", "/crd.jpg", "/first.jpg"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section     className="relative w-full min-h-[815px] top-30 flex justify-center overflow-hidden bg-black">

<div className="absolute inset-0 w-full h-full z-10 transition-all duration-500 xl:translate-x-80">
  {heroImages.map((src, index) => (
    <div
      key={index}
     className={`absolute top-10 transition-opacity duration-700 
              ${currentIndex === index ? "opacity-100" : "opacity-0"} 
               xl:min-w-[819px]  w-full h-full`}
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


      <div className="hidden xl:flex absolute inset-0 z-20">
        <div
          className="absolute top-0 left-0 h-full bg-black"
          style={{
            width: "55%",
            clipPath: "polygon(79% 0%, 100% 46%, 79% 100%, 0 100%, 0 0)",
          }}
        >
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
          <div
            className="absolute"
            style={{
              top: "76%",
              width: "70%",
              height: "16%",
              background: "linear-gradient(90deg, #D0021B 0%, #9F0115 100%)",
              clipPath: "polygon(100% 0%, 90% 100%, 0 100%, 0 0)",
              zIndex: 15,
            }}
          />
        </div>

        <div className="relative z-30 flex flex-col justify-center pl-[55px] max-w-[1440px] w-full pb-[185px]">
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

      <div className="flex xl:hidden flex-col absolute inset-0 z-20">
        <div
          className="absolute top-0 left-0 h-full bg-black"
          style={{
            width: "70%",
            clipPath: "polygon(0 0, 15% 0, 80% 100%, 0% 100%)",
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

        <div
          className="absolute"
          style={{
            width: "268px",
            height: "333px",
            left: "-80px",
            transform: "rotate(-3.1deg)",
            background:
              "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 49.18%, rgba(176, 0, 0, 0) 94.41%)",
            clipPath: "polygon(43% 0, 50% 0, 68% 93%, 60% 88%)",
          }}
        />

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 px-4">
          <h4 className="text-white font-bold text-[23px] leading-[32px] font-[GHEA Grapalat] w-[285px]">
            Ազատությունը սկսվում է <br /> ճանապարհից
          </h4>
          <p className="text-white font-semibold text-[13px] leading-[20px] font-[Noto Sans Armenian] mt-2 w-[185px]">
            Ուժ և վերահսկում՝ <br /> ցանկացած ճանապարհին
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm mt-4">
            Դիտել տեսականին
          </button>
        </div>

        <div
          className="absolute flex justify-center items-center gap-4 w-full"
          style={{
            top: "720px",
            height: "50px",
            backgroundColor: "#850112",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
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























































// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const heroImages = ["/first.jpg", "/crd.jpg", "/first.jpg"];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Ավտոմատ slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-[815px] top-22 flex justify-center overflow-hidden bg-black">
//       {/* --- Hero Images (slide) --- */}
//       <div className="absolute inset-0 w-full h-full z-10 transition-all duration-500 xl:translate-x-80">
//         {heroImages.map((src, index) => (
//           <div
//             key={index}
//             className={`absolute top-10 transition-opacity duration-700 ${
//               currentIndex === index ? "opacity-100" : "opacity-0"
//             } xl:min-w-[819px] w-full h-full`}
//             style={{ height: "100%" }}
//           >
//             <Image
//               src={src}
//               alt={`Hero ${index + 1}`}
//               fill
//               className="object-cover"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* --- Desktop Layout (≥1440px) --- */}
//       <div className="hidden xl:flex absolute inset-0 z-20">
//         {/* Սև polygon */}
//         <div
//           className="absolute top-0 left-0 h-full bg-black"
//           style={{
//             width: "55%",
//             clipPath: "polygon(79% 0%, 100% 46%, 79% 100%, 0 100%, 0 0)",
//           }}
//         >
//           {/* Մոխրագույն շեյփ */}
//           <div
//             className="absolute"
//             style={{
//               top: "13%",
//               left: "-5%",
//               width: "30%",
//               height: "83%",
//               background: "#4A4A4ACC",
//               clipPath: "polygon(23% 12.25%, 23% 30.25%, 95% 95%)",
//               zIndex: 10,
//             }}
//           />
//           {/* Փոքր կարմիր գծիկ */}
//           <div
//             className="absolute"
//             style={{
//               top: "43%",
//               left: "98%",
//               width: "50%",
//               height: "4%",
//               background:
//                 "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 59.18%, rgba(176, 0, 0, 0) 99.41%)",
//               transform: "rotate(-113.97deg)",
//               zIndex: 20,
//             }}
//           />
//           {/* Հորիզոնական կարմիր շեյփ */}
//           <div
//             className="absolute"
//             style={{
//               top: "76%",
//               width: "70%",
//               height: "16%",
//               background: "linear-gradient(90deg, #D0021B 0%, #9F0115 100%)",
//               clipPath: "polygon(100% 0%, 90% 100%, 0 100%, 0 0)",
//               zIndex: 15,
//             }}
//           />
//         </div>

//         {/* Տեքստային բլոկ */}
//         <div className="relative z-30 flex flex-col justify-center pl-[55px] max-w-[1440px] w-full pb-[185px]">
//           <h2 className="text-white font-bold text-[36px] leading-[48px] w-[525px] font-[GHEA Grapalat]">
//             Ազատությունը սկսվում է <span className="block">ճանապարհից</span>
//           </h2>
//           <p className="text-white text-[24px] font-semibold mt-4">
//             Ուժ և վերահսկում՝ ցանկացած ճանապարհին
//           </p>
//           <button className="px-6 py-3 mt-6 bg-red-600 text-white rounded-lg w-fit">
//             Դիտել տեսականին
//           </button>
//         </div>
//       </div>

//       {/* --- Tablet + Mobile Layout (<1440px) --- */}
//       <div className="flex xl:hidden flex-col absolute inset-0 z-20">
//         {/* Սև polygon */}
//         <div
//           className="absolute top-0 left-0 h-full bg-black"
//           style={{
//             width: "70%",
//             clipPath: "polygon(0 0, 15% 0, 80% 100%, 0% 100%)",
//           }}
//         >
//           {/* Silver overlay */}
//           <div
//             className="absolute"
//             style={{
//               width: "400px",
//               height: "350px",
//               top: "380px",
//               backgroundColor: "silver",
//               clipPath: "polygon(0 65%, 0 40%, 22% 100%, 20% 100%)",
//               zIndex: 20,
//             }}
//           />
//         </div>

//         {/* Կարմիր թեք շեյփ */}
//         <div
//           className="absolute"
//           style={{
//             width: "268px",
//             height: "333px",
//             left: "-80px",
//             transform: "rotate(-3.1deg)",
//             background:
//               "linear-gradient(269.77deg, rgba(176, 0, 0, 0) 3.95%, #B00000 49.18%, rgba(176, 0, 0, 0) 94.41%)",
//             clipPath: "polygon(43% 0, 50% 0, 68% 93%, 60% 88%)",
//           }}
//         />

//         {/* Տեքստային բլոկ */}
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 px-4">
//           <h4 className="text-white font-bold text-[23px] leading-[32px] font-[GHEA Grapalat] w-[285px]">
//             Ազատությունը սկսվում է <br /> ճանապարհից
//           </h4>
//           <p className="text-white font-semibold text-[13px] leading-[20px] font-[Noto Sans Armenian] mt-2 w-[185px]">
//             Ուժ և վերահսկում՝ <br /> ցանկացած ճանապարհին
//           </p>
//           <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm mt-4">
//             Դիտել տեսականին
//           </button>
//         </div>

//         {/* Ներքևի logos */}
//         <div
//           className="absolute flex justify-center items-center gap-4 w-full"
//           style={{
//             top: "720px",
//             height: "50px",
//             backgroundColor: "#850112",
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//           }}
//         >
//           {[1, 2, 3, 4, 5, 6].map((num) => (
//             <Image
//               key={num}
//               src={`/rek${num}.png`}
//               alt={`photo${num}`}
//               width={50}
//               height={30}
//               className="object-contain transition-transform duration-300 hover:scale-110"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
//         {heroImages.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
//               currentIndex === index ? "bg-gray-400 w-5" : "bg-gray-400 w-3"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
