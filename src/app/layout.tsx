import type React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/auth-context";
import Tawk from "@/components/tawk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olowo Investments",
  description: "Secure your future with our trusted investment plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <div className="flex min-h-screen flex-col">
          <AuthProvider>
            <Header />
            {children}
            <Tawk />
            <Footer />
          </AuthProvider>
          {/* Chat widget (hidden for authenticated users) */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}