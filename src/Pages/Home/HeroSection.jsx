import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function HeroSection() {
  let [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Soumya Jagannath Ojha</p>

          <span className="hero--section--title">
            <span className="hero--section--title--color">
              {text}
              <Cursor />
            </span>{" "}
            <br />
            {/* Developer */}
          </span>

          {/* <p className="hero--section--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            officiis! 
            laboriosam . 
            <br /> 
            Lorem ipsum dolor sit amet  adipisicing elit. In aut asperiores quibusdam?
          </p> */}
        </div>
        <div className="down">
          <a href="https://github.com/Soumya-Jagannath-Ojha" target="_main">
            <button className="btn btn-primary">GitHub</button>
          </a>
          {/* <button className="btn btn-primary">Resume</button> */}
        </div>
      </div>

      <div className="hero--section--img">
        {/* <img src="./img/hero_img.png" alt="logo" /> */}
        <img src="./img/Soumya.jpeg" alt="My Pic" className="MyImg" />
      </div>
    </section>
  );
}
