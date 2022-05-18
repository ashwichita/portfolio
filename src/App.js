import './App.css';
import { useInView } from 'react-intersection-observer';
import WelcomeSection from './Components/WelcomeSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';


function App() {
  
  const [welcomeRef, welcomeInView] = useInView({threshold : .7, initialInView : true, rootMargin: '5%'});
  const [aboutRef, aboutInView] = useInView({threshold : .4});
  const [projectsRef, projectsInView] = useInView({threshold : .2});
  const [contactRef, contactInView] = useInView({threshold : .3});


  
 
  return (
    <div className="App">
        <WelcomeSection welcomeRef={welcomeRef} welcomeInView={welcomeInView}/>
        <AboutSection aboutRef={aboutRef} aboutInView={aboutInView} />
        <ProjectsSection projectsRef={projectsRef} projectsInView={projectsInView}/>
        <ContactSection contactRef={contactRef} contactInView={contactInView}/>
    </div>
  );
}

export default App;
