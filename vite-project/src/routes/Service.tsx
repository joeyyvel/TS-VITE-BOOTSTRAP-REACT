import JapanServicePic from "../images/japanService.jpg";
import Hero from "../components/Hero";
const Service = () => {
  return (
    <div>
      <Hero
        cName="hero-aboutPage"
        heroImage={JapanServicePic}
        title="SERVICES"
        btnClass="hide"
      />
    </div>
  );
};

export default Service;
