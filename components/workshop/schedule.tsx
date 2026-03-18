import { SectionHeading } from "@/components/workshop/section-heading";
import { workshopContent } from "@/lib/workshop-content";

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="border-y border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(13,23,40,0.92),_rgba(8,15,28,0.98))]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Agenda"
          title="Schedule at a Glance"
          description="This agenda is intentionally lightweight for the launch version and can be expanded with speakers, paper sessions, and spotlight blocks later."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {workshopContent.scheduleItems.map((item, index) => (
            <article
              key={`${item.time}-${item.title}`}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.26)] transition hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(106,176,255,0.26),_transparent_70%)] opacity-80 transition group-hover:scale-110" />
              <div className="relative space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Slot {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted-ink)]">
                  {item.time}
                </p>
                <h3 className="font-display text-2xl tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-[var(--color-muted-ink)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
