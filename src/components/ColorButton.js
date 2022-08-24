// Imports
import { useContext } from "react";
import axios from "axios";
import ColorConverter from "cie-rgb-color-converter";
import hexRgb from "hex-rgb";

// Context
import ApiContext from "../context/ApiContext";
import ColorContext from "../context/ColorContext";
import EndPointContext from "../context/EndPointContext";

const ColorButton = (props) => {

  // Use context
  const { setColorValue } = useContext(ColorContext);
  const { endPointValue } = useContext(EndPointContext);

  // API url
  const url = useContext(ApiContext);
  //const stateEndPoint = "lights/27/state";
  const stateEndPoint = `lights/${endPointValue}/state`;

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
      className="Color-button h-7 w-7 rounded-full"
      style={{ backgroundColor: props.color }}
    ></button>
  );
};

export default ColorButton;
