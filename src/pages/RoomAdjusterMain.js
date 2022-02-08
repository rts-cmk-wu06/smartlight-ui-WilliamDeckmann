// Imports
import { motion } from "framer-motion"

// Templates
import IntensityAdjuster from "../templates/IntensityAdjuster";
import ColorSelector from "../templates/ColorSelector";
import SceneSelector from "../templates/SceneSelector";

// Components
import PowerButton from "../components/PowerButton";

const RoomAdjusterMain = () => {
    return (
        <motion.div className="RoomAdjuster flex flex-col gap-y-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        exit={{opacity: 0, transition: {duration: 1}}}>
            <IntensityAdjuster />
            <ColorSelector />
            <SceneSelector />
            <PowerButton />
        </motion.div>
    );
}
 
export default RoomAdjusterMain;