// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

const LightButton = (props) => {
  return (
    <button
      className={
        props.active
          ? "Light-button p-3 flex gap-x-5 items-center rounded-xl bg-buttonBackground-active"
          : "Scene-button p-3 flex gap-x-5 items-center rounded-xl bg-buttonBackground-inactive"
      }
    >
      <Icon src={props.src} alt={props.alt} />
      <ButtonText text={props.text} active={props.active} />
    </button>
  );
};

export default LightButton;
