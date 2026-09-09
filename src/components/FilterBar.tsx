"use client";

export interface FilterFacet {
  key: string;
  label: string;
  options: string[];
}

interface FilterBarProps {
  facets: FilterFacet[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export function FilterBar({ facets, values, onChange }: FilterBarProps) {
  return (
    <div className="form" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", maxWidth: "none", gap: "1rem" }} role="group" aria-label="Filters">
      {facets.map((facet) => (
        <div className="field" key={facet.key}>
          <label htmlFor={`filter-${facet.key}`}>{facet.label}</label>
          <select
            id={`filter-${facet.key}`}
            value={values[facet.key] ?? ""}
            onChange={(event) => onChange(facet.key, event.target.value)}
          >
            <option value="">All</option>
            {facet.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
