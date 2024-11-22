import "./TripStyles.css";

interface Props {
  image: string;
  heading: string;
  text: string;
}

function TripData(props: Props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
