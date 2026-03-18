import { Footer } from "@/components/workshop/footer";
import { PageIntro } from "@/components/workshop/page-intro";
import { ScheduleSection } from "@/components/workshop/schedule";
import { WorkshopHeader } from "@/components/workshop/site-header";

export default function SchedulePage() {
  return (
    <>
      <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        <div className="border-b border-[var(--color-line)] bg-[var(--color-night)]">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
            <WorkshopHeader />
          </div>
        </div>
        <PageIntro
          eyebrow="Agenda"
          title="Schedule"
          description="Review the Friday morning workshop agenda and the timing of each session block before the event."
        />
        <ScheduleSection />
      </main>
      <Footer />
    </>
  );
}
