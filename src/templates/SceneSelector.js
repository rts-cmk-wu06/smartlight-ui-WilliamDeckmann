import ContainerHeading from "../components/ContainerHeading";
import SceneButton from "../components/SceneButton";

const SceneSelector = () => { //linear-gradient(90deg, #FF9B9B, #FFBC91)
    return (
        <div className="Scene-selector flex flex-col gap-y-6">
            <ContainerHeading text="Scenes" />
            <ul className="Scene-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
                <SceneButton color="#FF9B9B" text="Birthday" /> 
            </ul>
        </div>
    );
}
 
export default SceneSelector;