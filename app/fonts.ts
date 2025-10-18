// app/fonts.ts
import localFont from "next/font/local";

export const grapalat = localFont({
  src: [
    {
      path: "/fonts/GHEAGrapalat.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/GHEAGrapalat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grapalat",
  display: "swap",
});
