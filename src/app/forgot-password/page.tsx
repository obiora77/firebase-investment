"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      // Simulate API call to send reset/verification code
      await new Promise((r) => setTimeout(r, 800))
      setStatus("sent")
      // Navigate to OTP page — include query so OTP knows this flow
      router.push(`/otp?from=forgot&email=${encodeURIComponent(email)}`)
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <p className="mb-6 text-muted-foreground">Enter the email associated with your account. We'll send a verification code to reset your password.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Verification Code"}
          </Button>
        </form>

        {status === "sent" && (
          <p className="mt-4 text-sm text-success">A verification code was sent — check your email.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-destructive">Failed to send code. Please try again.</p>
        )}
      </div>
    </div>
  )
}
