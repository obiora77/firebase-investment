"use client"

import { Hero } from "@/components/sections/hero";
import { CryptoTicker } from "@/components/sections/crypto-ticker";
import { PlansSummary } from "@/components/sections/plans-summary";
import { AboutSummary } from "@/components/sections/about-summary";
import { Testimonials } from "@/components/sections/testimonials";
import { MarketChart } from "@/components/sections/market-chart";
import CtaSection from "@/components/sections/cta-section";
import WhyChooseUs  from "@/components/sections/why-chooseUs"

export default function landingPage () {
  return (
    <>
      <Hero />
      <CryptoTicker />
      <MarketChart />
      <PlansSummary />
      <AboutSummary />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </>
  )
}
