import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export function AboutSummary() {
  const aboutImage = PlaceHolderImages.find(
    (p) => p.id === "about-summary-image"
  );

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold font-headline md:text-4xl">
              A Trusted Partner for Your Financial Growth
            </h2>
            <p className="mb-6 text-muted-foreground">
              Olowo Investments is dedicated to providing a secure and reliable
              platform for individuals seeking to grow their wealth. Our mission
              is to democratize investment opportunities with transparency and
              cutting-edge technology.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Security First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your funds and data are protected with industry-leading
                    security measures.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Optimized Returns</h3>
                  <p className="text-sm text-muted-foreground">
                    Our expert-curated plans are designed to maximize your profit
                    potential.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team of financial experts and technologists are here to
                    support your journey.
                  </p>
                </div>
              </li>
            </ul>
            <Button asChild variant="link" className="p-0 text-primary">
              <Link href="/about">Learn more about us &rarr;</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
