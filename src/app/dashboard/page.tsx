"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import PortfolioOverview from "@/components/dashboard/portfolio-overview"
import InvestmentPlans from "@/components/dashboard/investment-plans"
import TransactionHistory from "@/components/dashboard/transaction-history"
import WithdrawalModal from "@/components/dashboard/withdrawal-modal"
import ReferralProgram from "@/components/dashboard/referral-program"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"overview" | "invest" | "history" | "withdraw" | "referral">("overview")
  const [isWithdrawalOpen, setIsWithdrawalOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
        <p className="text-muted-foreground">
          Track your investments and manage your portfolio.
        </p>
      </div>

      <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
        {[
          { id: "overview", label: "Portfolio Overview" },
          { id: "invest", label: "Investment Plans" },
          { id: "history", label: "Transaction History" },
          { id: "withdraw", label: "Withdraw Funds" },
          { id: "referral", label: "Referral Program" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary -mb-0.5"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && <PortfolioOverview />}
        {activeTab === "invest" && <InvestmentPlans />}
        {activeTab === "history" && <TransactionHistory />}
        {activeTab === "withdraw" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Withdrawal Management</h2>
              <p className="text-muted-foreground mb-6">
                Available Balance:{" "}
                <span className="font-semibold text-accent">${(user?.balance || 0).toLocaleString()}</span>
              </p>
              <button
                onClick={() => setIsWithdrawalOpen(true)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Request Withdrawal
              </button>
            </div>
          </div>
        )}
        {activeTab === "referral" && <ReferralProgram />}
      </div>

      <WithdrawalModal
        isOpen={isWithdrawalOpen}
        onClose={() => setIsWithdrawalOpen(false)}
        availableBalance={user?.balance || 0}
      />
    </div>
  );
}
