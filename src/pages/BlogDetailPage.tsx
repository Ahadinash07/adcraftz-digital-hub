import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const blogContent: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "1": {
    title: "10 SEO Strategies Every Business in Hyderabad Needs in 2025",
    date: "Jan 15, 2025",
    category: "SEO",
    content: [
      "Search Engine Optimization continues to evolve, and businesses in Hyderabad need to stay ahead of the curve to maintain their competitive edge in the digital landscape.",
      "From optimizing for voice search to creating high-quality, long-form content, the strategies that work in 2025 are more nuanced and user-focused than ever before.",
      "Local SEO remains crucial for Hyderabad businesses. Ensuring your Google My Business profile is fully optimized, collecting genuine customer reviews, and maintaining consistent NAP (Name, Address, Phone) information across all directories are foundational steps.",
      "Technical SEO improvements like Core Web Vitals optimization, mobile-first indexing, and structured data markup can significantly boost your search rankings.",
      "At AdCraftz, we stay on top of every algorithm update and industry shift to ensure our clients always maintain their competitive advantage in search results.",
    ],
  },
  "2": {
    title: "Why Social Media Marketing is Essential for Small Businesses",
    date: "Jan 10, 2025",
    category: "Social Media",
    content: [
      "In today's digital-first world, social media is not just an option for small businesses — it's a necessity.",
      "Platforms like Instagram, Facebook, and LinkedIn offer unprecedented opportunities to connect directly with your target audience, build brand awareness, and drive sales.",
      "The key to successful social media marketing lies in consistency, authenticity, and value-driven content that resonates with your audience's needs and interests.",
      "At AdCraftz, we help small businesses develop comprehensive social media strategies that turn followers into loyal customers and brand advocates.",
    ],
  },
};

const defaultContent = {
  title: "Blog Post",
  date: "2025",
  category: "Digital Marketing",
  content: [
    "This is a placeholder blog post. Stay tuned for more insights from AdCraftz, the best digital marketing agency in Hyderabad.",
    "We regularly publish articles about SEO, social media marketing, content strategy, paid advertising, and more to help businesses grow their digital presence.",
  ],
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogContent[id || ""] || defaultContent;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blogs" className="mb-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blogs
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{blog.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {blog.date}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl">{blog.title}</h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            {blog.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
