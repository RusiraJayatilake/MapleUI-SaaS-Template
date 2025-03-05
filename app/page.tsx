import Navbar from "@/src/components/navbar/navbar";
import PricingData from "@/src//data/pricing.json";
import { PricingCards } from "@/src/components/cards/pricing/price-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="mb-4 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Pricing Plans
            </h1>

            <div className="mb-2 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center">
            {PricingData.pricingData.map((item, index) => (
              <PricingCards key={index} data={item} />
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          &copy; Copyright {new Date().getFullYear()} All rights reserved
        </footer>
      </div>
    </>
  );
}
