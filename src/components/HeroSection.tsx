import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Rocket, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

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
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-magenta/20 blur-3xl" />

      <div className="container mx-auto relative z-10 py-16 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white">
              <Rocket className="h-4 w-4" />
              #1 Digital Marketing Agency
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Best Digital Marketing Agency in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h1>
            <p className="max-w-lg text-lg text-white/80 leading-relaxed">
              From strategy to execution, we craft digital journeys that turn clicks into customers.
            </p>
            <div className="flex gap-3">
              <Button size="lg" className="gradient-bg border-0 text-white hover:opacity-90" asChild>
                <a href="#services">
                  Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right Side: Horizontal Form */}
          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-2xl md:p-8">
            <h3 className="mb-1 font-heading text-xl font-semibold text-white">Get a Free Consultation</h3>
            <p className="mb-6 text-sm text-white/70">Fill in your details and we'll reach out</p>
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Input
                placeholder="Mobile Number"
                type="tel"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button type="submit" className="sm:col-span-2 gradient-bg border-0 text-white hover:opacity-90" size="lg">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
