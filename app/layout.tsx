"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


import Chat from "@/app/components/chat/Chat";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header — ամբողջ լայնությամբ, կոնտեյներից դուրս */}
          <Header />

          {/* Կենտրոնացված կոնտեյներ */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[2000px]">
              <main className="text-black dark:text-gray-200">{children}</main>
            </div>
          </div>

          {/* Chat — fixed աջ կողմում */}
          <div className="fixed right-4 z-50">
            <Chat />
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}