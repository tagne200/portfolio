import { useEffect, useState } from "react";
import StatusBanner from "./components/layout/StatusBanner.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import Academics from "./components/sections/Academics.jsx";
import Games from "./components/sections/Games.jsx";
import Contact from "./components/sections/Contact.jsx";
import ResumeModal from "./components/widgets/ResumeModal.jsx";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StatusBanner />
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Academics />
        <Games />
        <Contact />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
