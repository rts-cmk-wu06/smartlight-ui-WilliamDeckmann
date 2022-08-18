// Imports
import { useContext, useState } from "react";
import axios from "axios";
import ColorConverter from "cie-rgb-color-converter";
import hexRgb from "hex-rgb";

// Context
import ApiContext from "../context/ApiContext";
import ColorContext from "../context/ColorContext";

// Assets
import LittleLightbulbWhite from "../assets/little_lightbulb_white.png";

// Components
import Icon from "../components/Icon";
import ButtonText from "../components/ButtonText";

const SceneButton = (props) => {
  // API url
  const url = useContext(ApiContext);
  const stateEndPoint = "lights/27/state";

  // Use context
  const { setColorValue } = useContext(ColorContext);

  // Hex values to RGB
  const rgb = hexRgb(props.color);

  // Color coordinates
  let coordinates = ColorConverter.rgbToXy(rgb.red, rgb.green, rgb.blue);

  const ChangeColor = () => {
    setColorValue(props.color)
    axios({
      method: "put",
      url: url + stateEndPoint,
      data: {
        xy: [coordinates.x, coordinates.y],
      },
    });
  }

  return (
    <button
      onClick={ChangeColor}
      className="Scene-button w-full py-4 pl-6 pr-7 flex gap-x-5 items-center rounded-xl"
      style={{ backgroundImage: props.gradient }}
    >
      <Icon src={LittleLightbulbWhite} alt="light bulb" />
      <ButtonText text={props.text} active={true} />
    </button>
  );
};

export default SceneButton;
