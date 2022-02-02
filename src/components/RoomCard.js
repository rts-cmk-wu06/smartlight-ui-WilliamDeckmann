// Imports
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

const RoomCard = (props) => {
    return (
        <Link to={props.url}>
            <div className="Room-card p-5 pb-4 rounded-3xl bg-white">
                <Icon src={props.src} alt={props.name} />
            </div>
        </Link>
    );
}
 
export default RoomCard;