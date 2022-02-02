// Assets
import BedRoom from "../assets/bed_room.png"
import LivingRoom from "../assets/living_room.png"
import Kitchen from "../assets/kitchen.png"
import Bathroom from "../assets/bathroom.png"
import Outdoor from "../assets/outdoor.png"
import Balcony from "../assets/balcony.png"

// Components
import RoomCard from "../components/RoomCard";

const RoomSelector = () => {
    return (
        <div className="Room-selector flex flex-col gap-x-24">
            All Rooms
            <ul className="Room-selector__list grid grid-cols-2 gap-x-6 gap-y-5">
                <RoomCard url="/bed-room" src={BedRoom} alt="bed room" />
                <RoomCard url="/living-room" src={LivingRoom} alt="living room" />
                <RoomCard url="/kitchen" src={Kitchen} alt="kitchen" />
                <RoomCard url="/bathroom" src={Bathroom} alt="bathroom" />
                <RoomCard url="/outdoor" src={Outdoor} alt="outdoor" />
                <RoomCard url="/balcony" src={Balcony} alt="balcony" />
            </ul>
        </div>
    );
}
 
export default RoomSelector;