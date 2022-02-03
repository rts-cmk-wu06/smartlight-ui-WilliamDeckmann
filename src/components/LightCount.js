// Components
import TextSmall from "./TextSmall"

const LightCount = (props) => {
    return (
        <span className="Heading-big text-lightCount">
            <TextSmall text={`${props.text} Lights`} />
        </span>
    );
}
 
export default LightCount;