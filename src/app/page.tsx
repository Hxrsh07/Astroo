import ImageSequence from "@/components/ImageSequence";
import FeatureStory from "@/components/FeatureStory";
import ParallaxSection from "@/components/ParallaxSection";
import EngineeringScroll from "@/components/EngineeringScroll";
import DetailShowcase from "@/components/DetailShowcase";
import Statistics from "@/components/Statistics";
import QuoteGallery from "@/components/QuoteGallery";
import WhyAstroo from "@/components/WhyAstroo";
import FinalShowcase from "@/components/FinalShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-astroo-bg selection:bg-astroo-accent selection:text-white">
      <ImageSequence />
      <FeatureStory />
      <ParallaxSection />
      <EngineeringScroll />
      <DetailShowcase />
      <Statistics />
      <QuoteGallery />
      <WhyAstroo />
      <FinalShowcase />
      <Footer />
    </main>
  );
}
