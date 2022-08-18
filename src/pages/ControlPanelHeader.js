// Imports
import { motion } from "framer-motion";

// Components
import PageHeading from "../components/PageHeading";
import ProfileIcon from "../components/ProfileIcon";

// Assets
import Dog from "../assets/dog.jpg";

const ControlPanelHeader = (props) => {
  return (
    <motion.div
      className="Control-panel"
      variants={props.variants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <article className="Control-panel__article mt-16 flex justify-between">
        <PageHeading text="Control Panel" />
        <ProfileIcon src={Dog} active={true} />
      </article>
    </motion.div>
  );
};

export default ControlPanelHeader;
