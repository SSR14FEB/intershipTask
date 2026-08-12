import Features from "../sections/Features/Features";
import Electrical_Solutions from "../sections/Electrical-Solutions/Electrical_Solutions";
import Hero from "../sections/Hero/Hero";
import Help from "../sections/how-may-i-help-you/Help";
import About from "../sections/About/About";
import Testimonials from "../sections/Testimonials/Testimonials";
import Contact from "../sections/Contact/Contact";
function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-white">
      <Hero />
      <Electrical_Solutions />
      <Help/>
      <Features/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default Home;
