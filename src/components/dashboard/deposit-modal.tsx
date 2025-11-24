"use client"

import type React from "react"

import { useState } from "react"

interface Plan {
  id: string
  name: string
  minDeposit: number
  maxDeposit: number
  monthlyReturn: number
}

interface DepositModalProps {
  plan: Plan
  isOpen: boolean
  onClose: () => void
}

export default function DepositModal({ plan, isOpen, onClose }: DepositModalProps) {
  const [amount, setAmount] = useState(plan.minDeposit.toString())
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setAmount(plan.minDeposit.toString())
    }, 2000)
  }

  const depositAmount = Number.parseFloat(amount)
  const monthlyProfit = (depositAmount * plan.monthlyReturn) / 100
  const yearlyProfit = monthlyProfit * 12

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-lg shadow-lg z-50">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
          <p className="text-muted-foreground text-sm mb-6">Enter your deposit amount</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Deposit Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground">$</span>
                  <input
                    type="number"
                    min={plan.minDeposit}
                    max={plan.maxDeposit}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-7 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Min: ${plan.minDeposit.toLocaleString()} | Max: ${plan.maxDeposit.toLocaleString()}
                </p>
              </div>

              <div className="bg-background rounded-lg p-4 space-y-2 border border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monthly Profit (at {plan.monthlyReturn}%)</span>
                  <span className="font-semibold text-accent">${monthlyProfit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-border pt-2">
                  <span className="text-muted-foreground">Yearly Profit</span>
                  <span className="font-semibold text-accent">${yearlyProfit.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-secondary transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
                >
                  Confirm Deposit
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">✓</div>
              <p className="text-lg font-semibold text-accent">Deposit Successful!</p>
              <p className="text-sm text-muted-foreground mt-2">
                ${depositAmount.toLocaleString()} invested in {plan.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
