import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.1,
    },
  },
};

export default function AboutMe() {
  return (
    <motion.section
      id="AboutMe"
      className="about--section"
      // variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="about--section--img" variants={variants}>
        <motion.img
          src="./img/Me.jpeg"
          alt="About Me"
          className="me"
          variants={variants}
        />
      </motion.div>
      <motion.div
        className="hero--section--content--box about--section--box"
        variants={variants}
      >
        <motion.div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <motion.h1 className="skills-section--heading" variants={variants}>
            About Me
          </motion.h1>
          <motion.p className="hero--section-description" variants={variants}>
            I am a passionate Full Stack Developer who loves to explore new
            technology and build scalable applications.
          </motion.p>
          <motion.p className="hero--section-description" variants={variants}>
            A little bit about my education, I am a 4th year student at DRIEMS
            University cuttack , Odisha, pursuing my B.Tech in Computer Science
            and my current cumulative grade point average is 9.21(till 5th
            semester)
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
