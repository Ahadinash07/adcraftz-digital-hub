import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "SEO Specialist",
    type: "Full-time",
    location: "Hyderabad",
    description: "We're looking for an experienced SEO specialist to help our clients improve their search engine rankings and drive organic traffic.",
  },
  {
    title: "Social Media Manager",
    type: "Full-time",
    location: "Hyderabad",
    description: "Join our team to manage social media strategies, create engaging content, and build brand communities for our diverse client portfolio.",
  },
  {
    title: "Content Writer",
    type: "Full-time / Freelance",
    location: "Remote / Hyderabad",
    description: "We need creative content writers who can craft compelling blogs, ad copy, and website content that drives engagement and conversions.",
  },
  {
    title: "PPC Campaign Manager",
    type: "Full-time",
    location: "Hyderabad",
    description: "Manage and optimize Google Ads, Facebook Ads, and LinkedIn Ads campaigns for our clients to maximize ROI.",
  },
  {
    title: "Web Developer",
    type: "Full-time",
    location: "Hyderabad",
    description: "Build responsive, high-performance websites using modern technologies and frameworks for our diverse client base.",
  },
];

export default function CareersPage() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Careers</p>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Be part of the best digital marketing agency in Hyderabad. Grow your career with AdCraftz.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-3xl space-y-6">
            {jobs.map((job) => (
              <div key={job.title} className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="font-heading text-xl font-semibold">{job.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-primary" /> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-primary" /> {job.location}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{job.description}</p>
                <Button
                  className="mt-4 gradient-bg border-0 text-white hover:opacity-90"
                  onClick={() => toast({ title: "Application Received!", description: "We'll review your profile and get back to you soon." })}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
