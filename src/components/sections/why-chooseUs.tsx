"use client"

import { FaChartLine, FaWallet, FaLock, FaUsers, FaCreditCard, FaRocket } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               {
                  title: "Multiple Investment Plans",
                  description:
                     "Choose from conservative to aggressive investment strategies tailored to your goals.",
                  icon: <FaChartLine className="h-6 w-6 text-primary" />,
               },
               {
                  title: "Real-Time Portfolio Tracking",
                  description:
                     "Monitor your investments and profits in real-time with detailed analytics.",
                  icon: <FaWallet className="h-6 w-6 text-primary" />,
               },
               {
                  title: "Transparent & Secure",
                  description:
                     "Full transparency on fees and returns. Your funds are secured with bank-level encryption.",
                  icon: <FaLock className="h-6 w-6 text-primary" />,
               },
               {
                  title: "Expert Support",
                  description: "24/7 customer support and personalized investment recommendations.",
                  icon: <FaUsers className="h-6 w-6 text-primary" />,
               },
               {
                  title: "Flexible Deposits",
                  description: "Easy deposit and withdrawal options with no hidden fees or minimum lock-in.",
                  icon: <FaCreditCard className="h-6 w-6 text-primary" />,
               },
               {
                  title: "Automated Growth",
                  description:
                     "Your profits automatically reinvest to accelerate compound growth.",
                  icon: <FaRocket className="h-6 w-6 text-primary" />,
               },
            ].map((feature, i) => (
               <div
                  key={i}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition"
               >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary/5">
                     {feature.icon}
                  </div>
                  <h3 className="text-lg font-semiBold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
               </div>
            ))}
         </div>
      </div>
    </section>
  )
}
