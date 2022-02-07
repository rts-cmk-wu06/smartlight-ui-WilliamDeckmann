// Assets
import BedRoom from "../assets/bed_room.png"
import LivingRoom from "../assets/living_room.png"
import Kitchen from "../assets/kitchen.png"
import Bathroom from "../assets/bathroom.png"
import Outdoor from "../assets/outdoor.png"
import Balcony from "../assets/balcony.png"

// Templates
import RoomCard from "./RoomCard";

// Components
import ContainerHeading from "../components/ContainerHeading"

const RoomSelector = (props) => {
    return (
        <div className="Room-selector w-full flex flex-col gap-y-6">
            <ContainerHeading text="All Rooms" />
            <ul className="Room-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
                <RoomCard url="/bed-room" src={BedRoom} alt="bed room" name="Bed Room" lights={4} />
                <RoomCard url="/living-room" src={LivingRoom} alt="living room" name="Living Room" lights={2} />
                <RoomCard url="/kitchen" src={Kitchen} alt="kitchen" name="Kitchen" lights={5} />
                <RoomCard url="/bathroom" src={Bathroom} alt="bathroom" name="bathRoom" lights={1} />
                <RoomCard url="/outdoor" src={Outdoor} alt="outdoor" name="Outdoor" lights={5} />
                <RoomCard url="/balcony" src={Balcony} alt="balcony" name="Balcony" lights={2} />
            </ul>
        </div>
    );
}
 
export default RoomSelector;