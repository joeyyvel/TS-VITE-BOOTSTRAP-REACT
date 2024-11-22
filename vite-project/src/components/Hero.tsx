import "../components/HeroStyles.css";
import PropTypes from "prop-types";

const Hero = (props: {
  cName: string;
  heroImage: string;
  title: string;
  text: string;
  url: string;
  button: string;
  btnClass: string;
  buttonText: string;
}) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="Hero image" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  cName: PropTypes.string,
  heroImage: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Hero;
