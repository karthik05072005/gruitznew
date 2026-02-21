import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AwardStrip from "@/components/home/AwardStrip";
import ServicesSection from "@/components/home/ServicesSectionNew";
import GrowthFramework from "@/components/home/GrowthFramework";
import AboutSection from "@/components/home/AboutSection";
import AdvantageSection from "@/components/home/AdvantageSection";
import CTASection from "@/components/home/CTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LazySection from "@/components/ui/LazySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <LazySection>
        <AwardStrip />
      </LazySection>
      
      <LazySection delay={0.1}>
        <ServicesSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <GrowthFramework />
      </LazySection>
      
      <LazySection delay={0.1}>
        <AboutSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <AdvantageSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <CTASection />
      </LazySection>
    </Layout>
  );
};

export default Index;
