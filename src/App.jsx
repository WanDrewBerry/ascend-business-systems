
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
