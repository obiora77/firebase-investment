"use client"

import { useState } from "react"

interface Investment {
  id: string
  planName: string
  amount: number
  monthlyReturn: number
  totalProfit: number
  investedDate: string
  returnRate: number
}

export default function PortfolioOverview() {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: "1",
      planName: "Standard Growth",
      amount: 5000,
      monthlyReturn: 250,
      totalProfit: 1200,
      investedDate: "2024-09-15",
      returnRate: 5,
    },
    {
      id: "2",
      planName: "Premium Plus",
      amount: 10000,
      monthlyReturn: 750,
      totalProfit: 3100,
      investedDate: "2024-08-01",
      returnRate: 9,
    },
  ])

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalProfit = investments.reduce((sum, inv) => sum + inv.totalProfit, 0)
  const monthlyIncome = investments.reduce((sum, inv) => sum + inv.monthlyReturn, 0)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Invested", value: `$${totalInvested.toLocaleString()}`, color: "bg-primary/10" },
          { label: "Total Profit", value: `$${totalProfit.toLocaleString()}`, color: "bg-accent/10" },
          { label: "Monthly Income", value: `$${monthlyIncome.toLocaleString()}`, color: "bg-chart-1/10" },
          {
            label: "Portfolio Value",
            value: `$${(totalInvested + totalProfit).toLocaleString()}`,
            color: "bg-chart-2/10",
          },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} rounded-lg p-6 border border-border`}>
            <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Active Investments */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Active Investments</h2>
        <div className="space-y-4">
          {investments.map((inv) => (
            <div
              key={inv.id}
              className="flex items-center justify-between p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{inv.planName}</h3>
                <p className="text-sm text-muted-foreground">
                  Invested on {new Date(inv.investedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold text-foreground">${inv.amount.toLocaleString()}</p>
                <p className="text-sm text-accent font-medium">+${inv.totalProfit.toLocaleString()} profit</p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-accent font-semibold">{inv.returnRate}% return</p>
                <p className="text-xs text-muted-foreground">${inv.monthlyReturn}/month</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profit Chart Section */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Profit Growth</h2>
        <div className="space-y-3">
          {investments.map((inv) => (
            <div key={inv.id}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{inv.planName}</span>
                <span className="text-sm text-accent font-semibold">
                  +{((inv.totalProfit / inv.amount) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((inv.totalProfit / inv.amount) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
