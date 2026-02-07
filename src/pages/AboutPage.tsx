import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Users, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every strategy is rooted in your business goals." },
  { icon: Eye, title: "Full Transparency", desc: "Clear reporting, honest communication, no surprises." },
  { icon: Users, title: "Client-First", desc: "Your success is our top priority, always." },
  { icon: Heart, title: "Passion", desc: "We genuinely love what we do and it shows in our work." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends so your brand stays relevant." },
  { icon: Shield, title: "Trust", desc: "Long-term partnerships built on reliability and results." },
];

export default function AboutPage() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Welcome to <span className="gradient-text">AdCraftz</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The Best Digital Marketing Agency in Hyderabad
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div ref={ref} className={`container mx-auto max-w-4xl space-y-6 text-muted-foreground leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p>
              At AdCraftz, we believe every business deserves a powerful digital presence that drives real growth. What started as a small team with a passion for creativity and performance has grown into one of the best digital marketing agencies in Hyderabad, trusted by brands across industries.
            </p>
            <p>
              We built AdCraftz with one simple vision: to make digital marketing transparent, result-oriented, and accessible for every business — whether small, growing, or established.
            </p>
            <p>
              Over the years, we've helped businesses strengthen their identity online by crafting meaningful strategies across website development, social media management, content creation, paid advertising, and local SEO. Our approach is simple—understand your brand, understand your audience, and craft digital solutions that move your business forward.
            </p>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-heading text-2xl font-bold gradient-text mb-4">Why AdCraftz?</h2>
              <p>
                Because we don't operate like a typical agency. As the Best Digital Marketing Agency in Hyderabad, we act as your strategic growth partner, not just a service provider. Whether you're a startup seeking brand awareness or an established business aiming for consistent lead flow and revenue growth, we tailor every strategy to your goals, your market, and your audience.
              </p>
              <p className="mt-4 font-semibold text-foreground">
                At AdCraftz, your success isn't just a project — it's our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold">Our <span className="gradient-text">Values</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg">
                    <v.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
