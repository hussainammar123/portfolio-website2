import AboutSection from './components/AboutSection'
import ChatWidget from './components/ChatWidget'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default App
