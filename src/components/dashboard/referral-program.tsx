"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { FaUsers, FaMoneyBillWave, FaStar, FaTwitter, FaFacebookF, FaWhatsapp, FaTelegramPlane, FaCopy, FaLink } from "react-icons/fa"

export default function ReferralProgram() {
  const { user } = useAuth()
  const [copied, setCopied] = useState(false)

  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const referralLink = `https://investflow.com/join?ref=${user?.referralCode}`

  return (
    <div className="space-y-6">
      {/* Referral Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            label: "Total Referrals",
            value: user?.referralsCount || 0,
            color: "bg-primary/10",
            icon: <FaUsers className="h-6 w-6" />,
          },
          {
            label: "Referral Earnings",
            value: `$${((user?.referralsCount || 0) * 150).toLocaleString()}`,
            color: "bg-accent/10",
            icon: <FaMoneyBillWave className="h-6 w-6" />,
          },
          {
            label: "Bonus Tier",
            value: (user?.referralsCount || 0) >= 10 ? "Gold" : (user?.referralsCount || 0) >= 5 ? "Silver" : "Bronze",
            color: "bg-chart-1/10",
            icon: <FaStar className="h-6 w-6" />,
          },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} rounded-lg p-6 border border-border`}>
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Share Section */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Share Your Referral Code</h2>
        <p className="text-muted-foreground mb-6">Invite friends and earn $150 for each successful referral!</p>

        <div className="space-y-4">
          {/* Referral Code */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Referral Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={user?.referralCode || ""}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-center font-mono font-bold"
              />
              <button
                onClick={copyReferralCode}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  copied ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Referral Link */}
          <div>
            <label className="block text-sm font-medium mb-2">Share This Link</label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-xs"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(referralLink)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold mb-4">Share on Social Media</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Twitter", icon: <FaTwitter />, color: "bg-gray-800 hover:bg-gray-900" },
            { name: "Facebook", icon: <FaFacebookF />, color: "bg-blue-600 hover:bg-blue-700" },
            { name: "WhatsApp", icon: <FaWhatsapp />, color: "bg-green-500 hover:bg-green-600" },
            { name: "Telegram", icon: <FaTelegramPlane />, color: "bg-blue-400 hover:bg-blue-500" },
          ].map((social) => (
            <button key={social.name} className={`p-3 rounded-lg text-white font-semibold transition ${social.color}`}>
              <div className="text-lg mb-1">{social.icon}</div>
              <div className="text-xs">{social.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Bonus Tiers */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold mb-4">Bonus Tier System</h3>
        <div className="space-y-3">
          {[
            { tier: "Bronze", referrals: "0-4", bonus: "$100/referral", progress: 0 },
            {
              tier: "Silver",
              referrals: "5-9",
              bonus: "$150/referral",
              progress: Math.min(100, ((user?.referralsCount || 0) / 5) * 100),
            },
            {
              tier: "Gold",
              referrals: "10+",
              bonus: "$200/referral",
              progress: Math.min(100, ((user?.referralsCount || 0) / 10) * 100),
            },
          ].map((tier, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-semibold">{tier.tier} Tier</div>
                <div className="text-sm text-accent font-medium">{tier.bonus}</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{tier.referrals} referrals required</p>
              <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                  style={{ width: `${tier.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
