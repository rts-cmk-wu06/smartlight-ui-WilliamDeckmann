// Components
import TextSmall from "./TextSmall"

const ButtonText = (props) => {
    return (
        <span className={props.active ? "Heading-big text-white" : "Heading-big text-slate-700"}>
            <TextSmall text={props.text} />
        </span>
    );
}
 
export default ButtonText;