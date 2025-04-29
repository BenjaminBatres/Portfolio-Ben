import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import skinstric from "../../assets/Images/Skinstric-img.png"
import ultraverseMaket from "../../assets/Images/ultraverse-market-img.png"
import netflix from "../../assets/Images/Netflix-img.png"


export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Skinstric",
      year: "2025",
      img: skinstric,
      title: "A routine tailored to what your skin needs.",
      detail: "I redesigned Skinstric.ai and made it more modern. I created this project using NextjS 14. I implemented a camera that uses artificial intelligence (AI) to scan a user's face and display their gender, age, and race. Added a backend database using Prisma, Express.js, and PostgresSQL.",
    },
    {
      client: "Ultraverse Market",
      year: "2025",
      img: ultraverseMaket,
      title: "Create, sell or collect digital items.",
      detail: "In this project, I completely transformed a static HTML, CSS, JavaScript, and React single-page application into an interactive user interface using animations, transitions, and carousels. I fetched the user's data from an API request and made it dynamic. I utilized Git version controls and interface to work and thrive in a virtual and collaborative team environment.",
    },
    {
      client: "Netflix Clone",
      year: "2024",
      img: netflix,
      title: "Watch your favorite movies",
      detail: "I created a Netflix clone using React and Firebase to practice building a dynamic and responsive web application. The app fetches data from the TMDb API to display movies and TV shows by category, supports user authentication, and is fully responsive. Through this project, I strengthened my skills in API intergation, React hooks, and UI design.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
