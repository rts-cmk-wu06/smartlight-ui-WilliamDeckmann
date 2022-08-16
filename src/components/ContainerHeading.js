// Components
import TextMedium from "./TextMedium";

const ContainerHeading = (props) => {
  return (
    <span className="Container-heading text-containerHeading">
      <TextMedium text={props.text} />
    </span>
  );
};

export default ContainerHeading;
