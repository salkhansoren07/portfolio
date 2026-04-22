import image from "/mm1.jpg"
import { motion as Motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full scroll-mt-32 items-center justify-center py-28"
    >
      <div className="grid w-full items-center gap-14 text-white md:grid-cols-[0.95fr_1.05fr] md:gap-10">
        <Motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-sky-400/10 to-fuchsia-500/25 blur-2xl"></div>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur-sm">
              <img
                src={image}
                alt="Portrait of Salkhan Soren"
                width="500"
                height="500"
                fetchPriority="high"
                decoding="async"
                className="w-[280px] rounded-[1.5rem] object-cover shadow-xl shadow-indigo-950/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] md:w-[370px]"
              />
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-2xl flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200 shadow-lg shadow-blue-950/20">
            Full-Stack Developer • Cloud • IoT
          </span>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">
              Salkhan Soren
            </p>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Building practical products with
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                {" "}clean code and bold ideas
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              I am a 3rd-year B.Tech Computer Science student at Parul University, focused on
              full-stack web development, SQL, cloud engineering, and IoT. I enjoy turning
              technical ideas into clear, usable products and I am looking for internship
              opportunities where I can keep building real-world systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {["React", "SQL", "Cloud", "IoT Systems"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-medium tracking-wide text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero
