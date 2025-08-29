import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen px-60 bg-white">
      <Hero />
      <Education />
      <Skills />
      <Experience />
    </main>
  );
}
