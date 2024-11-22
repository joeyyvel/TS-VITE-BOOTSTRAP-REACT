import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutJapanPic from "../images/japanAbout.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={AboutJapanPic}
        title="About"
        btnClass="hide"
      />
    </div>
  );
};

export default About;
