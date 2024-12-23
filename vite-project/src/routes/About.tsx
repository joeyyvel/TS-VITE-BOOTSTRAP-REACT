import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
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
        // below is needed by typescript to be included in the project
        text=""
        url=""
        button=""
        buttonText=""
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
