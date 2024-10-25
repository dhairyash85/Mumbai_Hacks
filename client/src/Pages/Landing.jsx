import { Benefits } from "../Components/Benefits";
import Faq from "../Components/Faq";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import { Testimonials } from "../Components/Testimonials";

function Landing() {
  return (
    <div className="px-[100px] bg-black">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
export default Landing;
