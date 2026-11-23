import { people } from "../content";
import type { Feature } from "../content";
import { href } from "../routes";
import { Icon } from "../components/Icon";
import { Hero, Roadmap } from "../components/ui";

const steps: Feature[] = [
  {
    icon: "user",
    title: "Sign Up & Verify",
    description:
      "Create your ENFUNA account and complete identity verification (KYC).",
  },
  {
    icon: "bike",
    title: "Do Your Work",
    description:
      "Use ENFUNA for your daily trips, deliveries or transport jobs.",
  },
  {
    icon: "wallet",
    title: "Get Paid & Manage Earnings",
    description:
      "Receive customer payments, manage your wallet and track income and expenses.",
  },
  {
    icon: "chart",
    title: "Build Your Business Record",
    description:
      "Keep a digital history of your work, earnings and financial activity.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Hero
        title="How ENFUNA"
        accent="Works"
        description="A simple process to digitise your work, get paid and build a reliable business record."
      />
      <section className="wrap section-space">
        <div className="steps-grid">
          {steps.map((s, i) => (
            <article className="step-card" key={s.title}>
              <span className="step-number">{i + 1}</span>
              <span className="step-art">
                <Icon name={s.icon} />
              </span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
        <div className="people-band">
          <div>
            <span className="heading-dash" />
            <h2>
              Built for today.
              <br />
              <span>Growing for tomorrow.</span>
            </h2>
          </div>
          {people.map((p) => (
            <a href={href("who-we-serve")} key={p.id}>
              <img src={`/images/${p.id}.webp`} alt={`ENFUNA ${p.id}`} />
              <span>
                <Icon name={p.icon} />
                {p.name}
              </span>
            </a>
          ))}
        </div>
        <Roadmap />
      </section>
    </>
  );
}
