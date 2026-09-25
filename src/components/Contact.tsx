import { SiGmail, SiGithub, SiWhatsapp } from "react-icons/si";
import {FaLinkedinIn} from "react-icons/fa"
const links = [
  {
    label: "Email",
    href: "mailto:abdelrahman.dev.ali@gmail.com",
    Icon: SiGmail,
    color: "#ea4335",
  },
  {
    label: "GitHub",
    href: "https://github.com/Abdo-dev-Ali",
    Icon: SiGithub,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdo-ali-2b8793438",
    Icon: FaLinkedinIn,
    color: "#0a66c2",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201118982131",
    Icon: SiWhatsapp,
    color: "#25d366",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-hairline px-6 py-20">
      <div className="rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-muted">
          I&apos;m currently taking on freelance web development work. Reach
          out and let&apos;s talk about it.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline transition-colors hover:border-accent"
            >
              <link.Icon size={20} color={link.color} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}