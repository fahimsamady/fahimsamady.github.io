import Hero from "@/partials/Hero";
import Skills from "@/partials/Skills";
import Education from "@/partials/Education";
import Experience from "@/partials/Experience";
import Projects from "@/partials/Projects";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
