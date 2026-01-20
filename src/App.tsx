const navItems = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Product", href: "#product" },
  { label: "Demo", href: "#demo" },
  { label: "GitHub", href: "#github" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

type StatCard = {
  value: string;
  label: string;
  sublabel: string;
  source: string;
};

const stats: StatCard[] = [
  {
    value: "$7.4T",
    label: "Global ecommerce sales",
    sublabel: "8.3% annual growth",
    source: "Source:",
  },
  {
    value: "95%",
    label: "Online shoppers",
    sublabel: "vs. 5% physical stores",
    source: "Source:",
  },
  {
    value: "20.2%",
    label: "Online apparel market",
    sublabel: "$1.2T globally by 2025",
    source: "Source:",
  },
  {
    value: "2.7B",
    label: "Digital buyers",
    sublabel: "digital buyers globally in 2025",
    source: "Source:",
  },
];

const steps = [
  {
    title: "Browse normally",
    description:
      "Tailor lives in a side panel, so users shop on any site without leaving the page.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "See product insights and ask questions",
    description:
      "Instant summaries, size guidance, and comparisons appear alongside the product.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M7 11h10M7 15h6M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Save items with one click",
    description:
      "Build a living wardrobe list with tags, notes, and price tracking in seconds.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 6v12m6-6H6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Get your Tailor Wrapped",
    description:
      "A personalized dashboard connects past buys, current intent, and upcoming needs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-slate-900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M6 8h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Zm0 0 2-4h8l2 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const founders = [
  {
    name: "Robbie Evans",
    role: "Co-founder (Product + Engineering)",
    bio: "Product builder focused on elegant shopping workflows, data systems, and AI-driven personalization.",
  },
  {
    name: "Maddalin Evans",
    role: "Co-founder (Strategy + Growth)",
    bio: "Leads go-to-market strategy, partnerships, and the long-term platform vision for Tailor.",
  },
];

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-80 left-[-12%] h-96 w-96 rounded-full bg-emerald-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-[60rem] right-[-8%] h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-display text-lg font-semibold tracking-wide text-slate-900"
          >
            Tailor
          </a>
          <nav className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 md:text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-14 md:gap-28 md:pt-20">
        <section className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p
              className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 motion-safe:animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Investor Brief
            </p>
            <h1
              className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl motion-safe:animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Tailor, modernizing the online shopping experience
            </h1>
            <p
              className="text-lg text-slate-600 motion-safe:animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Tailor is a browser side-panel plus a connected dashboard that
              makes shopping feel curated, organized, and intelligent. We launch
              with Tailor Wardrobe for apparel, then expand across all online
              shopping categories.
            </p>
            <div
              className="flex flex-wrap gap-3 motion-safe:animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <a className="btn-primary" href="#demo">
                Watch the demo
              </a>
              <a
                className="btn-secondary"
                href="https://github.com/placeholder/tailor"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a className="btn-ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div
            className="glass-card space-y-6 p-8 shadow-soft motion-safe:animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Launch focus
              </p>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                Tailor Wardrobe
              </h2>
              <p className="text-sm text-slate-600">
                Your personalized online clothing & apparel shopping assistant.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Intelligence",
                  value: "Personalized insights + recommendations",
                },
                { label: "Recap", value: "Keep track of liked items" },
                { label: "Core users", value: "High-frequency browsers" },
                { label: "Growth", value: "Expansion into beauty, tech, and homeware" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="opportunity"
          className="scroll-mt-28 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Opportunity
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              A massive market with fragmented decision-making
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Shopping happens across dozens of tabs, reviews, and wishlists.
              Tailor compresses the journey into a single side panel and a
              unified dashboard, so shoppers stay confident and retailers see
              higher intent conversion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 transition hover:-translate-y-1"
              >
                <p className="text-3xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.sublabel}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {stat.source}
                </p>
                <span
                  className="mt-4 inline-flex h-1 w-10 rounded-full bg-slate-900/10 motion-safe:animate-fade-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="product"
          className="scroll-mt-28 space-y-10"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Product
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              How it works
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-card flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/10">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Step 0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Demo
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              See Tailor in action
            </h2>
          </div>
          <div className="glass-card p-6 md:p-10">
            <div className="aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-soft">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={`${baseUrl}TailorDemo2.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Demo video served from{" "}
              <span className="font-semibold">/public/TailorDemo2.mp4</span>.
            </p>
          </div>
        </section>

        <section id="github" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              GitHub
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Build with the Tailor team
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              Investors and partners can review the roadmap, engineering
              approach, and product assets directly from the repo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="btn-primary"
              href="https://github.com/placeholder/tailor"
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub repo
            </a>
            <a className="btn-secondary" href="https://example.com/demo-download">
              Download &amp; run demo
            </a>
          </div>
          <pre className="glass-card mt-6 overflow-x-auto p-5 text-xs text-slate-700">
            <code>{`npm install\nnpm run dev`}</code>
          </pre>
        </section>

        <section id="team" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Team
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Founding leadership
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="glass-card flex h-full flex-col gap-4 p-6"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    {founder.role}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{founder.bio}</p>
                <a
                  className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Start the conversation
            </h2>
            <p className="text-base text-slate-600">
              Email us at{" "}
              <span className="font-semibold">tailorteamapp@gmail.com</span>{" "}
              or send a quick note below.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <form
              className="glass-card space-y-4 p-6"
              action="mailto:tailorteamapp@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
                  name="name"
                  placeholder="Investor name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
                  name="email"
                  placeholder="you@firm.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Message
                </label>
                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none"
                  name="message"
                  placeholder="Tell us about your interest in Tailor."
                />
              </div>
              <button className="btn-primary w-full" type="submit">
                Send message
              </button>
            </form>
            <div className="glass-card flex flex-col justify-between gap-6 p-6">
              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Schedule a video call
                </h3>
                <p className="text-sm text-slate-600">
                  Reserve time with the founders to discuss market insights,
                  traction, and the Tailor roadmap.
                </p>
              </div>
              <a
                className="btn-secondary w-full text-center"
                href="https://example.com/book-a-call"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>Tailor</span>
          <span>Modernizing the online shopping experience</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
