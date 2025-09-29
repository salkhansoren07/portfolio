import { useState } from "react";
import { BsGithub, BsIndent, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between
    border-b border-b-gray-700 bg-black/70 px-6 md:px-16 py-4 md:py-6 text-white backdrop-blur-md">

      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
        text-transparent opacity-80 text-2xl md:text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Salkhan
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contacts</li>
        </a>
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex gap-5">
        <a href="https://www.linkedin.com/in/salkhan-soren-88786b386" target="_blank" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></a>
        <a href="https://github.com/salkhansoren07" target="_blank" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"><BsGithub /></a>
        <a href="https://x.com/salkhansoren07?s=21" target="_blank" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsTwitterX /></a>
        <a href="" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"><BsYoutube/></a>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <BiX /> : <BiMenu />}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Home</a>
          <a href="#tech" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Tech</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">Contacts</a>

          {/* Socials in Mobile */}
          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/salkhan-soren-88786b386" target="_blank" className="cursor-pointer  hover:text-blue-500 hover:opacity-100"><BsLinkedin /></a>
            <a href="https://github.com/salkhansoren07" target="_blank" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"><BsGithub /></a>
            <a href="https://x.com/salkhansoren07?s=21" target="_blank" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsTwitterX /></a>
            <a href="" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"><BsYoutube/></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
