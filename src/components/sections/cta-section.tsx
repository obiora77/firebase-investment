import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
   <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
         <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12">
            <h1 className="text-3xl font-bold mb-4">
               Ready to Start Your Investment Journey?
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
               Join thousands of investors who are growing their wealth on InvestFlow.
            </p>
            <div className="flex justify-center gap-4 animate-in fade-in-0 slide-in-from-bottom-10 delay-300 duration-1000 ease-out">
               <Button asChild size="lg" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
                  <Link href="/register">Get Started</Link>
               </Button>
               <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
               >
                  <Link href="/investment-plans">View Plans</Link>
               </Button>
            </div>
         </div>
      </section>
   </>
  )
}
