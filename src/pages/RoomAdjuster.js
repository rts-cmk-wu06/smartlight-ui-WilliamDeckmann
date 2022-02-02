// Templates
import { filterProps } from "framer-motion";
import Header from "../templates/Header";

const RoomAdjuster = (props) => {
    return (
        <div className="RoomAdjuster">
            {props.name}
            <Header>
                Header
            </Header>
        </div>
    );
}
 
export default RoomAdjuster;