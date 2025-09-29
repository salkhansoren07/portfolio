
import image1 from "/public/uno.png"
import image2 from "/public/Tudy.jpg"
import image3 from "/public/admin.png"

import { motion } from "framer-motion"

const projectdata = [
  {
    image: image1,
    title: "RFID Based Attendance System",
    description: "I developed an RFID-based attendance system using Arduino Uno and an RFID sensor to automate and digitize attendance management. The system enables quick, contactless identification, ensuring accuracy and reducing manual errors. It provides a secure, efficient, and user-friendly solution adaptable for schools, colleges, and organizations to streamline daily attendance tracking.",
    technologies: ["python", "Custom_Tkinter", "SQL"]
  },

  {
    image: image3,
    title: "Admin Portal",
    description: "I built an admin portal for my RFID-based attendance system using Python CustomTkinter. The portal provides an interactive interface to manage users, view attendance logs, and track real-time data. It enhances efficiency, accuracy, and usability, showcasing my skills in Python GUI development, data handling, and system integration.",
    technologies: ["react", "tailwind", "SQL", "pyhton"]
  },

  {
    image: image2,
    title: "ToDo App",
    description: "I developed a To-Do application designed to manage daily tasks efficiently with features like task creation, updating, and deletion. The app provides a simple and user-friendly interface to improve productivity and organization. It demonstrates skills in front-end design, backend logic, and practical implementation of task management solutions.",
    technologies: ["react", "tailwind"]
  }
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once:true}}
    transition={{duration:0.8}}>
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounedd-2xl transition-all
      duration-300 hover:scale-105 md:w-[300px]"/>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center
    justify-center gap-28 p-4 md:px-14 md:py-24">

      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">

        {
          projectdata.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }

      </div>

    </div>
  )
}

export default Projects
