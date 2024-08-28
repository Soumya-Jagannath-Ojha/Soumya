import { useRef } from "react";
import data from "../../data/index.json";
import { motion, useInView } from "framer-motion";


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

export default function MySkills() {

  const ref = useRef();
  const isInview = useInView(ref,{margin: "-60px"})
  return (
    <motion.section className="skills--section" id="mySkills" variants={textVariants} 
    initial="initial" 
    // whileInView="animate"
    ref={ref}
    animate={isInview && "animate"}
    >
      <motion.div className="portfolio--container" variants={textVariants}>
        <motion.p className="section--title" variants={textVariants}>My Skills</motion.p>
        <motion.h2 className="skills--section--heading" variants={textVariants}>My Expertise</motion.h2>
      </motion.div>
      
      <motion.div className="skills--section--container" variants={textVariants}>
        {data?.skills?.map((item, index) => (
          <motion.div key={index} className="skills--section--card" variants={textVariants}>
            <motion.div className="skills--section--img" variants={textVariants}>
              <motion.img src={item.src} alt="Skill Logo" variants={textVariants} />
            </motion.div>
            <motion.div className="skills--section--card--content" variants={textVariants}>
              <motion.p className="skills--section--title" variants={textVariants}>{item.title}</motion.p>
              {/* <p className="skills--section--description">{item.description}</p> */}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
