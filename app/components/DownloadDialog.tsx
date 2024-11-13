"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DownloadDialog() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowDialog(true)}
        // className="bg-gradient-primary hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
        variant="default"
      >
        Download
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-base">
              Please join our waitlist. We're launching within 30 days.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
