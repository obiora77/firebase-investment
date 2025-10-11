import Link from "next/link";
import { Mountain, Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground font-headline">
              Olowo Investments
            </span>
          </Link>
          <p className="text-sm">
            Secure your future with our trusted investment plans.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/investment-plans" className="hover:text-primary">
                Investment Plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-primary">
                My Account
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Olowo Investments. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
