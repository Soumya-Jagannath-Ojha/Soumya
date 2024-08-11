export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/Me.jpeg" alt="About Me"  className="me"/>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate Full Stack Developer who loves to explore new
            technology and build scalable applications.
          </p>
          <p className="hero--section-description">
            A little bit about my education, I am a 4th year student of DRIEMS
            University cuttack , Odisha, pursuing my B.Tech in Computer Science
            and my current cumulative grade point average is 9.05(till 5th
            semester)
          </p>
        </div>
      </div>
    </section>
  );
}
