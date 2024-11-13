"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { useState, useEffect } from "react";
import { formSchema } from "@/lib/waitlist-constants";
import supabase from "@/app/supabaseClient";
import { z } from "zod";
import { useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SuccessDialog } from "./SuccessDialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WaitlistFormClient() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [referralUrl, setReferralUrl] = useState<string>();
  const [showReferralDialog, setShowReferralDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pricingTier: "",
    },
  });

  const referredBy = searchParams.get("ref");

  useEffect(() => {
    if (showReferralDialog) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showReferralDialog]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const { data: response, error } = await supabase.rpc("add_to_waitlist", {
        p_email: data.email,
        p_preferred_cost: data.pricingTier || "Null", // Provide default if not selected
      });

      if (error) throw error;

      // Show success dialog instead of immediate confetti
      setShowSuccessDialog(true);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyReferralUrl = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl!);
      toast({
        title: "Copied! 📋",
        description: "Referral link copied to clipboard",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Failed to copy referral link. Please try copying manually.",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row w-full gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    disabled={isSubmitting}
                    className="h-12 px-4 w-full transition-all duration-200 ease-in-out border-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pricingTier"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 w-full transition-all duration-200 ease-in-out border-2 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm disabled:opacity-50">
                      <SelectValue placeholder="Select plan (Optional)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Monthly">
                      Monthly ($40) - Basic Priority
                    </SelectItem>
                    <SelectItem value="Yearly">
                      Yearly ($130) - Higher Priority
                    </SelectItem>
                    <SelectItem value="Lifetime">
                      Lifetime ($180) - Top Priority
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-12 px-8  hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            variant="default"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </Form>

      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      />
    </>
  );
}
