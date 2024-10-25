import { Benefits } from "../Components/Benefits";
import Faq from "../Components/Faq";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import { Testimonials } from "../Components/Testimonials";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
    </>
  );
}
export default Landing;
