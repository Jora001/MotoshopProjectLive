'use client';

import { usePathname } from "next/navigation";

export default function NavPage() {
  const pathname = usePathname();
  const title = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {`${title} page`}
      </main>

    </div>

  );
}