import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-5xl border-t border-hairline px-6 py-20"
    >
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight">
        Selected work
      </h2>
      <p className="mt-3 max-w-lg text-text-muted">
        A few applications built to practice the patterns that show up in real
        client projects.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const link = project.demo ?? project.github;

          return (
            <a
              key={project.slug}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-hairline bg-surface transition-colors hover:border-accent"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
