import Link from "next/link";

import { workshopContent } from "@/lib/workshop-content";
import { cn } from "@/lib/utils";

type WorkshopHeaderProps = {
  className?: string;
};

export function WorkshopHeader({ className }: WorkshopHeaderProps) {
  return (
    <header className={cn("flex flex-wrap items-center justify-between gap-4", className)}>
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.32em] text-white/72 transition hover:text-white"
      >
        ICPR 2026 Workshop
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-white/78">
        {workshopContent.navigation.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
