"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Chat from "@/app/components/chat/Chat";
import { WishlistProvider } from "@/app/context/WishlistContext";
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
          {/* ✅ WISHLIST PROVIDER — GLOBAL */}
          <WishlistProvider>

            {/* HEADER */}
            <Header />

            {/* PAGE CONTENT */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[2000px]">
                <main className="text-black dark:text-gray-200">
                  {children}
                </main>
              </div>
            </div>

            {/* CHAT */}
            <div className="fixed right-4 z-50">
              <Chat />
            </div>

            {/* FOOTER */}
            <Footer />

          </WishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
