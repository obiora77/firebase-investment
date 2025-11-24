import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Fill out the form below.
          </p>
        </div>
          <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Investment Inquiry" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              rows={6}
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>How do I open an account?</AccordionTrigger>
              <AccordionContent>
                Creating an account is simple — click the Register button, fill in your
                details, and verify your email. Once verified you can deposit funds
                and start investing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>What payment methods are supported?</AccordionTrigger>
              <AccordionContent>
                We currently support bank transfers and major debit/credit cards. More
                options may be added in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>How does withdrawal work?</AccordionTrigger>
              <AccordionContent>
                Withdrawals are processed within 1-3 business days depending on your
                bank. You can request a withdrawal from the dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>Is my money secure?</AccordionTrigger>
              <AccordionContent>
                Yes — we use industry-standard encryption and secure storage practices
                to protect user funds and data. For more details see our Privacy and
                Security documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
