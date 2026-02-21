import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceContent from "@/assets/service-content.jpg";
import servicePpc from "@/assets/service-ppc.jpg";
import serviceLocalSeo from "@/assets/service-local-seo.jpg";

const services = [
  {
    image: serviceWebDev,
    title: "Website Development & Maintenance",
    subtitle: "Your Digital Presence Starts Here",
    description: "We create visually stunning, responsive, and user-friendly websites tailored to your brand's identity. Our website maintenance services ensure your site stays updated, secure, and high-performing.",
    whyItMatters: "Your audience judges your brand within seconds of landing on your website. Let's make sure it's a memorable experience.",
  },
  {
    image: serviceSeo,
    title: "SEO (Search Engine Optimization)",
    subtitle: "Rank Higher, Reach Farther",
    description: "Through a powerful combination of on-page optimization, off-page strategies, technical SEO, and local SEO, we boost your website's visibility and credibility with thorough keyword research and high-quality backlinks.",
    whyItMatters: "93% of online experiences begin with a search engine. Let's make sure you're on top.",
  },
  {
    image: serviceSocial,
    title: "Social Media Management",
    subtitle: "Building Your Brand's Voice",
    description: "We craft engaging social media strategies that boost your presence and build genuine connections. From content creation and scheduling to audience engagement and paid advertising, we handle it all.",
    whyItMatters: "Social media isn't just about likes and shares. It's about creating meaningful interactions that convert into loyal customers.",
  },
  {
    image: serviceContent,
    title: "Content Management",
    subtitle: "Let's Tell Your Story",
    description: "We create high-quality, SEO-optimized content that speaks to your audience and drives them to take action — from blogs and website content to social media posts and ad copy.",
    whyItMatters: "Great content builds credibility, drives traffic, and turns visitors into customers.",
  },
  {
    image: servicePpc,
    title: "Paid Advertising (PPC & Social Ads)",
    subtitle: "Reach Your Audience Faster",
    description: "We create campaigns across Google Ads, Facebook, Instagram, and LinkedIn that drive immediate traffic, leads, and conversions with optimized keyword research, creative development, and targeting.",
    whyItMatters: "Paid ads offer instant visibility. Let's make sure you're seen by the right people at the right time.",
  },
  {
    image: serviceLocalSeo,
    title: "Local SEO",
    subtitle: "Own Your Local Market",
    description: "Through Google My Business optimization, local keyword targeting, and citation building, we make sure you appear prominently in local search results and attract customers from your area.",
    whyItMatters: "46% of all Google searches are looking for local information. Make sure you're the first name they see.",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding">
      <div ref={ref} className={`container mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
            Digital Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-1 font-heading text-lg font-semibold">{service.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{service.subtitle}</p>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="rounded-lg bg-secondary/50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why It Matters</p>
                  <p className="mt-1 text-sm text-muted-foreground">{service.whyItMatters}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
