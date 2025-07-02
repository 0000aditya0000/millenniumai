import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import SpecialtyTapes from "./components/SpecialtyTapes";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services/>
      <SpecialtyTapes/>
      <Features />
      <HowItWorks/>
      <CallToAction />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;