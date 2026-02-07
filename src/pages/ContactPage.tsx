import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const services = ["Website Development", "SEO", "Social Media Management", "Content Management", "Paid Advertising", "Local SEO"];

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</p>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Ready to grow your business? Reach out and let's start your digital journey.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 font-heading text-2xl font-bold">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <Input placeholder="Email Address *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Your Message *" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <Button type="submit" size="lg" className="w-full gradient-bg border-0 text-white hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 font-heading text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a question about our services, need a custom quote, or just want to say hello — we'd love to hear from you.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
                    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
                    { icon: Mail, label: "Email", value: "info@adcraftz.com" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-bg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-heading text-sm font-semibold">{label}</p>
                        <p className="text-muted-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
