// Templates
import Header from "../templates/Header";
import Main from "../templates/Main";
import RoomSelector from "../templates/RoomSelector";

const ControlPanel = () => {
    return (
        <div className="Control-panel">
            Control panel
            <Header>
                Header
            </Header>
            <Main>
                <RoomSelector />
            </Main>
        </div>
    );
}
 
export default ControlPanel;