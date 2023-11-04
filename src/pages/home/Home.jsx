import Hero from "./Hero";
import AboutMe from "./AboutMe";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import ContactMe from "./ContactMe";

function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <Testimonials />
      <ContactMe />
    </div>
  );
}

export default Home;
