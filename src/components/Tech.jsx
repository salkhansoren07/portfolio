import {
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi"
import { FaSwift } from "react-icons/fa";
import { motion as Motion } from "framer-motion"

const techStack = [
  { name: "JavaScript", icon: BiLogoJavascript, color: "text-yellow-400" },
  { name: "Python", icon: BiLogoPython, color: "text-blue-400" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-300" },
  { name: "React", icon: BiLogoReact, color: "text-cyan-400" },
  { name: "C++", icon: BiLogoCPlusPlus, color: "text-blue-500" },
  { name: "Java", icon: BiLogoJava, color: "text-indigo-300" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-300" },
  { name: "SwiftUI", icon: FaSwift, color: "text-green-400" },
]

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="tech"
      className="flex min-h-[70vh] w-full scroll-mt-32 flex-col items-center justify-center gap-14 py-20 md:gap-20"
    >
      <Motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold text-white md:text-6xl"
      >
        Technologies
      </Motion.h2>

      <Motion.p
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl text-center text-sm leading-7 text-slate-300 md:text-base"
      >
        These are the tools I reach for most when building interfaces, data-backed applications,
        and systems that connect software with hardware.
      </Motion.p>

      <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map(({ name, icon: Icon, color }, index) => (
          <Motion.div
            key={name}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <Icon className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${color}`} />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{name}</p>
                <p className="text-sm text-slate-400">Used in projects and practice</p>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}

export default Tech
