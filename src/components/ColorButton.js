// Imports
import { useContext, useState } from "react";
import axios from "axios";
import ColorConverter from "cie-rgb-color-converter";
import hexRgb from "hex-rgb";

// Context
import ApiContext from "../context/ApiContext";

const ColorButton = (props) => {
  // API url
  const url = useContext(ApiContext);
  const stateEndPoint = "lights/27/state";

  // Hex values to RGB
  //const [colorState, setColorState] = useState("#ffffff");
  //const rgb = hexRgb(colorState);
  const rgb = hexRgb(props.color);

  // Color coordinates
  let coordinates = ColorConverter.rgbToXy(rgb.red, rgb.green, rgb.blue);
  //const [coordinateState, setCoordinateState] = useState(xy);

  const ChangeColor = () => {
    //setColorState(props.color);
    //setCoordinateState(xy);
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
