// Imports
import { motion } from "framer-motion";

// Components
import TextMedium from "./TextMedium";

const LightCountBig = (props) => {
  return (
    <motion.span
      className="Heading-big text-lightCount-big"
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <TextMedium text={`${props.text} Lights`} />
    </motion.span>
  );
};

export default LightCountBig;
