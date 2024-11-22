import JapanServicePic from "../images/japanService.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={JapanServicePic}
        title="SERVICES"
        btnClass="hide"
        //added as per typescript requirements
        text=""
        url=""
        button=""
        buttonText=""
      />
    </div>
  );
};

export default Service;
