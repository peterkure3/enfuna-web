import { people, features } from "../content";
import { href } from "../routes";
import { Icon } from "../components/Icon";
import { Button, Heading, PeopleVisual, Grid, Roadmap } from "../components/ui";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">
              <span /> BUILT FOR YOUR EVERYDAY WORK
            </span>
            <h1>
              A digital platform for{" "}
              <em>riders, delivery operators and drivers.</em>
            </h1>
            <p>
              Digitise your work, receive payments, manage earnings and build a
              reliable business record with ENFUNA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Get Started</Button>
              <Button page="how-it-works" secondary>
                See How It Works <Icon name="play" />
              </Button>
            </div>
            <div className="hero-note">
              <Icon name="shield" />
              <span>Your work. Your earnings. Your future.</span>
            </div>
          </div>
          <PeopleVisual />
        </div>
      </section>
      <div className="wrap">
        <div className="benefit-strip">
          {[
            { icon: "wallet", text: "Receive payments" },
            { icon: "chart", text: "Track earnings" },
            { icon: "clipboard", text: "Keep business records" },
            { icon: "coins", text: "Manage expenses" },
            { icon: "star", text: "Build your trust score" },
            { icon: "shield", text: "Stay safe & secure" },
          ].map((x) => (
            <div key={x.text}>
              <Icon name={x.icon} />
              <span>{x.text}</span>
            </div>
          ))}
        </div>
        <section className="home-audience">
          <div>
            <Heading>Who We Serve</Heading>
            <p className="section-intro">
              For the people who keep the economy moving.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {people.map((p) => (
                <a
                  key={p.id}
                  href={href("who-we-serve")}
                  className="audience-card"
                >
                  <Icon name={p.icon} />
                  <h3>{p.name}</h3>
                  <span className="small-dash" />
                  <p>{p.description}</p>
                  <span className="card-link">
                    See what’s possible <Icon name="chevron" />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="audience-future">
            <Heading>Our Expansion Roadmap</Heading>
            <p className="section-intro">
              More businesses. More possibilities.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "store", title: "Vendors & Merchants", phase: 2 },
                {
                  icon: "building",
                  title: "Small & Medium Businesses",
                  phase: 3,
                },
              ].map((x) => (
                <article className="future-card" key={x.phase}>
                  <Icon name={x.icon} />
                  <h3>{x.title}</h3>
                  <span className="phase-pill">Phase {x.phase}</span>
                  <p>Coming soon</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Roadmap />
      </div>
      <section className="home-tools section-space">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">YOUR BUSINESS, IN ONE PLACE</span>
              <Heading>Tools that move you forward</Heading>
            </div>
            <a className="text-link" href={href("features")}>
              See all features <Icon name="chevron" />
            </a>
          </div>
          <Grid items={features.slice(1, 4)} />
        </div>
      </section>
    </>
  );
}
