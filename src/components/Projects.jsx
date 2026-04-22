import { motion as Motion } from "framer-motion"
import { projectdata } from "./projectdata"

function ScrollReveal({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </Motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  const cardClasses = `group grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] md:grid-cols-[320px_1fr] md:p-7 ${
    index % 2 === 1 ? "md:grid-cols-[1fr_320px]" : ""
  }`
  const CardWrapper = project.link ? "a" : "article"
  const cardProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Open ${project.title}`,
        className: `${cardClasses} cursor-pointer`,
      }
    : {
        className: cardClasses,
      }

  return (
    <ScrollReveal>
      <CardWrapper {...cardProps}>
        <div className={index % 2 === 1 ? "md:order-2" : ""}>
          <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              width="960"
              height="640"
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className={`flex flex-col justify-center gap-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {project.category}
              </span>
              <span className="text-xs uppercase tracking-[0.24em] text-white/35">
                {project.year}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300/50 group-hover:text-cyan-100">
              Visit Live Site
            </span>
          )}
        </div>
      </CardWrapper>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full scroll-mt-32 flex-col items-center justify-center gap-16 py-20 md:py-24"
    >
      <ScrollReveal>
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            Selected Work
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-6xl">Projects That Show How I Build</h2>
          <p className="text-sm leading-7 text-slate-300 md:text-base">
            A few practical projects spanning hardware integration, admin tooling, and everyday
            frontend app development.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex w-full flex-col gap-8 text-white">
        {projectdata.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
