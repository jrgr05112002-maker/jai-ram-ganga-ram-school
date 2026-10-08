import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Academics from "./components/Academics";
import Founder from "./components/Founder";
import SocietyMembers from "./components/SocietyMembers";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Founder />
        <SocietyMembers />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;