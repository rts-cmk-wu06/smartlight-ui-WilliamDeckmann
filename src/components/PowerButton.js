// Assets
import PowerOff from "../assets/power_off.png"

// Components
import Icon from "./Icon"

const PowerButton = () => {
    return (
        <button className="Power-button h-8 w-8 flex justify-center items-center absolute -top-4 right-5 rounded-full bg-powerButton-background">
            <Icon src={PowerOff} alt="power button" />
        </button>
    );
}
 
export default PowerButton;