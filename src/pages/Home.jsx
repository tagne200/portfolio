import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Experience from "../components/sections/Experience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Academics from "../components/sections/Academics.jsx";
import Games from "../components/sections/Games.jsx";
import Contact from "../components/sections/Contact.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Home({ onOpenResume }) {
  useReveal();

  return (
    <>
      <Hero onOpenResume={onOpenResume} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Academics />
      <Games />
      <Contact />
    </>
  );
}
