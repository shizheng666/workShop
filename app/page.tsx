import { Footer } from "@/components/workshop/footer";
import { Hero } from "@/components/workshop/hero";
import { OverviewSection } from "@/components/workshop/overview";
import { RouteHighlightsSection } from "@/components/workshop/route-highlights";

export default function Home() {
  return (
    <>
      <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        <Hero />
        <OverviewSection />
        <RouteHighlightsSection />
      </main>
      <Footer />
    </>
  );
}
