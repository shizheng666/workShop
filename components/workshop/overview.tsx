"use client";

import { useState } from "react";
import Link from "next/link";

import { SectionHeading } from "@/components/workshop/section-heading";
import { workshopContent } from "@/lib/workshop-content";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview Snapshot" },
  { id: "scope", label: "Research Scope" },
  { id: "submission", label: "Submission Entry" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function OverviewSection() {
  // 这里把首页压缩成三个核心 tab：
  // 综述、研究范围、投稿入口。这样首页保留必要信息，但长内容转交到独立路由页面。
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid auto-rows-fr gap-5">
          <article className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(22,37,60,0.96),_rgba(16,28,46,0.98))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)]">
            <SectionHeading
              eyebrow="Workshop Briefing"
              title="A shorter landing page for researchers, authors, and organizers."
              description="Key workshop context stays on the homepage while schedule, submission policies, and committee details move into dedicated pages."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted-ink)]">
              {workshopContent.researchScope.summary}
            </p>
          </article>

          <div className="grid gap-5 md:grid-cols-3">
            {workshopContent.researchScope.pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Pillar {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted-ink)]">
                  {pillar.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(20,34,56,0.96),_rgba(16,28,48,0.98))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-8">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition",
                  activeTab === tab.id
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-night)] shadow-[0_12px_28px_rgba(94,165,255,0.26)]"
                    : "border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.05)] text-[var(--color-accent-strong)] hover:border-[var(--color-accent)] hover:text-white",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === "overview" ? <OverviewPanel /> : null}
            {activeTab === "scope" ? <ScopePanel /> : null}
            {activeTab === "submission" ? <SubmissionEntryPanel /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
      <article className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-elevated-strong)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Overview
        </p>
        <div className="mt-5 space-y-4">
          {workshopContent.overview.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[var(--color-muted-ink)]">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <article className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Quick Focus
        </p>
        <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-ink)]">
          Workshop focus and expected contribution signal
        </h3>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted-ink)]">
          {workshopContent.researchScope.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {workshopContent.researchScope.topics.slice(0, 4).map((topic) => (
            <span
              key={topic.title}
              className="rounded-full border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.06)] px-4 py-2 text-sm text-[var(--color-accent-strong)]"
            >
              {topic.title}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

function ScopePanel() {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Research Scope
        </p>
        <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-ink)]">
          Core topics for Human-Centric Video Generation
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {workshopContent.researchScope.topics.map((topic) => (
          <article
            key={topic.title}
            className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5"
          >
            <h4 className="font-display text-2xl tracking-tight text-[var(--color-ink)]">
              {topic.title}
            </h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted-ink)]">
              {topic.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function SubmissionEntryPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-elevated-strong)] p-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Submission Entry
        </p>
        <h3 className="mt-4 font-display text-3xl tracking-tight text-[var(--color-ink)]">
          Paper submission, review policy, and compliance notes
        </h3>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted-ink)]">
          Visit the submission page for the CMT entrance, review schedule, diversity note, and ethics compliance statements before submitting.
        </p>
        <Link
          href="/submission"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-night)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(106,176,255,0.24)]"
        >
          Open Submission Page
        </Link>
      </article>

      <div className="grid gap-4">
        <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Review Policy
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted-ink)]">
            Double-blind review, timeline visibility, and conflict-of-interest protection are explained on the submission route.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Submission Access
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted-ink)]">
            Authors will submit via CMT, while general ICPR attendance registration remains separate from the workshop paper flow.
          </p>
        </article>
      </div>
    </div>
  );
}
