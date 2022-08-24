// Imports
import { useContext, useState } from "react";
import axios from "axios";

// Assets
import PowerOff from "../assets/power_off.png";

// Components
import Icon from "./Icon";

// Context
import ApiContext from "../context/ApiContext";
import EndPointContext from "../context/EndPointContext";

const PowerButton = () => {
  // Use context
  const { endPointValue } = useContext(EndPointContext);

  // API url
  const url = useContext(ApiContext);
  //const stateEndPoint = "lights/27/state";
  const stateEndPoint = `lights/${endPointValue}/state`;

  // Light state
  const [lightState, setLightState] = useState(false);

  // Turn on & turn off
  const TurnOn = () => {
    setLightState(!lightState);
    axios({
      method: "put",
      url: url + stateEndPoint,
      data: {
        on: true,
      },
    });
  };
  const TurnOff = () => {
    setLightState(!lightState);
    axios({
      method: "put",
      url: url + stateEndPoint,
      data: {
        on: false,
      },
    });
  };

  return (
    <button onClick={lightState ? TurnOn : TurnOff} className="Power-button h-8 w-8 flex justify-center items-center absolute -top-4 right-5 rounded-full bg-powerButton-background">
      <Icon src={PowerOff} alt="power button" />
    </button>
  );
};

export default PowerButton;
