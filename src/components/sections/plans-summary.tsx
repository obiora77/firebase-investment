import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { investmentPlans } from "@/lib/data";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function PlansSummary() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">
            Choose Your Investment Plan
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            We offer a variety of plans to suit your financial goals. Each plan
            is designed for optimal returns and security.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {investmentPlans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-headline">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.range}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 text-4xl font-bold">{plan.profit}</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />{" "}
                    {plan.duration} Duration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Daily Profit
                    Accrual
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> 24/7 Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/register">Start Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
