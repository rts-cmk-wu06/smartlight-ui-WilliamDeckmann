// Imports
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Assets
import BackArrow from "../assets/back_arrow.png"

const BackButton = () => {
    return (
        <button className="Back-button">
            <Link to="/">
                <Icon src={BackArrow} alt="back arrow" />
            </Link>
        </button>
    );
}
 
export default BackButton;