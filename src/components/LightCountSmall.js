// Components
import TextSmall from "./TextSmall";

const LightCountSmall = (props) => {
  return (
    <span className="Heading-big text-lightCount-small">
      <TextSmall text={`${props.text} Lights`} />
    </span>
  );
};

export default LightCountSmall;
