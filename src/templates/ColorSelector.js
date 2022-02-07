// Imports
import { motion } from "framer-motion"

// Components
import ContainerHeading from "../components/ContainerHeading";
import ColorAdder from "../components/ColorAdder";
import ColorButton from "../components/ColorButton";

const ColorSelector = () => {

    // Color array
    let colorArray = [
        {
            color: "#FF9B9B",
            id: 1,
        },
        {
            color: "#94EB9E",
            id: 2,
        },
        {
            color: "#94CAEB",
            id: 3,
        },
        {
            color: "#A594EB",
            id: 4,
        },
        {
            color: "#DE94EB",
            id: 5,
        },
        {
            color: "#EBD094",
            id: 6,
        },
    ];

    return (
        <div className="Color-selector__list w-full flex flex-col gap-y-6">
            <ContainerHeading text="Colors" />
            <ul className="Color-selector__list flex gap-x-4">
                {colorArray.map(item => (
                    <ColorButton color={item.color} /> 
                ))}
                <ColorAdder />
            </ul>
        </div>
    );
}
 
export default ColorSelector;