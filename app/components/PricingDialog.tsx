"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PricingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PricingDialog({ open, onOpenChange }: PricingDialogProps) {
  const handleDiscordJoin = () => {
    window.open("https://discord.gg/YkNyJMy3DB", "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Our Discord Community</DialogTitle>
          <DialogDescription>
            Join our Discord server (0to1) to get early access priority and stay
            updated about our features discussion. We'll make sure to prioritize
            your account based on your interest!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button
            onClick={handleDiscordJoin}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
          >
            Join Discord Server
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
