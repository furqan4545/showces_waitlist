import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import FeatureHighlights from "./components/FeatureHighlights";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <PricingSection />
        <FeatureHighlights />
      </main>
    </div>
  );
}
