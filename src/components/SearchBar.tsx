"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function SearchBar({ value, onChange, label = "Search" }: SearchBarProps) {
  return (
    <div className="field" style={{ maxWidth: "26rem" }}>
      <label htmlFor="site-search">{label}</label>
      <input
        id="site-search"
        type="search"
        placeholder="Search teachings, articles, media…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
