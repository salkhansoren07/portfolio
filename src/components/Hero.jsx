import image from "/public/mm1.jpg"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center
    py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        
        >
          <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
          hover:shadow-indigo-600 md:w-[350px]" />
        </motion.div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        
        className="flex max-w-[600px] flex-col items-center justify-center
        gap-4 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
        text-transparent text-5xl font-light md:text-7xl ">
          Salkhan Soren
          </h1>
          
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text
          text-transparent text-2xl md:text-3xl">Software Engineer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I am a 3rd-year B.Tech Computer Science student at Parul University, passionate about building
innovative tech solutions and exploring emerging technologies. With strong expertise in full-stack
web development, React.js, SQL, and cloud engineering, I combine technical proficiency with
creativity to deliver impactful results. My hands-on experience in database management, IoT, and
microprocessor-based systems allows me to bridge the gap between software and hardware. Skilled
in networking and effective communication, I excel in collaborative team environments. I am seeking
internship opportunities in web development, cloud computing, or IoT to apply my skills to real-
world challenger.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
