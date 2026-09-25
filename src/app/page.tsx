import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}