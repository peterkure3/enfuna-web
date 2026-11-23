import { href } from "../routes";
import { Icon } from "../components/Icon";
import { Button, Heading, Hero } from "../components/ui";

export default function Login() {
  return (
    <>
      <Hero
        title="Welcome"
        accent="back."
        description="Access your work, payments and business records through the ENFUNA app."
      />
      <section className="wrap section-space">
        <div className="login-panel">
          <span className="icon-tile">
            <Icon name="shield" />
          </span>
          <Heading>Sign in to the ENFUNA app</Heading>
          <p>
            Use your registered phone number and secure PIN in the ENFUNA app.
            Web account access is not connected yet.
          </p>
          <Button>Get the App</Button>
          <a href={href("help")} className="text-link">
            Get account help
          </a>
        </div>
      </section>
    </>
  );
}
