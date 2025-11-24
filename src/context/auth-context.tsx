"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export interface User {
   id: string
   email: string
   name: string
   balance: number
   totalInvested: number
   totalProfits: number
   referralCode: string
   referralsCount: number
}

export interface AuthContextType {
   user: User | null
   isLoading: boolean
   signIn: (email: string, password: string) => Promise<void>
   signUp: (name: string, email: string, password: string) => Promise<void>
   signOut: () => void
   updateBalance: (amount: number) => void
   addProfit: (amount: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null)
   const [isLoading, setIsLoading] = useState(false)

   const generateReferralCode = () => {
      return Math.random().toString(36).substring(2, 10).toUpperCase()
   }

   const signIn = useCallback(async (email: string, password: string) => {
      setIsLoading(true)
      try {
         // API call
         await new Promise((resolve) => setTimeout(resolve, 800))
         setUser({
         id: "1",
         email,
         name: email.split("@")[0],
         balance: 5000,
         totalInvested: 10000,
         totalProfits: 1250,
         referralCode: generateReferralCode(),
         referralsCount: 0,
         })
      }  finally {
         setIsLoading(false)
      }
   }, [])

   const signUp = useCallback(async (name: string, email: string, password: string) => {
      setIsLoading(true)
      try {
         //APi call
         await new Promise((resolve) => setTimeout(resolve, 800))
         setUser({
         id: "1",
         email,
         name,
         balance: 0,
         totalInvested: 0,
         totalProfits: 0,
         referralCode: generateReferralCode(),
         referralsCount: 0,
         })
      }  finally {
         setIsLoading(false)
      }
   }, [])

   const signOut = useCallback(() => {
      setUser(null)
   }, [])

   const updateBalance = useCallback((amount: number) => {
      setUser((prev) =>
         prev
           ? {
               ...prev,
               balance: Math.max(0, prev.balance - amount),
               totalInvested: prev.totalInvested + amount,
           }
         : null
      )
   }, [])

   const addProfit = useCallback((amount: number) => {
    setUser((prev) =>
      prev
        ? {
            ...prev,
            balance: prev.balance + amount,
            totalProfits: prev.totalProfits + amount,
          }
        : null,
      )
   }, [])

   return (
      <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, updateBalance, addProfit }}>
         {children}
      </AuthContext.Provider>
   )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}