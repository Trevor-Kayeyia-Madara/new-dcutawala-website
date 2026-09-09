interface ArtPanelProps {
  mark?: string;
  light?: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Brand-art stand-in used until real DC Utawala photography is supplied.
 * Renders as decorative art; the label keeps it meaningful to screen readers.
 */
export function ArtPanel({ mark = "✝", light, label, className = "", style }: ArtPanelProps) {
  return (
    <div
      className={`art-panel${light ? " art-panel--light" : ""} ${className}`}
      role="img"
      aria-label={label}
      style={style}
    >
      <span className="art-panel__mark" aria-hidden="true">
        {mark}
      </span>
    </div>
  );
}
