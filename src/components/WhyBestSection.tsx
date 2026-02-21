import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, BookOpen, Target } from "lucide-react";
import funnelImage from "@/assets/funnel-image.jpg";

const funnelStages = [
  {
    icon: Eye,
    title: "Top of the Funnel (Awareness)",
    description: "Eye-catching visuals, engaging videos, and high-impact messaging that introduce your brand and attract a wide, relevant audience.",
  },
  {
    icon: BookOpen,
    title: "Middle of the Funnel (Consideration)",
    description: "Value-driven content, compelling ads, and retargeting strategies that educate, build trust, and nurture potential customers.",
  },
  {
    icon: Target,
    title: "Bottom of the Funnel (Conversion)",
    description: "Strong call-to-action creatives, persuasive landing pages, and laser-focused campaigns designed to drive leads, sales, and measurable results.",
  },
];

export function WhyBestSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding gradient-bg-subtle">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why We're The Best</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Best Digital Marketing Agency in{" "}
              <span className="gradient-text">Hyderabad</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At AdCraftz, we don't just run campaigns — we build complete digital journeys that guide your audience from awareness to conversion. Our strategies are designed around the full marketing funnel, ensuring every stage of your customer's decision-making is addressed with precision.
            </p>

            <div className="space-y-4">
              {funnelStages.map((stage) => (
                <div
                  key={stage.title}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-bg">
                    <stage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{stage.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side funnel image */}
          <div className="flex items-center justify-center">
            <img
              src={funnelImage}
              alt="Digital marketing funnel - awareness, consideration, conversion"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-primary/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
