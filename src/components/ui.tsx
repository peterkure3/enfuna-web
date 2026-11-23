import type { ReactNode } from "react";

import { people } from "../content";
import type { Feature } from "../content";
import { href } from "../routes";
import { Icon } from "../components/Icon";

export function Logo() {
  return (
    <a href={href()} className="logo" aria-label="ENFUNA home">
      <img
        src="/images/logo.png"
        alt="ENFUNA — Everything Moves"
        width="204"
        height="70"
      />
    </a>
  );
}

export function Button({
  children,
  page = "get-started",
  secondary = false,
}: {
  children: ReactNode;
  page?: string;
  secondary?: boolean;
}) {
  return (
    <a
      href={href(page)}
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
    >
      {children}
    </a>
  );
}

export function Heading({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <h2 className={`section-heading ${center ? "justify-center" : ""}`}>
      <span className="heading-dash" />
      {children}
    </h2>
  );
}

export function PeopleVisual({ small = false }: { small?: boolean }) {
  return (
    <div className={`people-visual ${small ? "people-small" : ""}`}>
      <div className="people-curve" />
      {people.map((p) => (
        <div className={`person person-${p.id}`} key={p.id}>
          <img
            src={`/images/${p.id}.webp`}
            alt={`Smiling ENFUNA ${p.id === "courier" ? "delivery operator" : p.id}`}
            fetchPriority={small ? "auto" : "high"}
          />
          {!small && (
            <span className="person-label">
              <Icon name={p.icon} />
              {p.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function Hero({
  title,
  accent,
  description,
}: {
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <div className="page-hero-copy">
          <span className="eyebrow">EVERYTHING MOVES</span>
          <h1>
            {title} <span>{accent}</span>
          </h1>
          <p>{description}</p>
        </div>
        <PeopleVisual small />
      </div>
    </section>
  );
}

export function Grid({
  items,
  five = false,
}: {
  items: Feature[];
  five?: boolean;
}) {
  return (
    <div
      className={`grid gap-4 ${five ? "md:grid-cols-3 xl:grid-cols-5" : "md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((x) => (
        <article className="feature-card" key={x.title}>
          <span className="icon-tile">
            <Icon name={x.icon} />
          </span>
          <h3>{x.title}</h3>
          <p>{x.description}</p>
        </article>
      ))}
    </div>
  );
}

export function Roadmap() {
  return (
    <div className="roadmap">
      <div className="roadmap-title">
        <span className="heading-dash" />
        <strong>
          One platform.
          <br />
          Growing with you.
        </strong>
      </div>
      {[
        {
          icon: "route",
          title: "Phase 1 (Now)",
          text: "Riders · Delivery Operators · Drivers",
        },
        { icon: "store", title: "Phase 2", text: "Vendors & Merchants" },
        {
          icon: "building",
          title: "Phase 3",
          text: "Small & Medium Businesses",
        },
      ].map((x) => (
        <div key={x.title}>
          <Icon name={x.icon} />
          <p>
            <strong>{x.title}</strong>
            <span>{x.text}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Logo />
            <p>
              Your work. Your earnings.
              <br />
              Your business, moving forward.
            </p>
          </div>
          {[
            {
              title: "The platform",
              links: [
                ["how-it-works", "How It Works"],
                ["features", "Features & Services"],
                ["payments", "Payments & Wallet"],
              ],
            },
            {
              title: "Your business",
              links: [
                ["who-we-serve", "Who We Serve"],
                ["business-records", "Business Records"],
                ["funding", "Become Fundable"],
              ],
            },
            {
              title: "ENFUNA",
              links: [
                ["about", "About Us"],
                ["partners", "Partners & Ecosystem"],
                ["help", "Help / FAQ"],
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([id, label]) => (
                <a key={id} href={href(id)}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ENFUNA. All rights reserved.</span>
          <span>
            Everything Moves <span className="footer-dash" />
          </span>
        </div>
      </div>
    </footer>
  );
}
