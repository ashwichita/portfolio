import "./WelcomeSection.css";
import { animated, useSpring } from "@react-spring/web";

const WelcomeSection = (props) => {
  const sectionStyles = useSpring({
    height: props.welcomeInView ? "100vh" : "70vh",
    backgroundSize: props.welcomeInView ? '150vw' : '100vw',
    config: {friction: 100, tension: 400}
  });



  const titleStyles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 200,
  });

  const subtitleStyles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 800,
  });



  return (
    <animated.div
      className="WelcomeSection"
      ref={props.welcomeRef}
      style={sectionStyles}
    >
      <animated.h1 style={titleStyles}>Hey there!</animated.h1>
      <animated.h2 style={subtitleStyles}>
        looking for a <span>web developer</span>?
      </animated.h2>
    </animated.div>
  );
};

export default WelcomeSection;
