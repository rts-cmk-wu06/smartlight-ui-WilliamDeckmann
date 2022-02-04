// Imports
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Assets
import BackArrow from "../assets/back_arrow.png"

const BackButton = () => {
    return (
        <Link to="/">
            <Icon src={BackArrow} alt="back arrow" />
        </Link>
    );
}
 
export default BackButton;