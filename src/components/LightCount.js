// Components
import TextSmall from "./TextSmall"

const LightCount = (props) => {
    return (
        <span className="Heading-big text-yellow-400">
            <TextSmall text={props.text} />
        </span>
    );
}
 
export default LightCount;