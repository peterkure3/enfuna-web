import { records, walletFeatures } from "../content";
import { Icon } from "../components/Icon";
import { Heading, Hero, Grid } from "../components/ui";
import { Phone } from "../components/Phone";

const content = {
  wallet: {
    title: "Payments &",
    accent: "Wallet",
    description:
      "Get paid easily, keep your money safe and manage it in your ENFUNA Wallet.",
    heading: "Your money, your control",
    items: walletFeatures,
  },
  records: {
    title: "Business",
    accent: "Records",
    description:
      "A clear, digital record of your work, earnings and business activity. All in one place.",
    heading: "Your work, on the record",
    items: records,
  },
};
export default function Records({ wallet = false }: { wallet?: boolean }) {
  const page = content[wallet ? "wallet" : "records"];
  return (
    <>
      <Hero
        title={page.title}
        accent={page.accent}
        description={page.description}
      />
      <section className="wrap section-space product-section">
        <Phone wallet={wallet} />
        <div>
          <Heading>{page.heading}</Heading>
          <Grid items={page.items} />
        </div>
      </section>
      <div className="wrap pb-12">
        <div className="value-band">
          {wallet ? (
            <>
              <Heading>Payment Options</Heading>
              <span className="payment-airtel">
                airtel <small>money</small>
              </span>
              <span className="payment-mtn">
                MTN <small>MoMo</small>
              </span>
              <span>
                <Icon name="building" />
                Bank Transfer
              </span>
              <span>
                <Icon name="card" />
                Card (POS)
              </span>
            </>
          ) : (
            <>
              <Heading>Why It Matters</Heading>
              {[
                "Know your true income and costs.",
                "Build a reliable business track record.",
                "Prepare for future opportunities.",
              ].map((t) => (
                <span key={t}>
                  <Icon name="check" />
                  {t}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
