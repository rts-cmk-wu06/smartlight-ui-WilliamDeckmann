// Imports
import { Link } from "react-router-dom";

// Json
import Data from "../json/navigation.json"

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="Navigation__list flex gap-16">
                {Data.map(item => (
                    <li className="Navigation__item" key={item.id}>
                        <Link to={item.url}>
                            Link
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Navigation;