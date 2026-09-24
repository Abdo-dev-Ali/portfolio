import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
          <Skills />
        <Projects />
        <Contact />

        {/* باقي الأقسام هنضيفها هنا واحدة ورا التانية */}
      </main>
    </>
  );
}