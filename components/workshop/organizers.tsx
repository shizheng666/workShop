import { SectionHeading } from "@/components/workshop/section-heading";
import { PersonCard } from "@/components/workshop/person-card";
import { workshopContent } from "@/lib/workshop-content";

export function OrganizersSection() {
  return (
    <section
      className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(5,12,23,1),_rgba(10,20,40,1))] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Committee"
          title="General Chairs & Contact"
          description="The current committee page presents the General Chairs together with the shared workshop contact desk for organizational communication."
          invert
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {workshopContent.generalChairs.map((chair) => (
              <PersonCard key={`${chair.name}-${chair.email}`} person={chair} dark />
            ))}
          </div>

          <article className="rounded-[1.8rem] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/56">
              Contact Desk
            </p>
            <h3 className="mt-4 font-display text-3xl tracking-tight text-white">
              General Chairs & Contact
            </h3>
            <p className="mt-4 text-base leading-7 text-white/72">
              {workshopContent.contact.note}
            </p>
            <a
              href={`mailto:${workshopContent.contact.email}`}
              className="mt-8 inline-flex rounded-full border border-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-strong)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              {workshopContent.contact.email}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
