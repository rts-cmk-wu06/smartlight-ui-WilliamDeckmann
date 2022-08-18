// Imports
import { motion } from "framer-motion";

// Components
import ContainerHeading from "../components/ContainerHeading";
import ColorAdder from "../components/ColorAdder";
import ColorButton from "../components/ColorButton";

const ColorSelector = () => {
  // Color array
  let colorArray = [
    {
      id: 1,
      color: "#FF9B9B",
    },
    {
      id: 2,
      color: "#94EB9E",
    },
    {
      id: 3,
      color: "#94CAEB",
    },
    {
      id: 4,
      color: "#A594EB",
    },
    {
      id: 5,
      color: "#DE94EB",
    },
    {
      id: 6,
      color: "#EBD094",
    },
  ];
  
  return (
    <div className="Color-selector__list w-full flex flex-col gap-y-6">
      <ContainerHeading text="Colors" />
      <ul className="Color-selector__list flex">
        {colorArray.map((item) => {
          if (item.id == 1) {
            return <ColorButton color={item.color} />;
          } else {
            return (
              <motion.div
                className=""
                initial={{ marginLeft: "-6px" }}
                animate={{ marginLeft: "16px" }}
                transition={{ delay: 1, duration: 1 }}
              >
                <ColorButton color={item.color}  />
              </motion.div>
            );
          }
        })}
        <ColorAdder />
      </ul>
    </div>
  );
};

export default ColorSelector;
