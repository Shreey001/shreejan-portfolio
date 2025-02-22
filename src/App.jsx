import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}