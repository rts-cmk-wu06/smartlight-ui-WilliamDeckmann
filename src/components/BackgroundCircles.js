// Assets
import Circles from "../assets/circles.png"

const BackgroundCircles = (props) => {
    return (
        <div className="Background-circles absolute -top-24 -left-20 z-0">
            <img className="Background-circles__img w-full" src={Circles} alt="circles" />
        </div>
    );
}
 
export default BackgroundCircles;