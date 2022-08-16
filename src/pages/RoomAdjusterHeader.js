// Imports
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Templates
import LightSelector from "../templates/LightSelector";

// Components
import BackButton from "../components/BackButton";
import PageHeading from "../components/PageHeading";
import LightCountBig from "../components/LightCountBig";
import Lamp from "../components/Lamp";

const RoomAdjusterHeader = (props) => {
  const location = useLocation();

  return (
    <div className="RoomAdjuster">
      {props.rooms.map((room) => {
        if (`/${room.url}` === location.pathname) {
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
                    <PageHeading text={room.name} />
                  </p>
                  <LightCountBig text={room.lights} />
                </article>
                <Lamp color="#ffd139" shine="#ffc72f" />
              </section>
              <LightSelector />
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default RoomAdjusterHeader;
