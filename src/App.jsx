import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

import AboutOwner from "./components/AboutOwner";
// import SpecialtyTapes from "./components/SpecialtyTapes";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <TrustedBy />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <Features />
      </div>
      <HowItWorks />
      <AboutOwner />

      <CallToAction />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
