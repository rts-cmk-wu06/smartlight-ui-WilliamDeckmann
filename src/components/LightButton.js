// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

const LightButton = (props) => {
    console.log(props);
    return (
        <button className={props.active ? "Scene-button p-3 pr-7 flex gap-x-5 items-center rounded-xl bg-buttonBackground-active" : "Scene-button p-3 pr-7 flex gap-x-5 items-center rounded-xl bg-buttonBackground-inactive"}>
            <Icon src={props.src} alt={props.alt} />
            <ButtonText text={props.text} active={props.active} />
        </button>
    );
}
 
export default LightButton;