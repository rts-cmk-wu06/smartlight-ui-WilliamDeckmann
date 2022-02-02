// Templates
import Header from "../templates/Header";
import Main from "../templates/Main";

const RoomAdjuster = (props) => {
    return (
        <div className="RoomAdjuster">
            {props.name}
            <Header>
                Header
            </Header>
            <Main>
                Main
            </Main>
        </div>
    );
}
 
export default RoomAdjuster;