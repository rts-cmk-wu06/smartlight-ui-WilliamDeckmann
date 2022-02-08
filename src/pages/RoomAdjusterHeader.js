// Imports
import { motion } from "framer-motion"

// Templates
import LightSelector from "../templates/LightSelector";

// Components
import BackButton from "../components/BackButton";
import PageHeading from "../components/PageHeading";
import LightCountBig from "../components/LightCountBig";
import Lamp from "../components/Lamp";


const RoomAdjusterHeader = (props) => {
    return (
        <motion.div className="RoomAdjuster"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        exit={{opacity: 0, transition: {duration: 1}}}>
            <section className="Control-panel__section flex justify-between">
                <article className="Control-panel__article mt-16 flex flex-col gap-y-2">
                    <span className="Control-panel__span flex items-center gap-x-1">
                        <BackButton />
                        <PageHeading text={props.name} />
                    </span>
                    <LightCountBig text={props.lights} />
                </article>
                <Lamp color="#ffd139" shine="#ffc72f" />
            </section>
            <LightSelector />
        </motion.div>
    );
}
 
export default RoomAdjusterHeader;