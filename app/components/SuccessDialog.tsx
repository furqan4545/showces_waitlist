"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react"; // Import party icon (optional)

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    if (open) {
      triggerConfetti();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>🎉 Congratulations!</DialogTitle>
          <DialogDescription>
            You've been successfully added to our waitlist. We'll notify you
            when we launch!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={triggerConfetti}
            className="flex items-center gap-2"
          >
            <PartyPopper className="w-4 h-4" />{" "}
            {/* Optional: if using Lucide icons */}
            Dance!
          </Button>
          <Button onClick={() => onOpenChange(false)}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
