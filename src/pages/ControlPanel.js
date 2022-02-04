// Templates
import Header from "../templates/Header";
import Main from "../templates/Main";
import RoomSelector from "../templates/RoomSelector";

// Page Heading
import PageHeading from "../components/PageHeading";

const ControlPanel = () => {
    return (
        <div className="Control-panel">
            <Header>
                <article className="Control-panel__article mt-16 flex justify-between">
                    <PageHeading text="Control Panel" />
                </article>
            </Header>
            <Main>
                <RoomSelector />
            </Main>
        </div>
    );
}
 
export default ControlPanel;