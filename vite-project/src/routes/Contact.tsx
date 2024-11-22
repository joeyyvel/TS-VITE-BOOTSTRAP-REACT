import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import japanContactPic from "../images/japanContact.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={japanContactPic}
        title="Contacts"
        btnClass="hide"
        //added as per typescript requirement
        text=""
        url=""
        button=""
        buttonText=""
      />
    </div>
  );
};

export default Contact;
