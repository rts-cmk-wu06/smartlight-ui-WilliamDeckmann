// Templates
import RoomCard from "./RoomCard";

// Components
import ContainerHeading from "../components/ContainerHeading";

const RoomSelector = (props) => {
  return (
    <div className="Room-selector w-full flex flex-col gap-y-6">
      <ContainerHeading text="All Rooms" />
      <ul className="Room-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
        {props.data.map((card) => (
          <RoomCard {...card} />
        ))}
      </ul>
    </div>
  );
};

export default RoomSelector;
