import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Digital Marketing?",
    a: "Digital marketing is a form of online marketing that uses platforms like Google, social media, and websites to promote a business. AdCraftz creates easy, effective plans to engage users and boost leads, trusted as the best digital marketing agency in Hyderabad.",
  },
  {
    q: "What is a digital marketing agency?",
    a: "A place where a group of expert people work for your brand to help it grow online. At AdCraftz, our dedicated team handles SEO, Ads, content and more — acting like an extension of your business to drive real results.",
  },
  {
    q: "What services do digital marketing agencies offer?",
    a: "At AdCraftz, we offer Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing & Management, Content Creation & Blogging, Email Marketing, Web Design & Development, and Branding & Strategy Consulting. We create customised plans that truly fit your brand.",
  },
  {
    q: "How do I choose the right digital marketing agency?",
    a: "Look for transparent communication, real results with proven case studies, understanding of your industry, and genuine reviews. At AdCraftz, we focus on all these points — we stay transparent, deliver measurable results, and understand your business deeply.",
  },
  {
    q: "How much does hiring a digital marketing agency cost?",
    a: "The cost depends on what services you need — like SEO, social media, ads, or a full marketing plan. At AdCraftz, we keep things flexible with customised plans that fit your budget and give you the best value, so you get real results without overspending.",
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
