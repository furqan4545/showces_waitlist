import { Monitor, Cloud, Edit, Share2 } from "lucide-react";

const FEATURES = [
  {
    icon: Monitor,
    title: "Crystal Clear Capture",
    description: "Record your screen in stunning 4K quality with zero lag",
  },
  {
    icon: Edit,
    title: "Powerful Editing",
    description: "Professional editing tools at your fingertips",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud storage with instant sync across devices",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your recordings with a single click",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-12 sm:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Why Choose Showces?</h2>
        <p className="text-muted-foreground">
          Professional screen recording made simple
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
