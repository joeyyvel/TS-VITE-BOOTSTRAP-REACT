import japanSignUpPic from "../images/japanSignUp.jpg";
import Hero from "../components/Hero";

const SignUp = () => {
  return (
    <>
      <Hero
        cName="hero-aboutPage"
        heroImage={japanSignUpPic}
        title="Contacts"
        btnClass="hide"
      />
    </>
  );
};

export default SignUp;
