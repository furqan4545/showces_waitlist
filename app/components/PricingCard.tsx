"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingDialog } from "./PricingDialog";

interface PricingCardProps {
  tier: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  };
}

export function PricingCard({ tier }: PricingCardProps) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Card className={tier.popular ? "border-primary shadow-lg" : ""}>
        <CardHeader>
          <CardTitle>{tier.name}</CardTitle>
          <CardDescription>{tier.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            {tier.price}
          </div>
          <ul className="space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={tier.popular ? "default" : "outline"}
            onClick={() => setShowDialog(true)}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>

      <PricingDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
}
