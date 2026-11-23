import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "./content";
import { href } from "./routes";
import { Icon } from "./components/Icon";
import { Logo, Button, Footer } from "./components/ui";

import Home from "./pages/Home";
import Audience from "./pages/Audience";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Records from "./pages/Records";
import Funding from "./pages/Funding";
import Help from "./pages/Help";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";

const getPage = () =>
  window.location.hash.replace(/^#\/?/, "").split("?")[0] || "home";

const pageTitles = Object.fromEntries([
  ...navigation,
  ["get-started", "Get Started"],
  ["login", "Login"],
  ["payments", "Payments & Wallet"],
  ["partners", "Partners & Ecosystem"],
]);
function NavigationLink({
  id,
  label,
  page,
}: {
  id: string;
  label: string;
  page: string;
}) {
  return (
    <a
      className={page === id ? "active" : ""}
      aria-current={page === id ? "page" : undefined}
      href={href(id)}
    >
      {label}
    </a>
  );
}

function MenuToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="menu-toggle"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="main-navigation"
      aria-label={open ? "Close navigation" : "Open navigation"}
    >
      {open ? <X /> : <Menu />}
    </button>
  );
}

function App() {
  const [page, setPage] = useState(getPage);
  const [menu, setMenu] = useState(false);
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    const change = () => {
      setPage(getPage());
      setMenu(false);
      window.scrollTo({ top: 0, behavior: "instant" });
      main.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    document.title = `${pageTitles[page] ?? "Page not found"} — ENFUNA`;
  }, [page]);
  useEffect(() => {
    if (!menu) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menu]);
  const pages: Record<string, ReactNode> = {
    home: <Home />,
    about: <About />,
    "how-it-works": <HowItWorks />,
    "who-we-serve": <Audience />,
    features: <Features />,
    "business-records": <Records />,
    payments: <Records wallet />,
    funding: <Funding />,
    partners: <About partners />,
    help: <Help />,
    "get-started": <GetStarted />,
    login: <Login />,
  };
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <MenuToggle open={menu} onToggle={() => setMenu(!menu)} />
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={menu ? "is-open" : ""}
          >
            {navigation.map(([id, label]) => (
              <NavigationLink key={id} id={id} label={label} page={page} />
            ))}
            <div className="nav-actions">
              <a
                className="search-link"
                href={href("help")}
                aria-label="Search help"
              >
                <Icon name="search" />
              </a>
              <Button page="login" secondary>
                Login
              </Button>
              <Button>Get Started</Button>
            </div>
          </nav>
        </div>
      </header>
      <main ref={main} id="main-content" tabIndex={-1}>
        {pages[page] ?? (
          <section className="wrap section-space empty-state">
            <h1>Page not found</h1>
            <p>Let’s get you back on the road.</p>
            <Button page="home">Return Home</Button>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
