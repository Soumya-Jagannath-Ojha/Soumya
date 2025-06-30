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
            A little bit about my education, I have recently graduated with a B.Tech in Computer Science from DRIEMS University, Cuttack, Odisha, with a cumulative grade point average of 9.15.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
