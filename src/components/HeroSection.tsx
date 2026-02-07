import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Rocket, ArrowRight } from "lucide-react";

const services = [
  "Website Development",
  "SEO",
  "Social Media Management",
  "Content Management",
  "Paid Advertising",
  "Local SEO",
];

export function HeroSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", mobile: "", service: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.service || !form.email) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We'll get back to you shortly." });
    setForm({ name: "", mobile: "", service: "", email: "" });
  };

  return (
    <section className="relative overflow-hidden section-padding">
      {/* Background gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-magenta/10 blur-3xl" />

      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
              <Rocket className="h-4 w-4" />
              #1 Digital Marketing Agency
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Best Digital Marketing Agency in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              From strategy to execution, we craft digital journeys that turn clicks into customers.
            </p>
            <div className="flex gap-3">
              <Button size="lg" className="gradient-bg border-0 text-white hover:opacity-90" asChild>
                <a href="#services">
                  Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/5 md:p-8">
              <h3 className="mb-1 font-heading text-xl font-semibold">Get a Free Consultation</h3>
              <p className="mb-6 text-sm text-muted-foreground">Fill in your details and we'll reach out</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  placeholder="Mobile Number"
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Button type="submit" className="w-full gradient-bg border-0 text-white hover:opacity-90" size="lg">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
