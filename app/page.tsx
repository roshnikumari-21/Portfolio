import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Projects from './components/Project'
import Skills from './components/Skills'
import Music from './components/Music'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <div className="crt-overlay"></div>
      <div className="grid-bg"></div>
      <main className="min-h-screen text-white overflow-hidden relative z-10">
        <Header />
        <Hero />
        <About />
        <Resume />
        <Certificates />
        <Experience />
        <Projects />
        <Skills />
        <Music />
        <Contact />
      </main>
    </>
  )
}