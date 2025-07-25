import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import FooterSection from "./components/FooterSection"
import CertificateSection from "./components/CertificateSection"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificateSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
