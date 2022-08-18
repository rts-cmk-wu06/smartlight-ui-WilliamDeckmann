// Assets
import LightbulbOff from "../assets/lightbulb_off.png";
import LightbulbOn from "../assets/lightbulb_on.png";
import LightbulbActive from "../assets/lightbulb_active.png";

// Components
import ContainerHeading from "../components/ContainerHeading";
import Icon from "../components/Icon";
import IntensityMeter from "../components/IntensityMeter";

const IntensityAdjuster = (props) => {
  return (
    <div className="Intensity-adjuster w-full">
      <ContainerHeading text="Intensity" />
      <section
        className="Intensity-adjuster__section h-7 grid items-end gap-x-5"
        style={{ gridTemplateColumns: "18px 1fr 18px" }}
      >
        <figure
          className="Intensity-adjuster__figure"
          style={{ height: "22px" }}
        >
          <Icon src={LightbulbOff} alt="lightbulb off" />
        </figure>
        <IntensityMeter />
        <figure
          className="Intensity-adjuster__figure"
          style={{ height: "28px" }}
        >
          {props.active ? (
            <Icon src={LightbulbOn} alt="lightbulb active" />
          ) : (
            <Icon src={LightbulbActive} alt="lightbulb on" />
          )}
        </figure>
      </section>
    </div>
  );
};

export default IntensityAdjuster;
