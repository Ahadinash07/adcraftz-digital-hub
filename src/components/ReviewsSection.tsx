import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    text: "AdCraftz transformed our online presence completely. Their team understood our goals, built a solid strategy, and delivered leads consistently. Truly the best digital marketing agency we've worked with.",
  },
  {
    text: "Transparent, responsive, and highly professional. They kept us updated at every step and delivered results better than what we expected. Our ad performance improved within just weeks.",
  },
  {
    text: "Exceptional creativity and execution. From website design to ad campaigns, the creativity and attention to detail were outstanding. Our brand visibility has grown significantly.",
  },
  {
    text: "Reliable team with proven results. We saw a huge difference in our lead quality and conversions after partnering with AdCraftz. Their strategies actually work.",
  },
  {
    text: "They feel more like a growth partner than an agency. The team is proactive, gives valuable insights, and genuinely cares about the success of our business. Highly recommended.",
  },
  {
    text: "Full-funnel marketing done right. AdCraftz handled everything—from awareness campaigns to remarketing—and our ROI has never been better. Worth every rupee.",
  },
];

export function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="section-padding gradient-bg-subtle">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Client Reviews</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-magenta text-brand-magenta" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-foreground italic">"{reviews[current].text}"</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">— Happy Client #{current + 1}</span>
              <div className="flex gap-2">
                <button onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 gradient-bg" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
