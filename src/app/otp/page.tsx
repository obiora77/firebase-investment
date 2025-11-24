"use client"

import { useState } from "react"
import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function OtpPage() {
  const search = useSearchParams()
  const from = search.get("from") || ""
  const email = search.get("email") || ""
  const router = useRouter()

  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("verifying")
    try {
      // simulate verification
      await new Promise((r) => setTimeout(r, 800))
      setStatus("success")
      // If user is completing registration, navigate to home/dashboard
      if (from === "register") {
        router.push("/")
      } else if (from === "forgot") {
        // If coming from forgot password, allow setting new password and redirect to login
        router.push("/login")
      } else {
        router.push("/")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-4">Verify Code</h1>
        <p className="mb-6 text-muted-foreground">Enter the verification code sent to <strong>{email || "your email"}</strong>.</p>

        <form onSubmit={handleVerify} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Verification Code</Label>
            <Input id="code" value={code} onChange={(e) => setCode(e.target.value)} required />
          </div>

          {from === "forgot" && (
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={status === "verifying"}>
            {status === "verifying" ? "Verifying..." : "Verify"}
          </Button>
        </form>

        {status === "success" && <p className="mt-4 text-success">Verified — redirecting...</p>}
        {status === "error" && <p className="mt-4 text-destructive">Invalid code. Please try again.</p>}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpPage />
    </Suspense>
  );
}