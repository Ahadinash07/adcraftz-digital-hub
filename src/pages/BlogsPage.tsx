import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: "1",
    title: "10 SEO Strategies Every Business in Hyderabad Needs in 2025",
    excerpt: "Discover the top SEO strategies that can help your Hyderabad-based business dominate local search results and attract more customers.",
    date: "Jan 15, 2025",
    category: "SEO",
  },
  {
    id: "2",
    title: "Why Social Media Marketing is Essential for Small Businesses",
    excerpt: "Learn how a strong social media presence can transform your small business into a recognized brand with loyal customers.",
    date: "Jan 10, 2025",
    category: "Social Media",
  },
  {
    id: "3",
    title: "The Complete Guide to Google Ads for Beginners",
    excerpt: "A step-by-step guide to setting up your first Google Ads campaign and getting the most out of your advertising budget.",
    date: "Jan 5, 2025",
    category: "PPC",
  },
  {
    id: "4",
    title: "Content Marketing: How to Create Content That Converts",
    excerpt: "Master the art of creating content that not only engages your audience but drives them to take meaningful action.",
    date: "Dec 28, 2024",
    category: "Content",
  },
  {
    id: "5",
    title: "Local SEO Tips: How to Get Found by Nearby Customers",
    excerpt: "Optimize your online presence for local searches and attract customers right from your neighborhood.",
    date: "Dec 20, 2024",
    category: "Local SEO",
  },
  {
    id: "6",
    title: "Website Design Trends That Will Dominate 2025",
    excerpt: "Stay ahead of the curve with the latest web design trends that improve user experience and boost conversions.",
    date: "Dec 15, 2024",
    category: "Web Design",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="section-padding gradient-bg-subtle">
          <div className="container mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Blog</p>
            <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Stay updated with the latest trends, tips, and strategies in digital marketing.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.id}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="h-48 gradient-bg opacity-80" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{blog.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {blog.date}
                      </span>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold group-hover:text-primary transition-colors">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{blog.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
