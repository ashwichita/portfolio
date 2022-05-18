import "./AboutSection.css";
import { animated, useSpring } from "@react-spring/web";
import profile from "./images/profile.jpg";
import htmlIcon from "./images/html_icon.png";
import cssIcon from "./images/css_icon.png";
import jsIcon from "./images/js_icon.png";
import reactIcon from "./images/react_icon.png";

const AboutSection = (props) => {
  const titleStyles = useSpring({
    opacity: props.aboutInView ? 1 : 0,
    delay: 50,
  });

  const skillsStyles = useSpring({
    x: props.aboutInView ? "0vw" : "-100vw",
    delay: 200,
  });

  const skillsImgStyles = useSpring({
    scale: props.aboutInView ? 1 : 0,
    delay: 500,
  });

  const imgStyles = useSpring({
    scale: props.aboutInView ? 1 : 0,
    delay: 500,
  });

  const textStyles = useSpring({
    opacity: props.aboutInView ? 1 : 0,
    delay: 400,
  });

  const SkillListStyles = useSpring({
    opacity: props.aboutInView ? 1 : 0,
    delay: 600

  })

  return (
    <div ref={props.aboutRef} className="AboutSection">
      <animated.h1 style={titleStyles}>i got you fam</animated.h1>
      <animated.div style={skillsStyles} className="SkillsContainer">
        <animated.img src={htmlIcon} style={skillsImgStyles}></animated.img>
        <animated.img src={cssIcon} style={skillsImgStyles}></animated.img>
        <animated.img src={jsIcon} style={skillsImgStyles}></animated.img>
        <animated.img src={reactIcon} style={skillsImgStyles}></animated.img>
      </animated.div>
      <animated.ul className="SkillList" style={SkillListStyles}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>SASS</li>
        <li>Photoshop</li>
        <li>Adobe XD</li>
      </animated.ul>
      <div className="BioContainer">
        <animated.img
          alt="profile"
          src={profile}
          style={imgStyles}
        ></animated.img>

        <animated.p style={textStyles}>
          I'm a 27 year old amateur web developer, currently living in Niš,
          Southern Serbia. I've been learning HTML CSS and JS for a few years,
          but lately I started learning React as well. The curiosity about web
          development started already at highschool, after designing a few
          blogging sites and forums. The software I use mostly comes down to
          Visual Studio Code, Adobe Photoshop and Adobe XD. I'm a lifelong
          musician, and I love creative working environment.
        </animated.p>
      </div>
      
    </div>
  );
};

export default AboutSection;
