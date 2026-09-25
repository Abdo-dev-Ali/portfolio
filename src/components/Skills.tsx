import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiSupabase,
  SiVite
} from "react-icons/si";

const skills = [
  { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", Icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
  { name: "Vite", Icon: SiVite, color: "#646cff" },

];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-hairline px-6 py-20">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight">
        What I work with
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-6 text-center"
          >
            <skill.Icon size={32} color={skill.color} />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}