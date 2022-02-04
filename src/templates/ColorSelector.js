// Components
import ContainerHeading from "../components/ContainerHeading";
import ColorAdder from "../components/ColorAdder";
import ColorButton from "../components/ColorButton";

const ColorSelector = () => {

    // Color array
    let colorArray = [
        "#FF9B9B",
        "#94EB9E",
        "#94CAEB",
        "#A594EB",
        "#DE94EB",
        "#EBD094",
    ];

    return (
        <div className="Color-selector__list flex flex-col gap-y-6">
            <ContainerHeading text="Colors" />
            <ul className="Color-selector__list flex gap-x-4">
                {colorArray.map(item => (
                    <ColorButton color={item} />
                ))}
                <ColorAdder />
            </ul>
        </div>
    );
}
 
export default ColorSelector;