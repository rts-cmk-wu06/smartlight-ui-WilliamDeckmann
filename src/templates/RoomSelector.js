// Imports
import { useContext, useState, useEffect  } from "react";
import axios from "axios";

// Templates
import RoomCard from "./RoomCard";

// Components
import ContainerHeading from "../components/ContainerHeading";

// Context
import ApiContext from "../context/ApiContext";

const RoomSelector = () => {
  // Use context
  const url = useContext(ApiContext);

  // Room array & light array
  const [ groupArray, setGroupArray ] = useState();
  const [ lightArray, setLightArray ] = useState();

  // Get API data
  useEffect(() => {
    axios
    .get(url)
    .then(result => {
      const groupsValues = Object.values(result.data.groups)
      const lightsValues = Object.values(result.data.lights)
      setGroupArray(groupsValues)
      setLightArray(lightsValues)
    })
  }, []);
  useEffect(() => {
  }, [groupArray, lightArray]);

  return (
    <div className="Room-selector w-full flex flex-col gap-y-6">
      <ContainerHeading text="All Rooms" />
      {groupArray ? 
        <ul className="Room-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
        {groupArray.map((card, i) => (
          <RoomCard {...card} id={i} />
        ))}
      </ul>
      :
        <div>Loading all rooms...</div>
      }
    </div>
  );
};

export default RoomSelector;
