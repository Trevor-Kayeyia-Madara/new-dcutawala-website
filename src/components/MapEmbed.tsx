import { externalLinks, siteConfig } from "@/lib/content";

export function MapEmbed() {
  const query = encodeURIComponent(
    `Deliverance Church Utawala, ${siteConfig.address.full}`
  );
  return (
    <div className="map-frame">
      <iframe
        title={`Map — ${siteConfig.displayName}, ${siteConfig.address.full}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <noscript>
        <p style={{ padding: "1rem" }}>
          <a href={externalLinks.maps} target="_blank" rel="noopener noreferrer">
            Open map — {siteConfig.address.full}
          </a>
        </p>
      </noscript>
    </div>
  );
}
