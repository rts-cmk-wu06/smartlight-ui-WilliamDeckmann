// Templates
import Header from "../templates/Header";
import Main from "../templates/Main";

// Components
import BackButton from "../components/BackButton";
import PageHeading from "../components/PageHeading";
import LightCountBig from "../components/LightCountBig";
import Lamp from "../components/Lamp";
import ColorSelector from "../templates/ColorSelector";

const RoomAdjuster = (props) => {
    return (
        <div className="RoomAdjuster">
            <Header>
                <section className="Control-panel__section flex justify-between">
                    <article className="Control-panel__article mt-16 flex flex-col gap-y-2">
                        <span className="Control-panel__span flex items-center gap-x-1">
                            <BackButton />
                            <PageHeading text={props.name} />
                        </span>
                        <LightCountBig text={props.lights} />
                    </article>
                    <Lamp color="#ffd139" shine="#ffc72f" />
                </section>
            </Header>
            <Main>
                <ColorSelector />
            </Main>
        </div>
    );
}
 
export default RoomAdjuster;