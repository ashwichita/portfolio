import "./ProjectsSection.css";
import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./images/website-demo.jpg";
import Modal from "react-modal";
import { useState } from "react";

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
    className: "Slider",
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
    className: "Slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="ProjectsSection" ref={props.projectsRef}>
      <animated.h1 style={TitleStyles}>projects</animated.h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={150}
      >
        <h1>Project name</h1>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum
        </p>
        <div>
          <button>live demo</button>
          <button>code</button>
        </div>
      </Modal>
      <animated.div style={Container1Styles} className="ProjectsContainer">
        <Slider {...carousel1}>
          <img alt="1" src={logo} onClick={openModal}></img>
          <img alt="1" src={logo} onClick={openModal}></img>
          <img alt="1" src={logo} onClick={openModal}></img>
          <img alt="1" src={logo} onClick={openModal}></img>
        </Slider>
      </animated.div>
      <animated.h1 style={TitleStyles}>...older projects</animated.h1>
      <animated.div style={Container2Styles} className="ProjectsContainer">
        <Slider {...carousel2}>
          <img alt="1" src={logo}></img>
          <img alt="1" src={logo}></img>
          <img alt="1" src={logo}></img>
          <img alt="1" src={logo}></img>
        </Slider>
      </animated.div>
    </div>
  );
};

export default ProjectsSection;
