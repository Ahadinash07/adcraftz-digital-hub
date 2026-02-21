import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Puzzle, Eye, Users, Trophy, Sparkles, TrendingUp } from "lucide-react";
import chooseTailored from "@/assets/choose-tailored.jpg";
import chooseTransparency from "@/assets/choose-transparency.jpg";
import chooseTeam from "@/assets/choose-team.jpg";
import chooseSuccess from "@/assets/choose-success.jpg";
import chooseCreativity from "@/assets/choose-creativity.jpg";
import chooseFunnel from "@/assets/choose-funnel.jpg";

const features = [
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Every strategy is custom-crafted to match your brand's goals, audience, and industry needs.",
    image: chooseTailored,
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden metrics or confusing reports. You get clear insights and complete visibility into every step of your digital growth.",
    image: chooseTransparency,
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A passionate, experienced team by your side—focused on your success, proactive with ideas, and always ready to support.",
    image: chooseTeam,
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Backed by consistent results and happy clients across industries, our performance speaks louder than promises.",
    image: chooseSuccess,
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge Creativity",
    description: "From innovative designs to compelling content, we blend creativity with strategy to make your brand truly unforgettable.",
    image: chooseCreativity,
  },
  {
    icon: TrendingUp,
    title: "Full-Funnel Expertise",
    description: "We optimize every stage of the customer journey—awareness, engagement, and conversion—to deliver maximum ROI and sustainable growth.",
    image: chooseFunnel,
  },
];

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg transition-transform group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
