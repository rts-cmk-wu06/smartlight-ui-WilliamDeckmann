//Assets
//import LightBulbOn from "../assets/lightbulb_on";

// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

const SceneButton = (props) => {
    console.log(props);
    return (
        <button className="Scene-button py-4 pl-6 pr-7 flex gap-y-5 items-center rounded-xl" style={{backgroundColor: props.color}} >
            <Icon src={{}} alt="light bulb" />
            <ButtonText text={props.text} active={true} />
        </button>
    );
}
 
export default SceneButton;