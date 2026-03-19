import { SectionHeading } from "@/components/workshop/section-heading";
import { workshopContent, type SubmissionPortal } from "@/lib/workshop-content";

export function SubmissionSection() {
  const submissionPortal = workshopContent.submissionPortal as SubmissionPortal;
  // 这里优先使用显式状态位控制投稿入口，而不是继续依赖“URL 是否为空”的隐式判断。
  // 这样在站点还没拿到正式 CMT 链接时，页面可以稳定展示 pending 态；一旦链接下发，只改配置即可切成 ready 态。
  const isPortalReady =
    submissionPortal.siteStatus === "ready" && submissionPortal.portalUrl.trim().length > 0;

  return (
    <section className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(8,14,24,0.98),_rgba(11,19,34,1))]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={submissionPortal.label}
              title={submissionPortal.title}
              description={submissionPortal.description}
              invert
            />

            <article className="rounded-[2rem] border border-[rgba(106,176,255,0.22)] bg-[linear-gradient(180deg,_rgba(223,233,246,0.96),_rgba(202,218,236,0.92))] p-7 text-[var(--color-ink)] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Official Submission Portal
                  </p>
                  <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-night)]">
                    {submissionPortal.portalName} entry for HVG authors
                  </h3>
                </div>
                <span className="inline-flex min-h-11 items-center rounded-full border border-[rgba(8,22,42,0.16)] bg-white/80 px-4 text-sm font-semibold text-[var(--color-night)]">
                  {isPortalReady ? "Portal available" : "Pending activation"}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[rgba(8,22,42,0.78)]">
                {submissionPortal.officialNotice}
              </p>
              <p className="mt-3 text-sm leading-7 text-[rgba(8,22,42,0.72)]">
                {submissionPortal.status}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {isPortalReady ? (
                  <a
                    href={submissionPortal.portalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(106,176,255,0.24)]"
                  >
                    {submissionPortal.ctaLabel}
                  </a>
                ) : (
                  <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(8,22,42,0.16)] bg-white px-6 text-sm font-semibold text-[var(--color-night)]">
                    {submissionPortal.pendingLabel}
                  </span>
                )}
                <a
                  href={`mailto:${submissionPortal.supportEmail}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(8,22,42,0.16)] bg-[rgba(255,255,255,0.72)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Contact for submission questions
                </a>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Before You Submit"
                detail="Prepare your paper according to the workshop and ICPR author instructions before entering the official portal."
              />
              <InfoCard title="Attendance" detail={submissionPortal.attendanceNote} />
              <InfoCard title="Data Access" detail={submissionPortal.dataAccessNote} />
              <InfoCard title="Workshop Policy" detail={submissionPortal.policyNote} />
            </div>
          </div>

          <div className="space-y-6">
            <article className="rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(233,240,248,0.96)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Organizer-side CMT Setup
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-night)]">
                Organizer-side submission readiness
              </h3>
              <p className="mt-4 text-base leading-7 text-[rgba(8,22,42,0.76)]">
                This website does not collect paper files or author metadata directly. The workshop team should activate the official CMT site first, then publish the approved portal URL here.
              </p>

              <ul className="mt-6 grid gap-3 text-sm leading-7 text-[rgba(8,22,42,0.76)]">
                {submissionPortal.requestChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[1.2rem] border border-[rgba(8,22,42,0.08)] bg-white/80 px-4 py-3"
                  >
                    <span className="mt-2 size-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4 lg:grid-cols-2">
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
    <article className="rounded-[1.5rem] border border-[rgba(8,22,42,0.1)] bg-[rgba(236,242,249,0.96)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[rgba(8,22,42,0.76)]">{detail}</p>
    </article>
  );
}

function ReviewPolicyCard() {
  const { reviewPolicy } = workshopContent;

  return (
    <article className="rounded-[1.5rem] border border-[rgba(8,22,42,0.1)] bg-[rgba(236,242,249,0.96)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.16)] lg:col-span-2">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {reviewPolicy.title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[rgba(8,22,42,0.76)]">{reviewPolicy.description}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <TimelineStat label="Paper submission deadline" value={reviewPolicy.timeline.paperSubmissionDeadline} />
        <TimelineStat label="Review period" value={reviewPolicy.timeline.reviewPeriod} />
        <TimelineStat label="Author notifications" value={reviewPolicy.timeline.authorNotifications} />
        <TimelineStat label="Camera-ready deadline" value={reviewPolicy.timeline.cameraReadyDeadline} />
      </div>
      <p className="mt-5 text-sm leading-7 text-[rgba(8,22,42,0.76)]">{reviewPolicy.reviewRule}</p>
      <p className="mt-2 text-sm leading-7 text-[rgba(8,22,42,0.76)]">{reviewPolicy.conflictOfInterestNote}</p>
    </article>
  );
}

function TimelineStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[rgba(8,22,42,0.1)] bg-white p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-night)]">{value}</p>
    </div>
  );
}

function EthicsComplianceCard() {
  return (
    <article className="rounded-[1.5rem] border border-[rgba(8,22,42,0.1)] bg-[rgba(236,242,249,0.96)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {workshopContent.ethicsCompliance.title}
      </p>
      <ul className="mt-3 grid gap-3 text-sm leading-7 text-[rgba(8,22,42,0.76)]">
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
