// Imports
import { motion } from "framer-motion";

import ContainerHeading from "../components/ContainerHeading";
import SceneButton from "../components/SceneButton";

const SceneSelector = () => {
  return (
    <div className="Scene-selector w-full flex flex-col gap-y-6">
      <ContainerHeading text="Scenes" />
      <ul className="Scene-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
        <SceneButton
          color="linear-gradient(90deg, #FF9B9B, #FFBC91)"
          text="Birthday"
        />
        <motion.div
          className="Animation-container"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SceneButton
            color="linear-gradient(90deg, #A693EB, #DA93EB)"
            text="Part"
          />
        </motion.div>
        <SceneButton
          color="linear-gradient(90deg, #93CAEB, #93DDEB)"
          text="Relax"
        />
        <motion.div
          className="Animation-container"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SceneButton
            color="linear-gradient(90deg, #89DD94, #BFEC92)"
            text="Fun"
          />
        </motion.div>
      </ul>
    </div>
  );
};

export default SceneSelector;
