import Link from "next/link";

import { workshopContent } from "@/lib/workshop-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-night)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/68 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p className="max-w-3xl leading-7">{workshopContent.footer.blurb}</p>
        <div className="flex flex-wrap gap-4">
          {workshopContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
