export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-normal text-foreground sm:text-3xl lg:text-[2.15rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[0.96rem] leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
