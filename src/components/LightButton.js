// Imports
import { useContext } from "react";
import axios from "axios";

// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

// Context
import ApiContext from "../context/ApiContext";
import EndPointContext from "../context/EndPointContext";

const LightButton = (props) => {
  // Use context
  const { endPointValue, setEndPointValue } = useContext(EndPointContext);

  //Chang end point
  const ChangeEndPoint = () => {
    setEndPointValue(props.id)
  }

  return (
    <button
      onClick={ChangeEndPoint}
      className={
        props.active
        ? "Light-button p-3 flex gap-x-5 items-center rounded-xl bg-buttonBackground-active cursor-pointer z-50"
        : "Scene-button p-3 flex gap-x-5 items-center rounded-xl bg-buttonBackground-inactive cursor-pointer z-50"
      }
    >
      <Icon src={props.src} alt={props.alt} />
      <ButtonText text={props.text} active={props.active} />
    </button>
  );
};

export default LightButton;
