import Link from "next/link";

import { WorkshopHeader } from "@/components/workshop/site-header";
import { workshopContent } from "@/lib/workshop-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(106,176,255,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(181,198,224,0.12),_transparent_36%),linear-gradient(180deg,_rgba(7,14,25,0.92),_rgba(7,14,25,1))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_transparent)]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(92,150,255,0.16),_transparent_70%)] blur-3xl" />
      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-14 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14">
        <div className="flex flex-col">
          <WorkshopHeader className="pb-10" />

          <div className="mt-auto max-w-3xl space-y-8 pb-16">
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-[var(--color-accent-strong)]">
              ICPR 2026 Morning Workshop
            </p>
            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.42em] text-white/58">
                {workshopContent.shortName}
              </p>
              <h1 className="font-display text-5xl leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {workshopContent.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
                {workshopContent.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/submission"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(106,176,255,0.24)]"
              >
                Submit via CMT
              </Link>
              <Link
                href="/schedule"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/6 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex items-end">
          <div className="w-full rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-6">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(106,176,255,0.12),_rgba(255,255,255,0.02))] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/64">
                  Event Facts
                </p>
                <dl className="mt-6 grid gap-5">
                  {workshopContent.facts.map((fact) => (
                    <div key={fact.label} className="grid gap-1">
                      <dt className="text-sm text-white/56">{fact.label}</dt>
                      <dd className="text-lg font-semibold text-white">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-[rgba(7,12,22,0.72)] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/56">
                  Research Signals
                </p>
                <p className="text-sm leading-7 text-white/74">
                  The microsite now uses dedicated routes for schedule,
                  committee, and submission guidance so authors can reach the
                  right information faster with less scrolling.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {workshopContent.researchScope.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic.title}
                      className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs text-white/80"
                    >
                      {topic.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
