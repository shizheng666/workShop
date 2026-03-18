import { SectionHeading } from "@/components/workshop/section-heading";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(8,15,28,0.9),_rgba(11,20,36,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
