import { z } from "zod";

export const PRICING_MAP: Record<string, string> = {
  Monthly: "40",
  Yearly: "130",
  Lifetime: "180",
};

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  pricingTier: z.string().optional(),
});
