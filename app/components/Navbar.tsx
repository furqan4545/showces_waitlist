import Logo from "./Logo";
import DownloadDialog from "./DownloadDialog";
import { DiscordButton } from "./DiscordButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-header backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <DiscordButton />
          <DownloadDialog />
        </div>
      </div>
    </nav>
  );
}
