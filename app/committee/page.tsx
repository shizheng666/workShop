import { Footer } from "@/components/workshop/footer";
import { OrganizersSection } from "@/components/workshop/organizers";
import { PageIntro } from "@/components/workshop/page-intro";
import { WorkshopHeader } from "@/components/workshop/site-header";

export default function CommitteePage() {
  return (
    <>
      <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        <div className="border-b border-[var(--color-line)] bg-[var(--color-night)]">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
            <WorkshopHeader />
          </div>
        </div>
        <PageIntro
          eyebrow="Committee"
          title="Committee"
          description="Meet the current General Chairs and use the shared contact channel for workshop communication."
        />
        <OrganizersSection />
      </main>
      <Footer />
    </>
  );
}
