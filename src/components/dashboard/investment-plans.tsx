"use client"

import { useState } from "react"
import DepositModal from "./deposit-modal"

interface Plan {
  id: string
  name: string
  description: string
  minDeposit: number
  maxDeposit: number
  monthlyReturn: number
  riskLevel: "Low" | "Medium" | "High"
  duration: string
}

export default function InvestmentPlans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [showModal, setShowModal] = useState(false)

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter Plan",
      description: "Perfect for beginners looking to start their investment journey",
      minDeposit: 500,
      maxDeposit: 5000,
      monthlyReturn: 5,
      riskLevel: "Low",
      duration: "12 months",
    },
    {
      id: "standard",
      name: "Standard Growth",
      description: "Balanced approach for steady growth and moderate returns",
      minDeposit: 1000,
      maxDeposit: 25000,
      monthlyReturn: 7,
      riskLevel: "Medium",
      duration: "12 months",
    },
    {
      id: "premium",
      name: "Premium Plus",
      description: "For experienced investors seeking higher returns",
      minDeposit: 5000,
      maxDeposit: 100000,
      monthlyReturn: 9,
      riskLevel: "High",
      duration: "12 months",
    },
  ]

  const handleDeposit = (plan: Plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition"
          >
            <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Return</p>
                  <p className="text-2xl font-bold text-accent">{plan.monthlyReturn}%</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Min Deposit</p>
                    <p className="font-semibold">${plan.minDeposit.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Max Deposit</p>
                    <p className="font-semibold">${plan.maxDeposit.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Risk Level</p>
                    <p
                      className={`font-semibold ${
                        plan.riskLevel === "Low"
                          ? "text-green-600 dark:text-green-400"
                          : plan.riskLevel === "Medium"
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {plan.riskLevel}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Duration</p>
                    <p className="font-semibold">{plan.duration}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDeposit(plan)}
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && <DepositModal plan={selectedPlan} isOpen={showModal} onClose={() => setShowModal(false)} />}
    </>
  )
}
