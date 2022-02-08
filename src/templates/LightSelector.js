// Imports
import { motion } from "framer-motion"

// Assets
import LittleLightbulbBlue from "../assets/little_lightbulb_blue.png";
import LittleDeskWhite from "../assets/little_desk_white.png";
import LittleBedBlue from "../assets/little_bed_blue.png";

// Components
import LightButton from "../components/LightButton";

const LightSelector = () => {
    return (
        <div className="Light-selector h-11">
            <motion.ul className="Light-selector__list flex gap-4 absolute"
            initial={{x: 360, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 1, duration: 1}}>
                <LightButton src={LittleLightbulbBlue} alt="little lightbulb blue" text="Main Light" active={false} />
                <LightButton src={LittleDeskWhite} alt="little lightbulb blue" text="Main Light" active={true} />
                <LightButton src={LittleBedBlue} alt="little lightbulb blue" text="Main Light" active={false} />
            </motion.ul>
        </div>
    );
}
 
export default LightSelector;