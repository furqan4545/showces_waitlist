import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/logo.png"
        alt="Showces Logo"
        className="h-8 md:h-12 w-auto transition-transform duration-200 hover:scale-105"
      />
    </div>
  );
}
