import { people } from "../content";
import { Icon } from "../components/Icon";
import { Heading, Hero, Roadmap } from "../components/ui";

export default function Audience() {
  return (
    <>
      <Hero
        title="Who We"
        accent="Serve"
        description="Built for the people who keep the economy moving."
      />
      <section className="wrap section-space">
        <div className="availability">
          <span className="phase-pill">Available now · Phase 1</span>
          <p>
            Tools to digitise your work, get paid, manage your earnings and
            build a reliable business record.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mt-7">
          {people.map((p) => (
            <article className="person-card" key={p.id}>
              <div>
                <span className="icon-tile">
                  <Icon name={p.icon} />
                </span>
                <h2>{p.name}</h2>
                <ul>
                  {p.benefits.map((b) => (
                    <li key={b}>
                      <Icon name="check" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <img src={`/images/${p.id}.webp`} alt={`ENFUNA ${p.id}`} />
            </article>
          ))}
        </div>
        <div className="future-row">
          <div>
            <Heading>Coming Next</Heading>
            <p>ENFUNA is growing to serve more businesses.</p>
          </div>
          {[
            {
              icon: "store",
              title: "Vendors & Merchants",
              phase: 2,
              text: "Digital payments, sales records and business management tools.",
            },
            {
              icon: "building",
              title: "Small & Medium Businesses",
              phase: 3,
              text: "Accounting, multi-staff tools, reporting and financial readiness.",
            },
          ].map((x) => (
            <article key={x.phase}>
              <Icon name={x.icon} />
              <div>
                <h3>{x.title}</h3>
                <span className="phase-pill">Phase {x.phase}</span>
                <p>{x.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Roadmap />
      </section>
    </>
  );
}
