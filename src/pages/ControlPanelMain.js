// Imports
import { motion } from "framer-motion"

// Templates
import RoomSelector from "../templates/RoomSelector";

const ControlPanelMain = () => {
    return (
        <motion.div className="Control-panel"
        initial={{opacity: 0}}
        animate={{opacity: 1}}

        transition={{duration: 1}}
        exit={{opacity: 0, transition: {duration: 1}}}>
            <RoomSelector />
        </motion.div>
    );
}
 
export default ControlPanelMain;