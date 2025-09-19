import BackgroundGradient from "@/components/common/BackgroundGradient";
import CTASection from "@/components/home/CTASection";
import DemoSection from "@/components/home/DemoSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BackgroundGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
