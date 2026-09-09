import { givingMethods, mpesaPaybill } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { GivingCard } from "@/components/Cards";
import { CopyButton } from "@/components/CopyButton";

export const metadata = pageMetadata({
  title: "Give",
  description:
    "Give to Deliverance Church Utawala via M-Pesa Paybill 4043891. Tithes and offerings support the church ministry, programs and community service.",
  path: "/give",
});

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Giving"
        title="Generous Hearts"
        lede="Your generosity enables us to fulfill our mission and serve our community. Thank you for being a faithful steward of God's blessings."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Give", path: "/give" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Giving Types" title="Choose your giving type" wide />
          <div className="card-grid">
            {givingMethods.map((method) => (
              <GivingCard key={method.slug} method={method} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Payment Method" title="Give via M-Pesa" />
              <div className="prose">
                <p>
                  All giving at {`Deliverance Church Utawala`} is received
                  through M-Pesa. Use the paybill number and account reference
                  below.
                </p>
                <ol style={{ paddingLeft: "1.2rem", display: "grid", gap: "0.5rem" }}>
                  <li>Open M-Pesa and select <strong>Lipa na M-Pesa</strong>.</li>
                  <li>Choose <strong>Paybill</strong> and enter {mpesaPaybill.paybill}.</li>
                  <li>
                    For the account number, enter <strong>{mpesaPaybill.account}</strong>.
                  </li>
                  <li>Enter the amount and confirm with your PIN.</li>
                </ol>
              </div>
            </div>
            <div className="paybill-box">
              <div className="paybill-row">
                <div>
                  <p className="paybill-label">{mpesaPaybill.method} Paybill</p>
                  <p className="paybill-value">{mpesaPaybill.paybill}</p>
                </div>
                <CopyButton value={mpesaPaybill.paybill} label="Copy Paybill" />
              </div>
              <div className="paybill-row">
                <div>
                  <p className="paybill-label">Account</p>
                  <p style={{ color: "var(--ivory)" }}>{mpesaPaybill.account}</p>
                </div>
                <CopyButton value={mpesaPaybill.account} label="Copy Account" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
