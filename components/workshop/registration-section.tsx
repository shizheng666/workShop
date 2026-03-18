import Link from "next/link";

import { SectionHeading } from "@/components/workshop/section-heading";
import { workshopContent } from "@/lib/workshop-content";

export function SubmissionSection() {
  // 这里保留“是否已有正式 CMT 链接”的内容驱动判断。
  // 当正式入口未发布时，页面会呈现明确占位态，而不是把用户导向错误的旧报名流。
  const hasPortalLink = workshopContent.submissionPortal.portalUrl.trim().length > 0;

  return (
    <section className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(10,18,32,0.94),_rgba(6,11,20,1))]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={workshopContent.submissionPortal.label}
              title={workshopContent.submissionPortal.title}
              description={workshopContent.submissionPortal.description}
            />

            <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Submission Flow
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--color-muted-ink)]">
                <li>1. Prepare your paper according to the workshop and ICPR submission instructions.</li>
                <li>2. Submit the paper through CMT, which manages submission and review for the workshop.</li>
                <li>3. Complete conference attendance registration separately if your paper is accepted.</li>
              </ul>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted-ink)]">
                {workshopContent.submissionPortal.status}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-elevated-strong)] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {workshopContent.submissionPortal.portalName}
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-ink)]">
                Submit your paper through the official review portal
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted-ink)]">
                {workshopContent.submissionPortal.attendanceNote}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {hasPortalLink ? (
                  <Link
                    href={workshopContent.submissionPortal.portalUrl}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(106,176,255,0.24)]"
                  >
                    {workshopContent.submissionPortal.ctaLabel}
                  </Link>
                ) : (
                  <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-dashed border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.06)] px-6 text-sm font-semibold text-[var(--color-accent-strong)]">
                    {workshopContent.submissionPortal.ctaLabel}
                  </span>
                )}
                <a
                  href={`mailto:${workshopContent.contact.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] px-6 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Contact for submission questions
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <InfoCard title="Data Access" detail={workshopContent.submissionPortal.dataAccessNote} />
              <InfoCard title="Workshop Policy" detail={workshopContent.submissionPortal.policyNote} />
              <ReviewPolicyCard />
              <InfoCard
                title={workshopContent.diversityPolicy.title}
                detail={`${workshopContent.diversityPolicy.description} ${workshopContent.diversityPolicy.representationSummary}`}
              />
              <EthicsComplianceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, detail }: { title: string; detail: string }) {
  return (
    <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted-ink)]">{detail}</p>
    </article>
  );
}

function ReviewPolicyCard() {
  const { reviewPolicy } = workshopContent;

  return (
    <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5 lg:col-span-2">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {reviewPolicy.title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted-ink)]">{reviewPolicy.description}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <TimelineStat label="Paper submission deadline" value={reviewPolicy.timeline.paperSubmissionDeadline} />
        <TimelineStat label="Review period" value={reviewPolicy.timeline.reviewPeriod} />
        <TimelineStat label="Author notifications" value={reviewPolicy.timeline.authorNotifications} />
        <TimelineStat label="Camera-ready deadline" value={reviewPolicy.timeline.cameraReadyDeadline} />
      </div>
      <p className="mt-5 text-sm leading-7 text-[var(--color-muted-ink)]">{reviewPolicy.reviewRule}</p>
      <p className="mt-2 text-sm leading-7 text-[var(--color-muted-ink)]">{reviewPolicy.conflictOfInterestNote}</p>
    </article>
  );
}

function TimelineStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.05)] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink)]">{value}</p>
    </div>
  );
}

function EthicsComplianceCard() {
  return (
    <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {workshopContent.ethicsCompliance.title}
      </p>
      <ul className="mt-3 grid gap-3 text-sm leading-7 text-[var(--color-muted-ink)]">
        {workshopContent.ethicsCompliance.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 size-2.5 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
