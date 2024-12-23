import japanSignUpPic from "../images/japanSignUp.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={japanSignUpPic}
        title="Contacts"
        btnClass="hide"
        //needed as per type script requirement
        text=""
        url=""
        button=""
        buttonText=""
      />
    </>
  );
};

export default SignUp;
