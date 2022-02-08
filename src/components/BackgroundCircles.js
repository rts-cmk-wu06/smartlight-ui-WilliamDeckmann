// Imports
import { motion } from "framer-motion"

// Assets
import Circles from "../assets/circles.png"

const BackgroundCircles = (props) => {
    return (
        <motion.div className="Background-circles absolute -top-24 -left-20 z-0"
        exit={{rotate: "45deg", transition: {duration: 1}}}>
            <img className="Background-circles__img w-full" src={Circles} alt="circles" />
        </motion.div>
    );
}
 
export default BackgroundCircles;