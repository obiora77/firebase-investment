import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section className="relative flex h-[80vh] min-h-[500px] items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 ease-out">
          <h1 className="mb-4 text-4xl font-bold leading-tight font-headline md:text-6xl">
            Build Your Future, <br />
            Invest with Confidence.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
            Discover a secure and modern platform for managing your funds,
            investing in curated plans, and tracking your earnings in real-time.
          </p>
        </div>
        <div className="flex justify-center gap-4 animate-in fade-in-0 slide-in-from-bottom-10 delay-300 duration-1000 ease-out">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/register">Get Started</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/investment-plans">View Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
