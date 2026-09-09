import Link from "next/link";
import type {
  Article,
  ChurchEvent,
  Department,
  GivingMethod,
  Leader,
  Ministry,
  Sermon,
  WorshipTeam,
} from "@/lib/types";
import { ScriptureBlock } from "./ScriptureBlock";
import { ArtPanel } from "./ArtPanel";
import { siteConfig } from "@/lib/content";

export function MinistryCard({ ministry, index }: { ministry: Ministry; index: number }) {
  return (
    <Link
      className="card"
      href={`/ministries/${ministry.slug}`}
      style={ministry.image ? { padding: 0, overflow: "hidden" } : undefined}
    >
      {ministry.image && (
        <img
          src={ministry.image}
          alt={ministry.name}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover" }}
        />
      )}
      <div style={{ padding: ministry.image ? "1.5rem 1.75rem 1.75rem" : 0, display: "grid", gap: "0.65rem" }}>
        <span className="card__index">{String(index + 1).padStart(2, "0")}</span>
        <span className="card__subtitle">{ministry.subtitle}</span>
        <h3 className="card__title">{ministry.name}</h3>
        <p className="card__body">{ministry.summary}</p>
        {ministry.ageGroup && (
          <span className="tag-row">
            <span className="tag">{ministry.ageGroup}</span>
          </span>
        )}
      </div>
    </Link>
  );
}

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <div className="card">
      <h3 className="card__title">{department.name}</h3>
      <p className="card__body">{department.summary}</p>
    </div>
  );
}

export function WorshipTeamCard({ team }: { team: WorshipTeam }) {
  return (
    <div className="card card--dark">
      <h3 className="card__title">{team.name}</h3>
      {team.role && <span className="card__subtitle">{team.role}</span>}
    </div>
  );
}

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Link className="card" href={`/leadership/${leader.slug}`} style={{ padding: 0, overflow: "hidden" }}>
      {leader.photo ? (
        <img src={leader.photo} alt={leader.name} style={{ aspectRatio: "4 / 3", objectFit: "cover", objectPosition: "50% 20%", width: "100%" }} />
      ) : (
        <ArtPanel mark="✝" label={`Portrait placeholder for ${leader.name}`} style={{ aspectRatio: "4 / 3", borderRadius: 0 }} />
      )}
      <div style={{ padding: "1.5rem 1.75rem 1.75rem", display: "grid", gap: "0.35rem" }}>
        <span className="card__subtitle">{leader.role}</span>
        <h3 className="card__title">{leader.name}</h3>
      </div>
    </Link>
  );
}

export function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <article
      className="card"
      style={sermon.thumbnail ? { padding: 0, overflow: "hidden" } : undefined}
    >
      {sermon.thumbnail && (
        <img
          src={sermon.thumbnail}
          alt={sermon.title}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }}
        />
      )}
      <div style={{ padding: sermon.thumbnail ? "1.5rem 1.75rem 1.75rem" : 0, display: "grid", gap: "0.65rem" }}>
        <span className="card__subtitle">
          {sermon.date}
          {sermon.series ? ` · ${sermon.series}` : ""}
        </span>
        <h3 className="card__title">{sermon.title}</h3>
        <p className="card__body">{sermon.speaker}</p>
        {sermon.youtubeId ? (
          <Link className="link-arrow" href={`/sermons/${sermon.slug}`}>
            Watch
          </Link>
        ) : (
          <Link className="link-arrow" href={`/sermons/${sermon.slug}`}>
            Details
          </Link>
        )}
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="card" href={`/articles/${article.slug}`}>
      <span className="card__subtitle">
        {article.date} · {article.author}
      </span>
      <h3 className="card__title">{article.title}</h3>
      <p className="card__body">{article.excerpt}</p>
    </Link>
  );
}

export function EventCard({ event }: { event: ChurchEvent }) {
  return (
    <Link
      className="card"
      href={`/events/${event.slug}`}
      style={event.image ? { padding: 0, overflow: "hidden" } : undefined}
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }}
        />
      )}
      <div style={{ padding: event.image ? "1.5rem 1.75rem 1.75rem" : 0, display: "grid", gap: "0.65rem" }}>
        <span className="card__subtitle">
          {event.date} · {event.time}
        </span>
        <h3 className="card__title">{event.title}</h3>
        <p className="card__body">{event.location}</p>
        <span className="tag-row">
          <span className="tag">{event.status}</span>
        </span>
      </div>
    </Link>
  );
}

export function GivingCard({ method }: { method: GivingMethod }) {
  return (
    <div className="card">
      <h3 className="card__title">{method.name}</h3>
      <p className="card__body">{method.description}</p>
      <ScriptureBlock text={method.scripture} reference={method.scriptureReference} />
    </div>
  );
}

export function LocationCard() {
  return (
    <div className="card">
      <span className="card__subtitle">Church Office</span>
      <h3 className="card__title">{siteConfig.displayName}</h3>
      <address className="card__body" style={{ fontStyle: "normal" }}>
        {siteConfig.address.line1},<br />
        {siteConfig.address.line2}
      </address>
      <p className="card__body">
        <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
        <br />
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </div>
  );
}
