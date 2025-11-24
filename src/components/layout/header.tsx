"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context"
import { Menu, Mountain } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { FaSignInAlt } from "react-icons/fa";

export function Header() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  // Hide header on auth pages
  if (pathname?.startsWith("/login") || pathname?.startsWith("/register")) {
    return null
  }
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/investment-plans", label: "Investment Plans" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Mobile-only logo (visible on small screens) */}
        <div className="mr-4 flex md:hidden items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block font-bold font-headline">
              Olowo Investments
            </span>
          </Link>
        </div>

        {/* Desktop logo + nav (nav hidden when signed in) */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Olowo Investments
            </span>
          </Link>
          {!user && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Mobile sheet/menu: only render when not signed in */}
        <div className="flex-1 md:hidden">
          {!user && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Mountain className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">Olowo Investments</span>
                    </Link>
                  </SheetClose>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <span className="text-foreground text-sm"><strong>Welcome</strong>, {user.name}</span>
                <button 
                  onClick={signOut}
                  className="px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 
                  rounded-lg text-sm font-medium transition"
                >
                  <FaSignInAlt className="inline mr-2" /> 
                </button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
