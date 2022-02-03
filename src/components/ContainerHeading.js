// Components
import TextMedium from "./TextMedium"

const ContainerHeading = (props) => {
    return (
        <span className="Container-heading text-slate-800">
            <TextMedium text={props.text} />
        </span>
    );
}
 
export default ContainerHeading;