// Styles
import ReactInputSlider from "../styles/ReactInputSlider.css"

// Templates
import IntensityAdjuster from "../templates/IntensityAdjuster";
import ColorSelector from "../templates/ColorSelector";
import SceneSelector from "../templates/SceneSelector";

// Components
import PowerButton from "../components/PowerButton";

const RoomAdjusterMain = () => {
    return (
        <div className="RoomAdjuster flex flex-col gap-y-8">
            <IntensityAdjuster />
            <ColorSelector />
            <SceneSelector />
            <PowerButton />
        </div>
    );
}
 
export default RoomAdjusterMain;