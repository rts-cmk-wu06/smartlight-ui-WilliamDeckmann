// Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "../components/Icon";
import CardHeading from "../components/CardHeading";
import LightCountSmall from "../components/LightCountSmall";

// Assets
import BedRoom from "../assets/bed_room.png";
import LivingRoom from "../assets/living_room.png";
import Kitchen from "../assets/kitchen.png";
import Bathroom from "../assets/bathroom.png";
import Outdoor from "../assets/outdoor.png";
import Balcony from "../assets/balcony.png";


const RoomCard = (props) => {

  // Card id
  const id = props.id;

  /* const [linkState, setLinkState] = useState(props.class)
  
  if (linkState != "") {
    //console.log(linkState);
    if (linkState.includes(" ")) {
      const newLink = linkState.replace(" ", '-').toLowerCase();
      setLinkState(newLink)
      //console.log(linkState);
      //console.log(newLink);
    } else {
      const newLink = linkState.toLowerCase();
      setLinkState(newLink)
      //console.log(linkState);
      //console.log(newLink);
    }
  } */

  return (
    <Link to={"room-"+id}>
      <div
        //key={props.key}
        className="Room-card p-5 pb-4 flex flex-col gap-5 rounded-3xl bg-white"
      >
        <figure className="Room-card__figure">
          <Icon src={LivingRoom} alt={props.class} />
        </figure> 
        <article className="Room-card__article">
          <CardHeading text={props.class} />
          <LightCountSmall text={props.lights.length} />
        </article>
      </div>
    </Link>
  );
};

export default RoomCard;
