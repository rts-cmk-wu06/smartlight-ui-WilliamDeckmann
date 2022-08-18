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
          gradient="linear-gradient(90deg, #FF9B9B, #FFBC91)"
          color="#FF9B9B"
          text="Birthday"
        />
        <motion.div
          className="Animation-container"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SceneButton
            gradient="linear-gradient(90deg, #A693EB, #DA93EB)"
            color="#A693EB"
            text="Party"
          />
        </motion.div>
        <SceneButton
          gradient="linear-gradient(90deg, #93CAEB, #93DDEB)"
          color="#93CAEB"
          text="Relax"
        />
        <motion.div
          className="Animation-container"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SceneButton
            gradient="linear-gradient(90deg, #89DD94, #BFEC92)"
            color="#89DD94"
            text="Fun"
          />
        </motion.div>
      </ul>
    </div>
  );
};

export default SceneSelector;
