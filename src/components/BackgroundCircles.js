// Assets
import Circles from "../assets/circles.png";

const BackgroundCircles = () => {
  return (
    <div className="Background-circles -top-24 -left-20 z-0">
      <img
        className="Background-circles__img w-full origin-bottom"
        src={Circles}
        alt="circles"
      />
    </div>
  );
};

export default BackgroundCircles;
