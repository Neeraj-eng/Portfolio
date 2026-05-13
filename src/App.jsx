import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProgrammingSection from "./components/ProgramingSection";

function App() {
  return (
    <div >
    <div className="flex min-h-screen w-full flex-col bg-[#121212] overflow-x-hidden">
      <Navbar />

      <div className="w-full px-4 sm:px-8 lg:px-12 py-4">
        <HeroSection />

        <section id="about" className="scroll-mt-24 min-h-screen">
          <AboutMeSection />
        </section>

        <section id="programing" className="scroll-mt-24 min-h-screen">
          <ProgrammingSection />
        </section>

        <section id="projects" className="scroll-mt-24 min-h-screen">
          <ProjectSection />
        </section>

        <section id="contact" className="scroll-mt-24 min-h-screen">
          <EmailSection />
        </section>
      </div>

      <Footer />
    </div>
    </div>
  );
}

export default App;
