"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-heading)] text-lg font-semibold"
        >
          Abdo<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden gap-8 text-sm text-text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-hairline px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Hire me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline transition-colors hover:border-accent sm:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-text transition-transform ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-text transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-text transition-transform ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-hairline bg-bg px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm text-text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-full border border-hairline px-4 py-2 text-center transition-colors hover:border-accent hover:text-accent"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Nav;