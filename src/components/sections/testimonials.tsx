"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DollarSign, Users, TrendingUp, Handshake } from "lucide-react";

export function Testimonials() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "10,000+",
      label: "Happy Investors",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      value: "$50M+",
      label: "Total Invested",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: "99%",
      label: "Successful Payouts",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      label: "Years of Trust",
      value: "5+",
    },
  ];

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="mb-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-background p-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold font-headline">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">
            What Our Investors Say
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Real stories from our valued community of investors.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(
                (p) => p.id === testimonial.avatarId
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <Avatar className="mb-4 h-20 w-20">
                          {avatar && (
                            <AvatarImage
                              src={avatar.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <p className="mb-4 italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        <p className="font-semibold">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
