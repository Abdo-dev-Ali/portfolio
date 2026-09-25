import { FiLayout, FiDatabase, FiFigma } from "react-icons/fi";

const services = [
  {
    title: "Websites & web apps built from scratch",
    description:
      "A fast, responsive website or web app built with React and Next.js — from a single landing page to a full multi-page product.",
    Icon: FiLayout,
  },
  {
    title: "Authentication & database setup",
    description:
      "User accounts, login, and a real database wired up with Supabase — including row-level security so each user's data stays private.",
    Icon: FiDatabase,
  },
  {
    title: "Turning a design into a working site",
    description:
      "Have a Figma file or a design mockup? I turn it into a pixel-accurate, responsive site that works on every screen size.",
    Icon: FiFigma,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl border-t border-hairline px-6 py-20">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight">
        What I can build for you
      </h2>
      <p className="mt-3 max-w-lg text-text-muted">
        Freelance web development services, focused on getting a working
        product in your hands.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-hairline bg-surface p-6"
          >
            <service.Icon size={24} className="text-accent" />
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-base font-semibold">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}