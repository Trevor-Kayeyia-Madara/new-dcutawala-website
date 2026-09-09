import { ArtPanel } from "./ArtPanel";

interface PhotoProps {
  src?: string;
  alt: string;
  fallbackLabel: string;
  mark?: string;
  light?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/** Renders real photography when supplied, brand art until then. */
export function Photo({ src, alt, fallbackLabel, mark = "✝", light, style, className }: PhotoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "var(--radius)",
          ...style,
        }}
      />
    );
  }
  return <ArtPanel mark={mark} light={light} label={fallbackLabel} className={className} style={style} />;
}
