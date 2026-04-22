const Contact = () => {
  return (
    <section id="contact" className="flex min-h-[70vh] w-full scroll-mt-32 items-center justify-center py-20">
      <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            Let&apos;s Connect
          </span>

          <h2 className="text-center text-4xl font-semibold md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ready to build something useful together?
            </span>
          </h2>

          <p className="max-w-2xl text-center text-base leading-8 text-slate-300">
            If you have an internship opportunity, project idea, or just want to talk about web
            development, cloud computing, or IoT, I&apos;d be glad to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:salkhansoren07@gmail.com"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/30"
            >
              Email Me
            </a>
            <a
              href="#home"
              className="rounded-full border border-white/15 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
