import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}