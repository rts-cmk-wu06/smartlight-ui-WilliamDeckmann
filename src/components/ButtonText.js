// Components
import TextSmall from "./TextSmall"

const ButtonText = (props) => {
    return (
        <span className={props.active ? "Heading-big text-buttonText-active" : "Heading-big text-buttonText-inactive"}>
            <TextSmall text={props.text} />
        </span>
    );
}
 
export default ButtonText;