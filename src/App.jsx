import { useEffect, useState } from "react";
import StatusBanner from "./components/layout/StatusBanner.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ResumeModal from "./components/widgets/ResumeModal.jsx";
import Home from "./pages/Home.jsx";
import Certifications from "./pages/Certifications.jsx";
import { applyPageMeta } from "./lib/pageMeta.js";
import { usePathname } from "./lib/router.jsx";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    applyPageMeta(pathname);
  }, [pathname]);

  return (
    <>
      <StatusBanner />
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main>
        {pathname === "/certifications" ? (
          <Certifications />
        ) : (
          <Home onOpenResume={() => setResumeOpen(true)} />
        )}
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
