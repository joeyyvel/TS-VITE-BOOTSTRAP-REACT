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
      />
    </div>
  );
};

export default Contact;
