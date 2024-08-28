import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function HeroSection() {
  let [text] = useTypewriter({
    words: ["Soumya Jagannath Ojha","Frontend Developer", "Backend Developer", "FullStack Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="heroSection" className="hero--section">
      <motion.div className="hero--section--content--box" variants={textVariants} initial="initial" animate="animate">
        <motion.div className="hero--section--content" variants={textVariants}>
          <motion.p className="section--title" variants={textVariants}>Hello, I'm</motion.p>

          <motion.span className="hero--section--title" variants={textVariants}>
            <motion.span className="hero--section--title--color" variants={textVariants}>
              {text}
              <Cursor />
            </motion.span>{" "}
            <motion.br variants={textVariants} />
            {/* Developer */}
          </motion.span>

          {/* <p className="hero--section--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            officiis! 
            laboriosam . 
            <br /> 
            Lorem ipsum dolor sit amet  adipisicing elit. In aut asperiores quibusdam?
          </p> */}
        </motion.div>
        <motion.div className="down" variants={textVariants}>
          <motion.a variants={textVariants} href="https://github.com/Soumya-Jagannath-Ojha" target="_main">
            <motion.button variants={textVariants} className="btn btn-primary">GitHub</motion.button>
          </motion.a>
          {/* <button className="btn btn-primary">Resume</button> */}
        </motion.div>
      </motion.div>

      <div className="hero--section--img">
        {/* <img src="./img/hero_img.png" alt="logo" /> */}
        <img src="./img/Soumya.jpeg" alt="My Pic" className="MyImg" />
      </div>
    </section>
  );
}
