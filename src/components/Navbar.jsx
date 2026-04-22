import { useState } from "react"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { BiX, BiMenu } from "react-icons/bi"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/salkhan-soren-88786b386",
    label: "LinkedIn profile",
    icon: BsLinkedin,
  },
  {
    href: "https://github.com/salkhansoren07",
    label: "GitHub profile",
    icon: BsGithub,
  },
  {
    href: "https://x.com/salkhansoren07?s=21",
    label: "X profile",
    icon: BsTwitterX,
  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed left-1/2 top-4 z-20 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/70 px-5 py-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:px-8">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-xl font-semibold text-transparent md:text-2xl"
        >
          Salkhan
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-4 md:flex">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition-all duration-300 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
