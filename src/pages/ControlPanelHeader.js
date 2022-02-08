// Imports
import { motion } from "framer-motion"

// Components
import PageHeading from "../components/PageHeading";
import ProfileIcon from "../components/ProfileIcon";

// Assets
import Dog from "../assets/dog.jpg"

const ControlPanelHeader = () => {
    return (
        <motion.div className="Control-panel"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        exit={{opacity: 0, transition: {duration: 1}}}>
            <article className="Control-panel__article mt-16 flex justify-between">
                <PageHeading text="Control Panel" />
                <ProfileIcon src={Dog} active={true} />
            </article>
        </motion.div>
    );
}
 
export default ControlPanelHeader;