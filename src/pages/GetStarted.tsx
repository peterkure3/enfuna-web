import { useState } from "react";

import { href } from "../routes";
import { Icon } from "../components/Icon";
import { Heading, Hero } from "../components/ui";
import { Phone } from "../components/Phone";

export default function GetStarted() {
  const [platform, setPlatform] = useState("Android");
  return (
    <>
      <Hero
        title="Your next step"
        accent="starts here."
        description="Bring your work, payments and business records together with ENFUNA."
      />
      <section className="wrap section-space">
        <div className="get-started">
          <div>
            <span className="eyebrow">GET THE ENFUNA APP</span>
            <Heading>Everything moves with you.</Heading>
            <p>
              ENFUNA is built for everyday trips, deliveries and transport work.
              Choose your device to check app availability.
            </p>
            <div className="platform-tabs" aria-label="Choose your device">
              {["Android", "iOS"].map((p) => (
                <button
                  key={p}
                  aria-pressed={platform === p}
                  onClick={() => setPlatform(p)}
                >
                  <Icon name="phone" />
                  {p}
                </button>
              ))}
            </div>
            <div className="availability-notice" role="status">
              <Icon name="info" />
              <div>
                <strong>{platform} download link is not available yet.</strong>
                <p>Check back here for the official ENFUNA app download.</p>
              </div>
            </div>
            <a href={href("how-it-works")} className="text-link">
              See how to get started <Icon name="chevron" />
            </a>
          </div>
          <Phone />
        </div>
      </section>
    </>
  );
}
