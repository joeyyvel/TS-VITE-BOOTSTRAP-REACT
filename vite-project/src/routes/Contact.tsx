import Hero from "../components/Hero";
import japanContactPic from "../images/japanContact.jpg";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
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
