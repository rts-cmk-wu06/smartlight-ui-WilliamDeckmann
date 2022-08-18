// Components
import TextMedium from "./TextMedium";

const CardHeading = (props) => {
  return (
    <span className="Heading-big text-cardHeading">
      <TextMedium text={props.text} />
    </span>
  );
};

export default CardHeading;
