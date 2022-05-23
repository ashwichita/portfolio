import "./ContactSection.css";
import MailIcon from "./images/email_icon.png";
import PhoneIcon from "./images/phone_icon.png";
import GithubIcon from "./images/github_icon.png";
import FacebookIcon from "./images/facebook_icon.png";
import YoutubeIcon from "./images/youtube_icon.png";
import { useSpring, animated } from "@react-spring/web";

const ContactSection = (props) => {
  const contactStyles1 = useSpring({
    x: props.contactInView ? "0vw" : "-100vw",
    delay: 100,
  });
  const contactStyles2 = useSpring({
    x: props.contactInView ? "0vw" : "-100vw",
    delay: 200,
  });
  const contactStyles3 = useSpring({
    x: props.contactInView ? "0vw" : "-100vw",
    delay: 300,
  });
  const contactStyles4 = useSpring({
    x: props.contactInView ? "0vw" : "-100vw",
    delay: 400,
  });
  const contactStyles5 = useSpring({
    x: props.contactInView ? "0vw" : "-100vw",
    delay: 500,
  });

  

  return (
    <div className="contact-section" ref={props.contactRef}>
      <div className="contact-container">
        <animated.div className="contact-tab" style={contactStyles1}>
          <img alt='icon' src={MailIcon}></img>
          <a href="mailto:mitarzoric@yahoo.com">mitarzoric@yahoo.com</a>
        </animated.div>
        <animated.div className="contact-tab" style={contactStyles2}>
          <img alt='icon' src={PhoneIcon}></img>
          <a href="tel:0638216373">063/821-63-73</a>
        </animated.div>
        <animated.div className="contact-tab" style={contactStyles3}>
          <img alt='icon' src={GithubIcon}></img>
          <a href='https://github.com/ashwichita' target='_blank' rel="noreferrer">github.com/ashwichita</a>
        </animated.div>
        <animated.div className="contact-tab" style={contactStyles4}>
          <img alt='icon' src={FacebookIcon}></img>
          <a href='https://www.facebook.com/mitar.zoric/' target='_blank' rel="noreferrer">facebook.com/mitar.zoric</a>
        </animated.div>
        <animated.div className="contact-tab" style={contactStyles5}>
          <img alt='icon' src={YoutubeIcon}></img>
          <a href='https://www.youtube.com/user/AsharakWizeGrynch' target='_blank' rel="noreferrer">/AsharakWizeGrynch</a>
        </animated.div>
      </div>
    </div>
  );
};

export default ContactSection;
