import { useState } from "react";

import { faqs } from "../content";
import { href } from "../routes";
import { Icon } from "../components/Icon";
import { Button, Heading, Hero } from "../components/ui";

export default function Help() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All questions");
  const categories = [
    "All questions",
    "Getting started",
    "Payments & Wallet",
    "Account & Security",
    "Funding",
  ];
  const filtered = faqs.filter(
    (f) =>
      (category === "All questions" || f.category === category) &&
      `${f.question} ${f.answer}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <Hero
        title="Help /"
        accent="FAQ"
        description="Answers, guidance and support for using ENFUNA."
      />
      <section className="wrap section-space">
        <div className="help-search">
          <Icon name="search" />
          <label className="sr-only" htmlFor="help-search">
            Search help and FAQs
          </label>
          <input
            id="help-search"
            type="search"
            placeholder="Search for help, guides or FAQs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span>{filtered.length} answers</span>
        </div>
        <div className="help-layout">
          <aside aria-label="Help categories">
            {categories.map((c, i) => (
              <button
                className={category === c ? "selected" : ""}
                aria-pressed={category === c}
                key={c}
                onClick={() => setCategory(c)}
              >
                <Icon name={["help", "book", "wallet", "shield", "coins"][i]} />
                {c}
                <Icon name="chevron" />
              </button>
            ))}
          </aside>
          <div className="faq-list">
            <Heading>Frequently Asked Questions</Heading>
            {filtered.length ? (
              filtered.map((f) => (
                <details key={f.question}>
                  <summary>
                    {f.question}
                    <Icon name="chevron" />
                  </summary>
                  <p>{f.answer}</p>
                </details>
              ))
            ) : (
              <div className="empty-state">
                <Icon name="search" />
                <h3>No matching answers</h3>
                <p>Try another search or choose a different category.</p>
                <button
                  className="text-link"
                  onClick={() => {
                    setQuery("");
                    setCategory("All questions");
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          <aside className="support-card">
            <Icon name="headphones" />
            <h2>Need a little guidance?</h2>
            <p>See how to set up your account and start using ENFUNA.</p>
            <Button page="how-it-works">See How It Works</Button>
            <a href={href("get-started")} className="text-link">
              Get the app <Icon name="chevron" />
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
