// Assets
import LittleLightbulbWhite from "../assets/little_lightbulb_white.png";

// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

const SceneButton = (props) => {
    return (
        <button className="Scene-button w-full py-4 pl-6 pr-7 flex gap-x-5 items-center rounded-xl" style={{backgroundImage: props.color}} >
            <Icon src={LittleLightbulbWhite} alt="light bulb" />
            <ButtonText text={props.text} active={true} />
        </button>
    );
}
 
export default SceneButton;