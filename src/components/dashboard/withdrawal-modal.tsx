"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"

interface WithdrawalModalProps {
  isOpen: boolean
  onClose: () => void
  availableBalance: number
}

export default function WithdrawalModal({ isOpen, onClose, availableBalance }: WithdrawalModalProps) {
  const { user } = useAuth()
  const [amount, setAmount] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [method, setMethod] = useState<"bank" | "crypto">("bank")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const withdrawAmount = Number.parseFloat(amount)

    if (withdrawAmount > availableBalance) {
      alert("Insufficient balance")
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setAmount("")
    }, 2000)
  }

  const minWithdrawal = 50
  const processingFee = Number.parseFloat(amount) ? Math.max(0, Number.parseFloat(amount) * 0.01) : 0

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-lg shadow-lg z-50 animate-in fade-in zoom-in-95">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Withdraw Funds</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Available Balance: <span className="font-semibold text-accent">${availableBalance.toLocaleString()}</span>
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Withdrawal Method */}
              <div>
                <label className="block text-sm font-medium mb-3">Withdrawal Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "bank", label: "Bank Transfer", icon: "🏦" },
                    { id: "crypto", label: "Cryptocurrency", icon: "₿" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMethod(m.id as "bank" | "crypto")}
                      className={`p-3 rounded-lg border-2 transition ${
                        method === m.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-xl mb-1">{m.icon}</div>
                      <div className="text-xs font-medium">{m.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Withdrawal Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground">$</span>
                  <input
                    type="number"
                    min={minWithdrawal}
                    max={availableBalance}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-7 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Enter amount"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Minimum: ${minWithdrawal}</p>
              </div>

              {/* Fee Breakdown */}
              {amount && (
                <div className="bg-background rounded-lg p-4 space-y-2 border border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Withdrawal Amount</span>
                    <span className="font-semibold">${Number.parseFloat(amount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Fee (1%)</span>
                    <span className="font-semibold text-destructive">${processingFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-border pt-2">
                    <span className="font-medium">You Receive</span>
                    <span className="font-bold text-accent">
                      ${(Number.parseFloat(amount) - processingFee).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

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
                  disabled={!amount || Number.parseFloat(amount) < minWithdrawal}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Request Withdrawal
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 animate-in fade-in">
              <div className="text-4xl mb-3">✓</div>
              <p className="text-lg font-semibold text-accent">Withdrawal Requested!</p>
              <p className="text-sm text-muted-foreground mt-2">
                ${(Number.parseFloat(amount) - processingFee).toLocaleString()} will be transferred to your{" "}
                {method === "bank" ? "bank account" : "wallet"}
              </p>
              <p className="text-xs text-muted-foreground mt-3">Processing time: 1-3 business days</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
