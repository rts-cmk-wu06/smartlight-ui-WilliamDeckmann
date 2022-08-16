// Imports
import { motion } from "framer-motion";

// Templates
import RoomSelector from "../templates/RoomSelector";

const ControlPanelMain = (props) => {
  return (
    <motion.div
      className="Control-panel"
      variants={props.variants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <RoomSelector data={props.rooms} />
    </motion.div>
  );
};

export default ControlPanelMain;
