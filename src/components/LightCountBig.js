// Components
import TextMedium from "./TextMedium"

const LightCountBig = (props) => {
    return (
        <span className="Heading-big text-lightCount-big">
            <TextMedium text={`${props.text} Lights`} />
        </span>
    );
}
 
export default LightCountBig;