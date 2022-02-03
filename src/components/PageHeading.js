// Components
import TextBig from "./TextBig"

const PageHeading = (props) => {
    return (
        <span className="Heading-big text-white">
            <TextBig text={props.text} />
        </span>
    );
}
 
export default PageHeading;