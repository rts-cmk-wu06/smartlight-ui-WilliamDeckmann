// Imports
import { useState } from "react";
import Slider from "react-input-slider";


const IntensitySlider = () => {
  // X state
  const [state, setState] = useState({ x: 0 });

  return (
    <div className="Intensity-meter flex flex-col gap-3">
      ({state.x})
      <Slider
        axis="x"
        x={state.x}
        xmax={1}
        xmin={0}
        xstep={0.2}
        onChange={({ x }) => setState((state) => ({ ...state, x }))}
        styles={{
          track: {
            width: "100%",
            height: "1px",
            backgroundColor: "#CECECE",
          },
          active: {
            backgroundColor: "#FFD339",
          },
          thumb: {
            width: 14,
            height: 14,
          },
        }}
      />
      <ul className="Intensity-meter__list flex justify-between">
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
        <li
          className="Intensity-meter__item h-1 bg-intensitySelector-setting"
          style={{ width: "1px" }}
        ></li>
      </ul>
    </div>
  );
};

export default IntensitySlider;
