import Section from './section';
import Projects from './projects';
import Footer  from './footer';
import AboutMe from './section2';
import MyServices from './service';
import Testimonials from './testimonials';
import Navbar from './navbar';


function App() {

  return (
    <>  
    <Navbar />
    <Section />
    <AboutMe />
    <MyServices />
    <Projects />
    <Testimonials />
    <Footer />    
    </>
  );
}

export default App;
