// Imports
import { useContext, useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// Templates
import LightSelector from "../templates/LightSelector";

// Components
import BackButton from "../components/BackButton";
import PageHeading from "../components/PageHeading";
import LightCountBig from "../components/LightCountBig";
import Lamp from "../components/Lamp";

// Context
import ApiContext from "../context/ApiContext";
import EndPointContext from "../context/EndPointContext";

const RoomAdjusterHeader = (props) => {
  // Use context
  const url = useContext(ApiContext);
  const { endPointValue } = useContext(EndPointContext);

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

  // Location
  const location = useLocation();
  const id = location.pathname.replace("/room-", "")

  return (
    <div className="RoomAdjuster">
      {groupArray ? 
        groupArray.map((room, i) => {
          if (i == id) {
            return (
              <motion.div
                className="RoomAdjuster__container"
                variants={props.variants}
                initial="start"
                animate="end"
                exit="exit"
              >
                <section className="RoomAdjuster__section flex justify-between">
                  <article className="RoomAdjuster__article mt-16 flex flex-col gap-y-2">
                    <p className="RoomAdjuster__paragraph flex items-center gap-x-1">
                      <BackButton />
                      <PageHeading text={`${room.class}: ${endPointValue}`} />
                    </p>
                    <LightCountBig text={room.lights.length} />
                  </article>
                  <Lamp color="#ffd139" shine="#ffc72f" />
                </section>
                <LightSelector />
              </motion.div>
            );
          }
        })
      :
        <div>Loading all rooms...</div>
      }
    </div>
  );
};

export default RoomAdjusterHeader;
