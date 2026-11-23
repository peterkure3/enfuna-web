import { features } from "../content";
import { Hero, Grid, Roadmap } from "../components/ui";

export default function Features() {
  return (
    <>
      <Hero
        title="Features &"
        accent="Services"
        description="The tools you need to run your work, get paid, manage earnings and build a verifiable business record."
      />
      <section className="wrap section-space">
        <Grid items={features} five />
        <div className="mt-9">
          <Roadmap />
        </div>
      </section>
    </>
  );
}
