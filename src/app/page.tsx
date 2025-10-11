import { Hero } from "@/components/sections/hero";
import { CryptoTicker } from "@/components/sections/crypto-ticker";
import { PlansSummary } from "@/components/sections/plans-summary";
import { AboutSummary } from "@/components/sections/about-summary";
import { Testimonials } from "@/components/sections/testimonials";
import { MarketChart } from "@/components/sections/market-chart";

export default function Home() {
  return (
    <>
      <Hero />
      <CryptoTicker />
      <MarketChart />
      <PlansSummary />
      <AboutSummary />
      <Testimonials />
    </>
  );
}
