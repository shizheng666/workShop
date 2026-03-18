type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p
        className={
          invert
            ? "font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-strong)]"
            : "font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          invert
            ? "font-display text-3xl tracking-tight text-white sm:text-4xl"
            : "font-display text-3xl tracking-tight text-[var(--color-ink)] sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            invert
              ? "text-base leading-7 text-white/72 sm:text-lg"
              : "text-base leading-7 text-[var(--color-muted-ink)] sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
