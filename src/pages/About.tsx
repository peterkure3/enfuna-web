import { Button, Heading, Hero, Grid, Roadmap } from "../components/ui";

const pages = {
  partners: {
    title: "Partners &",
    accent: "Ecosystem",
    description:
      "A connected ecosystem powering payments, services and growth opportunities for ENFUNA users.",
  },
  about: {
    title: "About",
    accent: "ENFUNA",
    description:
      "A digital platform for the people whose work keeps the economy moving.",
  },
};
export default function About({ partners = false }: { partners?: boolean }) {
  const page = pages[partners ? "partners" : "about"];
  return (
    <>
      <Hero
        title={page.title}
        accent={page.accent}
        description={page.description}
      />
      <section className="wrap section-space">
        {partners ? (
          <>
            <Heading center>Our Partners & Ecosystem</Heading>
            <div className="mt-7">
              <Grid
                items={[
                  {
                    icon: "wallet",
                    title: "Mobile Money Partners",
                    description: "Payments through Airtel Money and MTN MoMo.",
                  },
                  {
                    icon: "coins",
                    title: "Financial Partners",
                    description:
                      "Funding and growth opportunities through Funderspick.",
                  },
                  {
                    icon: "shield",
                    title: "Insurance Partners",
                    description:
                      "An ecosystem for health, equipment and business risk protection.",
                  },
                  {
                    icon: "store",
                    title: "Business Partners",
                    description:
                      "A growing network of merchants and service providers.",
                  },
                  {
                    icon: "layers",
                    title: "Technology & Integrations",
                    description:
                      "Platforms connecting payments, verification and business tools.",
                  },
                  {
                    icon: "users",
                    title: "Development Partners",
                    description:
                      "Organisations supporting inclusion, skills and livelihoods.",
                  },
                ]}
              />
            </div>
          </>
        ) : (
          <>
            <div className="about-story">
              <div>
                <span className="eyebrow">
                  EVERYDAY WORK. LASTING OPPORTUNITY.
                </span>
                <Heading>Your work deserves a record.</Heading>
                <p>
                  Every trip, delivery and payment is part of your business.
                  ENFUNA brings these activities together so you can understand
                  your earnings, manage expenses and build a digital work
                  history.
                </p>
                <p>
                  We’re starting with riders, delivery operators and drivers,
                  with vendors, merchants and small businesses planned for
                  future phases.
                </p>
                <Button page="who-we-serve">See Who We Serve</Button>
              </div>
              <img
                src="/images/courier.webp"
                alt="ENFUNA delivery operator wearing a purple uniform and carrying a yellow bag"
              />
            </div>
            <Roadmap />
          </>
        )}
      </section>
    </>
  );
}
