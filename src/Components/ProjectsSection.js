import "./ProjectsSection.css";
import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/landing-page-image.jpg";
import image2 from "./images/notes-app-image.jpg";
import image3 from "./images/firestone-react-image.jpg";
import image4 from "./images/portfolio-image.jpg";

const ProjectsSection = (props) => {
  const Container1Styles = useSpring({
    x: props.projectsInView ? "0vw" : "100vw",
    opacity: props.projectsInView ? 1 : 0,
    delay: 200,
  });

  const Container2Styles = useSpring({
    x: props.projectsInView ? "0vw" : "100vw",
    opacity: props.projectsInView ? 1 : 0,
    delay: 350,
  });

  const TitleStyles = useSpring({
    opacity: props.projectsInView ? 1 : 0,
    delay: 250,
  });

  const carousel1 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carousel2 = {
    infinite: true,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: -1,
    arrows: false,
    autoplay: true,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
 
  

  return (
    <div className="projects-section" ref={props.projectsRef}>
      <animated.h1 style={TitleStyles}>projects</animated.h1>
     
      <animated.div style={Container1Styles} className="projects-container">
        <Slider {...carousel1}>
          <a href='https://github.com/ashwichita/landing-page' target='_blank' rel="noreferrer"><img alt="1" src={image1}></img></a>
          <a href='https://github.com/ashwichita/notes-app' target='_blank' rel="noreferrer"><img alt="2" src={image2}></img></a>
          <a href='https://github.com/ashwichita/firebase-react' target='_blank' rel="noreferrer"><img alt="3" src={image3}></img></a>
          <a href='https://github.com/ashwichita/portfolio' target='_blank' rel="noreferrer"><img alt="4" src={image4}></img></a>
        </Slider>
      </animated.div>
      <animated.h1 style={TitleStyles}>...older projects</animated.h1>
      <animated.div style={Container2Styles} className="projects-container">
        <Slider {...carousel2}>
          <img alt="1" src={image2}></img>
          <img alt="1" src={image2}></img>
          <img alt="1" src={image2}></img>
          <img alt="1" src={image2}></img>
        </Slider>
      </animated.div>
    </div>
  );
};

export default ProjectsSection;
