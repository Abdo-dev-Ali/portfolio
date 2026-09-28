"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["top", ...links.map((link) => link.href.slice(1))];

const ACTIVATION_OFFSET = 140;

const pillBase =
  "rounded-full border px-3.5 py-1.5 transition-all duration-200";
const pillOn =
  "translate-y-px border-accent/40 bg-surface-2 text-accent shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]";
const pillOff = "border-transparent";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("top");

  const lockedRef = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = () => setIsOpen(false);

  const scheduleUnlock = () => {
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      lockedRef.current = false;
      update();
    }, 150);
  };

  const handleNavClick = (id: string) => {
    setActiveId(id);
    lockedRef.current = true;
    scheduleUnlock();
    closeMenu();
  };

  const getCurrentId = () => {
    if (window.scrollY < 50) return "top";

    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atBottom) return sectionIds[sectionIds.length - 1];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
      );

    let current = "top";
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
        current = section.id;
      }
    }
    return current;
  };

  const update = () => setActiveId(getCurrentId());

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (lockedRef.current) {
        scheduleUnlock();
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          onClick={() => handleNavClick("top")}
          aria-current={activeId === "top" ? "page" : undefined}
          className={`-ml-3.5 font-[family-name:var(--font-heading)] text-lg font-semibold ${pillBase} ${
            activeId === "top" ? pillOn : pillOff
          }`}
        >
          Abdo<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 text-sm text-text-muted sm:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href.slice(1))}
                  aria-current={isActive ? "page" : undefined}
                  className={`block ${pillBase} ${
                    isActive ? pillOn : `${pillOff} hover:text-text`
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={() => handleNavClick("contact")}
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
          <ul className="flex flex-col gap-2 text-sm text-text-muted">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href.slice(1))}
                    aria-current={isActive ? "page" : undefined}
                    className={`block ${pillBase} ${
                      isActive ? pillOn : `${pillOff} hover:text-text`
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
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
