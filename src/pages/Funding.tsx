import { Icon } from "../components/Icon";
import { Heading, Hero } from "../components/ui";

export default function Funding() {
  const fundingSteps = [
    {
      icon: "user",
      title: "Get Verified (KYC)",
      description:
        "Create your ENFUNA account and verify your identity and business.",
    },
    {
      icon: "chart",
      title: "Build Your Record",
      description:
        "Record your payments, trips and expenses to create a reliable business history.",
    },
    {
      icon: "shield",
      title: "Grow Your Trust Score",
      description:
        "Build your reputation with consistent activity, payments and good performance.",
    },
    {
      icon: "coins",
      title: "Access Funding",
      description:
        "Apply for business funding through our funding partner, Funderspick.",
    },
  ];
  return (
    <>
      <Hero
        title="Become"
        accent="Fundable"
        description="Build your business record, grow your trust score and prepare for funding opportunities through Funderspick."
      />
      <section className="wrap section-space">
        <Heading center>Your Path to Funding</Heading>
        <div className="funding-grid mt-7">
          {fundingSteps.map((s, i) => (
            <article className="feature-card" key={s.title}>
              <span className="funding-number">{i + 1}</span>
              <Icon name={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
        <div className="partner-band">
          <div>
            <span className="eyebrow">OUR FUNDING PARTNER</span>
            <strong>
              Funderspick<span>↗</span>
            </strong>
          </div>
          <p>
            A funding platform connecting verified businesses to capital,
            investors and growth opportunities.
          </p>
        </div>
        <Heading>Funding Options</Heading>
        <div className="funding-options">
          {[
            { icon: "coins", title: "Working Capital" },
            { icon: "car", title: "Asset Financing" },
            { icon: "store", title: "Business Expansion" },
            { icon: "users", title: "Group Loans" },
            { icon: "shield", title: "Insured Loans" },
          ].map((x) => (
            <div key={x.title}>
              <Icon name={x.icon} />
              <h3>{x.title}</h3>
            </div>
          ))}
        </div>
        <p className="funding-note">
          Funding is subject to eligibility, assessment and the funding
          partner’s terms. A business record does not guarantee approval.
        </p>
      </section>
    </>
  );
}
