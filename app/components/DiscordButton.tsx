"use client";

import { Button } from "@/components/ui/button";
import { MonitorUp } from "lucide-react";

export function DiscordButton() {
  return (
    <Button
      variant="outline"
      className="hidden sm:flex items-center gap-2"
      onClick={() => window.open("https://discord.gg/YkNyJMy3DB", "_blank")}
    >
      <MonitorUp className="h-4 w-4" />
      Join Discord
    </Button>
  );
}
