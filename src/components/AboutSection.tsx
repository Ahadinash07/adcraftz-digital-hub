import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding gradient-bg-subtle">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
              Welcome to <span className="gradient-text">AdCraftz</span> — The Best Digital Marketing Agency in Hyderabad
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At AdCraftz, we believe every business deserves a powerful digital presence that drives real growth. What started as a small team with a passion for creativity and performance has grown into one of the best digital marketing agencies in Hyderabad, trusted by brands across industries.
              </p>
              <p>
                We built AdCraftz with one simple vision: to make digital marketing transparent, result-oriented, and accessible for every business — whether small, growing, or established.
              </p>
              <p>
                Over the years, we've helped businesses strengthen their identity online by crafting meaningful strategies across website development, social media management, content creation, paid advertising, and local SEO.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* About Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImage}
                alt="AdCraftz team brainstorming marketing strategies"
                className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <h3 className="mb-4 font-heading text-xl font-semibold gradient-text">Why AdCraftz?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because we don't operate like a typical agency. As the Best Digital Marketing Agency in Hyderabad, we act as your strategic growth partner, not just a service provider. Whether you're a startup seeking brand awareness or an established business aiming for consistent lead flow and revenue growth, we tailor every strategy to your goals, your market, and your audience.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, label: "Strategy First" },
                { icon: Eye, label: "Transparent" },
                { icon: Users, label: "Growth Partners" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
