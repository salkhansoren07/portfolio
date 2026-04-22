import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[#030712]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.16),_transparent_22%),linear-gradient(180deg,_#050816_0%,_#030712_45%,_#020617_100%)]"></div>
      <div className="pointer-events-none fixed left-[-12rem] top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="pointer-events-none fixed bottom-16 right-[-10rem] -z-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
