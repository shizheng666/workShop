import Link from "next/link";

import { workshopContent } from "@/lib/workshop-content";

export function RouteHighlightsSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(8,15,28,0.94),_rgba(11,20,36,1))]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {workshopContent.routeHighlights.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-[var(--color-line-strong)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Route {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-ink)]">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted-ink)]">
                {item.description}
              </p>
              <span className="mt-8 inline-flex text-sm font-semibold text-[var(--color-accent)] transition group-hover:text-[var(--color-accent-strong)]">
                Open page
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
