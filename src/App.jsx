import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
