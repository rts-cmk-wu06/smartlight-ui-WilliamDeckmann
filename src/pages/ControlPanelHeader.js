// Components
import PageHeading from "../components/PageHeading";
import ProfileIcon from "../components/ProfileIcon";

// Assets
import Dog from "../assets/dog.jpg"

const ControlPanelHeader = () => {
    return (
        <div className="Control-panel">
            <article className="Control-panel__article mt-16 flex justify-between">
                <PageHeading text="Control Panel" />
                <ProfileIcon src={Dog} active={true} />
            </article>
        </div>
    );
}
 
export default ControlPanelHeader;