import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyBestSection } from "@/components/WhyBestSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyBestSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
