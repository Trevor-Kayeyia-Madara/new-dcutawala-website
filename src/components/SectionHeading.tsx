interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  dark?: boolean;
  wide?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  wide,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`section-head${wide ? " section-head--wide" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-title">{title}</Tag>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
