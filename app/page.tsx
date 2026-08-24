import Header from './components/Header'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-paper">
      <Header />
      <Hero />
      <TechMarquee />
      <About />
      <Resume />
      <Certificates />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
