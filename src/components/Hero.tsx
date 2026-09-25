import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-16 sm:flex-row sm:items-center sm:pt-24"
    >
      <div className="flex-1">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-xs text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for freelance projects
        </div>

        <h1 className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
          Abdo, a Frontend Developer developer who builds fast, practical web apps.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          I design and build websites and web applications end to end. Currently a
          Computer and Information Sciences Student, taking on freelance work for people who need
          a working product.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Start a project
          </a>
          <a
            href="/cv.pdf"
            download
            className="rounded-full px-6 py-3 text-sm font-medium text-text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-hairline sm:h-56 sm:w-56">
        <Image
          src="/me.jpg"
          alt="Abdo Ali"
          width={224}
          height={224}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}