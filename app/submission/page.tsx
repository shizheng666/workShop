import { Footer } from "@/components/workshop/footer";
import { PageIntro } from "@/components/workshop/page-intro";
import { SubmissionSection } from "@/components/workshop/registration-section";
import { WorkshopHeader } from "@/components/workshop/site-header";

export default function SubmissionPage() {
  return (
    <>
      <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        <div className="border-b border-[var(--color-line)] bg-[var(--color-night)]">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
            <WorkshopHeader />
          </div>
        </div>
        <PageIntro
          eyebrow="Submission Entry"
          title="Submission"
          description="Use this route for the CMT submission entrance, review policy, diversity note, and ethics compliance information."
        />
        <SubmissionSection />
      </main>
      <Footer />
    </>
  );
}
