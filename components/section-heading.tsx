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
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
