import Hero from "../components/Hero";
import AboutJapanPic from "../images/japanAbout.jpg";

const About = () => {
  return (
    <div>
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
