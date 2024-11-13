// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";

// const PRICING_TIERS = [
//   {
//     name: "Monthly",
//     price: "$40",
//     description: "Perfect for short-term projects",
//     features: [
//       "Unlimited recordings",
//       "Full HD export",
//       "Basic editing tools",
//       "Cloud storage (10GB)",
//     ],
//   },
//   {
//     name: "Yearly",
//     price: "$130",
//     description: "Best value for regular users",
//     features: [
//       "Everything in Monthly",
//       "4K export",
//       "Advanced editing suite",
//       "Cloud storage (100GB)",
//     ],
//     popular: true,
//   },
//   {
//     name: "Lifetime",
//     price: "$180",
//     description: "One-time purchase, forever access",
//     features: [
//       "Everything in Yearly",
//       "8K export",
//       "Premium effects",
//       "Unlimited cloud storage",
//     ],
//   },
// ];

// export default function PricingSection() {
//   return (
//     <section className="py-12 sm:py-20">
//       <div className="text-center mb-8 sm:mb-12">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
//           Simple, Transparent Pricing
//         </h2>
//         <p className="text-muted-foreground">
//           Choose the perfect plan for your needs
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//         {PRICING_TIERS.map((tier) => (
//           <Card
//             key={tier.name}
//             className={tier.popular ? "border-primary shadow-lg" : ""}
//           >
//             <CardHeader>
//               <CardTitle>{tier.name}</CardTitle>
//               <CardDescription>{tier.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
//                 {tier.price}
//               </div>
//               <ul className="space-y-3">
//                 {tier.features.map((feature) => (
//                   <li key={feature} className="flex items-center gap-2">
//                     <Check className="h-4 w-4 shrink-0 text-primary" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 className="w-full"
//                 variant={tier.popular ? "default" : "outline"}
//               >
//                 Get Started
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

import { PricingCard } from "./PricingCard";

const PRICING_TIERS = [
  {
    name: "Monthly",
    price: "$40",
    description: "Perfect for short-term projects",
    features: [
      "Unlimited recordings",
      "Full HD export",
      "Basic editing tools",
      "Cloud storage (10GB)",
    ],
  },
  {
    name: "Yearly",
    price: "$130",
    description: "Best value for regular users",
    features: [
      "Everything in Monthly",
      "4K export",
      "AI Effects & Voiceover",
      "Cloud storage (80GB)",
    ],
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$180",
    description: "One-time purchase, forever access",
    features: [
      "Everything in Yearly",
      "4K export",
      "AI Effects & Voiceover",
      "200GB cloud storage",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  );
}
