// Imports
import { motion } from "framer-motion"

// Templates
import IntensityAdjuster from "../templates/IntensityAdjuster";
import ColorSelector from "../templates/ColorSelector";
import SceneSelector from "../templates/SceneSelector";

// Components
import PowerButton from "../components/PowerButton";

const RoomAdjusterMain = (props) => {
    return (
        <motion.div className="RoomAdjuster flex flex-col gap-y-8"
        variants={props.variants}
        initial="start"
        animate="end"
        exit="exit">
            <IntensityAdjuster />
            <ColorSelector />
            <SceneSelector />
            <PowerButton />
        </motion.div>
    );
}
 
export default RoomAdjusterMain;