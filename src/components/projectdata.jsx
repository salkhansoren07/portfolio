import image1 from "/uno-preview.jpg"
import image2 from "/admin-preview.jpg"
import image3 from "/Tudy.jpg"
import image4 from "/img4-preview.jpg"

export const projectdata = [
  {
    image: image1,
    category: "Embedded + Hardware",
    year: "2025",
    title: "RFID Based Attendance System",
    description:
      "I developed an RFID-based attendance system using Arduino Uno and an RFID sensor to automate and digitize attendance management. The system enables quick, contactless identification, ensuring accuracy and reducing manual errors.",
    technologies: ["Arduino Uno", "MFRC522", "C", "Python"],
  },
  {
    image: image2,
    category: "Admin Dashboard",
    year: "2025",
    title: "Admin Portal",
    description:
      "I built an admin portal for my RFID-based attendance system using Python CustomTkinter. The portal provides an interactive interface to manage users, view attendance logs, and track real-time data with a focus on clarity and usability.",
    technologies: ["CustomTkinter", "SQL", "Python", "UI Design"],
  },
  {
    image: image3,
    category: "Frontend App",
    year: "2025",
    title: "ToDo App",
    description:
      "I developed a To-Do application for managing daily tasks with creation, editing, and deletion flows. The app focuses on a simple user experience while showing solid frontend structure and practical state handling.",
    technologies: ["React", "Tailwind", "Vite", "TypeScript"],
  },
  {
    image: image4,
    category: "Finance Tracker",
    year: "2025",
    title: "FinTrak",
    link: "https://www.fintrak.online",
    description:
      "I developed FinTrak, a financial tracking app that helps users organize expenses and income, set budgets, and follow spending patterns. It combines a user-friendly interface with practical budgeting workflows.",
    technologies: ["React", "Tailwind", "Node.js", "JavaScript"],
  },
]
