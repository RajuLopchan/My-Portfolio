import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
