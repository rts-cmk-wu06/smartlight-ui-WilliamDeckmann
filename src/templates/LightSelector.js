// Imports
import { useContext, useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Assets
import LittleLightbulbBlue from "../assets/little_lightbulb_blue.png";
import LittleDeskWhite from "../assets/little_desk_white.png";
import LittleBedBlue from "../assets/little_bed_blue.png";

// Components
import LightButton from "../components/LightButton";

// Context
import ApiContext from "../context/ApiContext";

const LightSelector = () => {
  // Use context
  const url = useContext(ApiContext);

  // Location
  const location = useLocation();
  const id = location.pathname.replace("/room-", "")

  // Room array & light array
  const [ groupArray, setGroupArray ] = useState();
  const [ lightArray, setLightArray ] = useState();

  // Get API data
  useEffect(() => {
    axios
    .get(url)
    .then(result => {
      const groupsValues = Object.values(result.data.groups)
      const lightsValues = Object.values(result.data.lights)
      setGroupArray(groupsValues)
      setLightArray(lightsValues)
    })
  }, []);
  useEffect(() => {
  }, [groupArray, lightArray]);
  
  return (
    <div className="Light-selector h-11">
      {groupArray ? 
        groupArray.map((room, i) => {
          if (i == id) {
            const lightArray = Object.values(room.lights)
              return (
              <motion.ul
                className="Light-selector__list flex gap-4 overflow-hidden"
                initial={{ x: 360, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                drag="x"
                dragConstraints={{
                  left: -87,
                  right: 0,
                }}
                dragElastic={0.25}
              >
                {lightArray.map(light => {
                  return(
                    <LightButton
                    src={LittleLightbulbBlue}
                    alt="little lightbulb blue"
                    text={"Light " + light}
                    active={false}
                    id={light}
                    />
                  )
                })}
                {/* <LightButton
                  src={LittleLightbulbBlue}
                  alt="little lightbulb blue"
                  text="Main Light"
                  active={false}
                />
                <LightButton
                  src={LittleDeskWhite}
                  alt="little lightbulb blue"
                  text="Main Light"
                  active={true}
                />
                <LightButton
                  src={LittleBedBlue}
                  alt="little lightbulb blue"
                  text="Main Light"
                  active={false}
                /> */}
              </motion.ul> 
            )
          }
        })
        :
        <div>Loading all rooms...</div>
      }
    </div>
  );
};

export default LightSelector;
