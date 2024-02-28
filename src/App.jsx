import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import About from "./components/About";
import Work from "./components/Work";
import FadeInOnScroll from "./components/FadeInOnScroll";
import useScroll from './components/useScroll';

function App() {
  const scrollPosition = useScroll();
  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <FadeInOnScroll scrollPosition={scrollPosition}>
          <Work />
        </FadeInOnScroll>
        <FadeInOnScroll scrollPosition={scrollPosition}>
          <Projects />
        </FadeInOnScroll>
        <FadeInOnScroll scrollPosition={scrollPosition}>
          <About />
        </FadeInOnScroll>
        <FadeInOnScroll scrollPosition={scrollPosition}>
          <Contact />
        </FadeInOnScroll>
      </div>
    </>
  );
}

export default App;
