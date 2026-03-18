import type { PersonProfile } from "@/lib/workshop-content";

type PersonCardProps = {
  person: PersonProfile;
  dark?: boolean;
};

export function PersonCard({ person, dark = false }: PersonCardProps) {
  const cardClassName = dark
    ? "rounded-[1.8rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
    : "rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-elevated)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)]";

  const roleClassName = dark
    ? "font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-strong)]"
    : "font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]";

  const titleClassName = dark
    ? "mt-4 font-display text-2xl tracking-tight text-white"
    : "mt-4 font-display text-2xl tracking-tight text-[var(--color-ink)]";

  const bodyClassName = dark
    ? "mt-4 text-sm leading-7 text-white/72"
    : "mt-4 text-sm leading-7 text-[var(--color-muted-ink)]";

  const linkClassName = dark
    ? "mt-5 inline-flex text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-white"
    : "mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-ink)]";

  return (
    <article className={cardClassName}>
      <p className={roleClassName}>{person.role}</p>
      <h3 className={titleClassName}>{person.name}</h3>
      <p className={bodyClassName}>{person.affiliation}</p>
      <p className={bodyClassName}>{person.summary}</p>
      {person.email.includes("@") ? (
        <a href={`mailto:${person.email}`} className={linkClassName}>
          {person.email}
        </a>
      ) : (
        <p className={linkClassName}>{person.email}</p>
      )}
    </article>
  );
}
