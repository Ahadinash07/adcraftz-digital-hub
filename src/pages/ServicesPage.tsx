import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, Search, Share2, FileText, Megaphone, MapPin } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development & Maintenance",
    subtitle: "Your Digital Presence Starts Here",
    description: "Your website is your digital storefront. It's where first impressions are made, trust is built, and conversions happen. We create visually stunning, responsive, and user-friendly websites that are tailored to your brand's identity. Our website maintenance services ensure your site stays updated, secure, and high-performing. From regular content updates and performance monitoring to enhancing speed and fixing technical issues – we keep your website in top shape.",
    whyItMatters: "Your audience judges your brand within seconds of landing on your website. Let's make sure it's a memorable experience.",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    subtitle: "Rank Higher, Reach Farther",
    description: "What good is a website if no one can find it? Our SEO services are all about putting your brand in front of the right audience. Through a powerful combination of on-page optimization, off-page strategies, technical SEO, and local SEO, we boost your website's visibility and credibility. We dig deep into keyword research, enhance your website's structure, and build high-quality backlinks to improve your search rankings.",
    whyItMatters: "93% of online experiences begin with a search engine. Let's make sure you're on top.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Building Your Brand's Voice",
    description: "Your audience is on social media. Are you? We craft engaging social media strategies that not only boost your presence but build genuine connections with your audience. Whether it's Facebook, Instagram, or LinkedIn – we ensure your brand is consistent, relatable, and engaging. From content creation and scheduling to audience engagement and paid advertising, we handle it all.",
    whyItMatters: "Social media isn't just about likes and shares. It's about creating meaningful interactions that convert into loyal customers.",
  },
  {
    icon: FileText,
    title: "Content Management",
    subtitle: "Let's Tell Your Story",
    description: "Content is the heart of your online presence. It's how you communicate your brand's message, showcase your expertise, and engage your audience. We create high-quality, SEO-optimized content that speaks to your audience and drives them to take action. From blogs and website content to social media posts and ad copy, we deliver content that is relevant, persuasive, and valuable.",
    whyItMatters: "Great content builds credibility, drives traffic, and turns visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising (PPC & Social Ads)",
    subtitle: "Reach Your Audience Faster",
    description: "Sometimes, organic reach isn't enough. That's where our paid advertising expertise comes in. Whether it's Google Ads, Facebook Ads, Instagram Ads, or LinkedIn Ads, we create campaigns that drive immediate traffic, leads, and conversions. We optimize every aspect of your ad campaigns – from keyword research and creative development to targeting and remarketing.",
    whyItMatters: "Paid ads offer instant visibility. Let's make sure you're seen by the right people at the right time.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    subtitle: "Own Your Local Market",
    description: "If your business serves a specific area, you need to dominate local searches. Our local SEO services focus on optimizing your online presence for local audiences. Through Google My Business optimization, local keyword targeting, and citation building, we make sure you appear prominently in local search results.",
    whyItMatters: "46% of all Google searches are looking for local information. Make sure you're the first name they see.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Digital Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto space-y-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:p-8 lg:grid-cols-[auto_1fr] ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-bg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold">{service.title}</h2>
                  <p className="text-sm font-medium text-primary">{service.subtitle}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why It Matters</p>
                    <p className="mt-1 text-sm text-muted-foreground">{service.whyItMatters}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
