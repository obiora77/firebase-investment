"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import DashboardPage from "@/app/dashboard/page"
import LandingPage from "@/components/landing-page"

export default function Home() {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
   <main className="flex-grow">
      
      {user ? <DashboardPage /> : <LandingPage />}
   </main>
  ) 
}
