"use client"

import Script from "next/script"
import { useAuth } from "@/context/auth-context"

export default function Tawk() {
  const { user } = useAuth()

  // Do not render the widget when a user is logged in
  if (user) return null

  return (
    <>
      <Script id="tawk-init" strategy="afterInteractive">
        {`window.Tawk_API = window.Tawk_API || {}; window.Tawk_LoadStart = new Date();`}
      </Script>
      <Script
        src="https://embed.tawk.to/692432847a43e3195d75ceea/1jaqmalmm"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  )
}
