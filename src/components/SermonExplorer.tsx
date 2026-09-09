"use client";

import { useMemo, useState } from "react";
import type { Sermon } from "@/lib/types";
import { SermonCard } from "./Cards";
import { EmptyState } from "./EmptyState";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "./SearchBar";

export function SermonExplorer({ sermons }: { sermons: Sermon[] }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const facets = useMemo(
    () => [
      {
        key: "speaker",
        label: "Speaker",
        options: [...new Set(sermons.map((sermon) => sermon.speaker))],
      },
      {
        key: "series",
        label: "Series",
        options: [...new Set(sermons.map((sermon) => sermon.series).filter(Boolean) as string[])],
      },
      {
        key: "topic",
        label: "Topic",
        options: [...new Set(sermons.map((sermon) => sermon.topic).filter(Boolean) as string[])],
      },
    ],
    [sermons]
  );

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return sermons.filter((sermon) => {
      const matchesTerm =
        term.length === 0 ||
        [sermon.title, sermon.speaker, sermon.series ?? "", sermon.topic ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(term);
      const matchesSpeaker = !filters.speaker || sermon.speaker === filters.speaker;
      const matchesSeries = !filters.series || sermon.series === filters.series;
      const matchesTopic = !filters.topic || sermon.topic === filters.topic;
      return matchesTerm && matchesSpeaker && matchesSeries && matchesTopic;
    });
  }, [sermons, query, filters]);

  if (sermons.length === 0) {
    return (
      <EmptyState
        title="New messages will appear here soon."
        body="Sermons from our services will be published here once available."
      />
    );
  }

  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <SearchBar value={query} onChange={setQuery} label="Search sermons" />
      <FilterBar
        facets={facets}
        values={filters}
        onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
      />
      {visible.length === 0 ? (
        <EmptyState
          title="No sermons match your filters."
          body="Try clearing the search or choosing different filters."
        />
      ) : (
        <div className="card-grid card-grid--3">
          {visible.map((sermon) => (
            <SermonCard key={sermon.slug} sermon={sermon} />
          ))}
        </div>
      )}
    </div>
  );
}
