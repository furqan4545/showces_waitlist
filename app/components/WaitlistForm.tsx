// "use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useToast } from "@/hooks/use-toast";
// import { useLocation } from "wouter";
// import confetti from "canvas-confetti";
// import { useState, useEffect } from "react";
// import supabase from "@/app/supabaseClient";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Copy } from "lucide-react";

// const PRICING_MAP: Record<string, string> = {
//   Monthly: "40",
//   Yearly: "130",
//   Lifetime: "180",
// };

// const formSchema = z.object({
//   email: z.string().email("Please enter a valid email"),
//   pricingTier: z.enum(["Monthly", "Yearly", "Lifetime"]).optional(),
// });

// export default function WaitlistForm() {
//   const { toast } = useToast();
//   const [location] = useLocation();
//   const [referralUrl, setReferralUrl] = useState<string>();
//   const [showReferralDialog, setShowReferralDialog] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [position, setPosition] = useState<number | null>(null);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       pricingTier: undefined,
//     },
//   });

//   // Get referral code from URL params
//   const referredBy = new URLSearchParams(location.split("?")[1]).get("ref");

//   // Trigger confetti when dialog opens
//   useEffect(() => {
//     if (showReferralDialog) {
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 },
//       });
//     }
//   }, [showReferralDialog]);

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true);
//     try {
//       // Calculate base priority score
//       const basePriority = values.pricingTier
//         ? parseInt(PRICING_MAP[values.pricingTier])
//         : 0;

//       const { data, error } = await supabase.rpc(
//         "add_to_waitlist_with_priority",
//         {
//           p_email: values.email,
//           p_price: values.pricingTier ? PRICING_MAP[values.pricingTier] : null,
//           p_referred_by: referredBy,
//           p_base_priority: basePriority,
//         }
//       );

//       if (error) {
//         if (error.message.includes("duplicate key")) {
//           throw new Error("This email is already on the waitlist");
//         }
//         throw new Error(error.message);
//       }

//       if (!data?.referral_url || !data?.position) {
//         throw new Error("Could not process your request. Please try again.");
//       }

//       setPosition(data.position);
//       setReferralUrl(data.referral_url);

//       toast({
//         title: "Success! 🎉",
//         description: `You've been added to the waitlist at position #${data.position}.`,
//       });

//       setShowReferralDialog(true);
//       form.reset();
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description:
//           error.message || "Something went wrong. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   const copyReferralUrl = async () => {
//     try {
//       await navigator.clipboard.writeText(referralUrl!);
//       toast({
//         title: "Copied! 📋",
//         description: "Referral link copied to clipboard",
//       });
//     } catch (err) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description:
//           "Failed to copy referral link. Please try copying manually.",
//       });
//     }
//   };

//   return (
//     <>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="flex flex-col sm:flex-row w-full gap-4"
//         >
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="flex-1 w-full">
//                 <FormControl>
//                   <Input
//                     placeholder="Enter your email"
//                     {...field}
//                     disabled={isSubmitting}
//                     className="h-12 px-4 w-full transition-all duration-200 ease-in-out border-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm disabled:opacity-50"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="pricingTier"
//             render={({ field }) => (
//               <FormItem className="flex-1 w-full">
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   disabled={isSubmitting}
//                 >
//                   <FormControl>
//                     <SelectTrigger className="h-12 w-full transition-all duration-200 ease-in-out border-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm disabled:opacity-50">
//                       <SelectValue placeholder="Select plan (Optional)" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="Monthly">
//                       Monthly ($40) - Basic Priority
//                     </SelectItem>
//                     <SelectItem value="Yearly">
//                       Yearly ($130) - Higher Priority
//                     </SelectItem>
//                     <SelectItem value="Lifetime">
//                       Lifetime ($180) - Top Priority
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full sm:w-auto h-12 px-8 bg-gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//           >
//             {isSubmitting ? "Joining..." : "Join Waitlist"}
//           </Button>
//         </form>
//       </Form>

//       <Dialog open={showReferralDialog} onOpenChange={setShowReferralDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className="text-xl text-center">
//               🎉 You're #{position}!
//             </DialogTitle>
//             <DialogDescription className="text-center text-base space-y-2">
//               <p>Share your referral link to boost your position!</p>
//               <p className="text-sm text-muted-foreground">
//                 Each referral moves you up 5 spots
//               </p>
//             </DialogDescription>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <Input readOnly value={referralUrl} className="flex-1" />
//               <Button onClick={copyReferralUrl} size="icon">
//                 <Copy className="h-4 w-4" />
//               </Button>
//             </div>
//             <Button
//               className="w-full"
//               onClick={() => setShowReferralDialog(false)}
//             >
//               Done
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

import { WaitlistFormClient } from "./WaitlistFormClient";

export default function WaitlistForm() {
  return <WaitlistFormClient />;
}
