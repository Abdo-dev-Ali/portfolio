const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                  <a href="#top" className="font-[family-name:var(--font-heading)] text-lg font-semibold">
          Abdo<span className="text-accent">.</span>dev
        </a>
        <ul className="hidden gap-8 text-sm text-text-muted sm:flex">
    {links.map((link)=> (
        <li key={link.href}>
            <a href={link.href} className="transition-colors hover:text-text">
        {link.label}
            </a>
        </li>
    ))}
        </ul>
        <a
        href="#contact"
        className="rounded-full border border-hairline px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
        >
            Hire me
        </a>
        </nav>
    </header>
  )
}

export default Nav