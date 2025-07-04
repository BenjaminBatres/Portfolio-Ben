import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import skinstric from "../../assets/Images/Skinstric-img.png"
import ultraverseMaket from "../../assets/Images/Ultraverse-market-img.png"
import netflix from "../../assets/Images/Netflix-img.png"
import youtubeClone from "../../assets/Images/Youtube_Clone-img.png"
import movieAPI from "../../assets/Images/Movie_API-img.png"
import libraryReactProject from "../../assets/Images/Library_React_Project-img.png"
import summaristProject from "../../assets/Images/Summarist-img.png"


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
      link: "https://skintric-project.vercel.app/",
    },
    {
      client: "Ultraverse Market",
      year: "2025",
      img: ultraverseMaket,
      title: "Create, sell or collect digital items.",
      detail: "In this project, I completely transformed a static HTML, CSS, JavaScript, and React single-page application into an interactive user interface using animations, transitions, and carousels. I fetched the user's data from an API request and made it dynamic. I utilized Git version controls and interface to work and thrive in a virtual and collaborative team environment.",
      link: "https://ben-internship-murex.vercel.app/"
    },
    {
      client: "Summarist",
      year: "2025",
      img: summaristProject,
      title: "Great summaries for busy people, individuals who barely have time to read,and even people who don’t like to read.",
      detail: "This site was developed as part of my internship preparation and showcases both my front-end skills and my ability to deliver production-ready websites using modern tools. It serves as a professional landing page to introduce myself to recruiters and potential clients.",
      link: "https://ben-internship-v2.vercel.app/"
    },
    {
      client: "Netflix Clone",
      year: "2024",
      img: netflix,
      title: "Watch your favorite movies",
      detail: "I created a Netflix clone using React and Firebase to practice building a dynamic and responsive web application. The app fetches data from the TMDb API to display movies and TV shows by category, supports user authentication, and is fully responsive. Through this project, I strengthened my skills in API intergation, React hooks, and UI design.",
      link: "https://netflix-clone-murex-gamma.vercel.app/login"
    },
    {
      client: "Movie API",
      year: "2024",
      img: movieAPI,
      title: "Search For Your Favorite movies",
      detail: "Created a website that displays any movie that the user searches for and includes a sorting option that goes from newest to oldest or vice versa.",
      link: "https://movie-api-taupe-five.vercel.app/"
    },
    {
      client: "Library React Project",
      year: "2024",
      img: libraryReactProject,
      title: "Browse through my online book store",
      detail: "Designed and deployed an e-commerce library site that improved checkout speed by 25%, integrated lazy loading to enhance image loading times by 40%, and optimized the UI for mobile responsiveness.",
      link: "https://library-react-mu-seven.vercel.app/"
    },
    {
      client: "Youtube Clone",
      year: "2025",
      img: youtubeClone,
      title: "See whats new to watch",
      detail: "Developed a YouTube clone using React and Material UI, supporting 500+ video searches daily, improving page load speed by 30%, and implementing responsive layouts for all screen sizes.",
      link: "https://youtube-clone-amber-sigma.vercel.app/"
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
