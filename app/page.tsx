// import { PricingCards } from "@/src/components/cards/pricing/price-card";
import Image from "next/image";
// import PricingData from "@/src//data/pricing.json";
import Navbar from "@/src/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-4xl font-extrabold dark:text-white">
            MapleUI - SaaS Template
          </h2>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="#"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/assets/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/template-one"
              rel="noopener noreferrer"
            >
              Template One
            </a>
          </div>
          {/* <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
            {PricingData.pricingData.map((item, index) => (
              <PricingCards key={index} data={item} />
            ))}
          </div> */}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          &copy; Copyright {new Date().getFullYear()} All rights reserved
        </footer>
      </div>
    </>
  );
}
