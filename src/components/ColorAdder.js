// Imports
import { motion } from "framer-motion";

const ColorAdder = () => {
  return (
    <motion.button
      className="Color-button h-7 w-7 flex justify-center items-center rounded-full bg-colorIcon-white"
      initial={{ marginLeft: "-6px" }}
      animate={{ marginLeft: "16px" }}
      transition={{ delay: 1, duration: 1 }}
    >
      <p className="Color-button text-base font-bold">+</p>
    </motion.button>
  );
};

export default ColorAdder;
