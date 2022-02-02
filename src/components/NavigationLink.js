// Imports
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

const NavigationLink = (props) => {
    return (
        <div className="Navigation__item" style={{
            "width": "30px",
            "height": "30px",
            }}>
            <Link to={props.url} style={{
                "width": "100%",
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                }}>
                <Icon src={props.src} alt={props.name} />
            </Link>
        </div>
    );
}
 
export default NavigationLink;