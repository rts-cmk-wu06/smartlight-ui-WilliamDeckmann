// Imports
import { Link } from "react-router-dom";

// Components
import Icon from "../components/Icon";
import CardHeading from "../components/CardHeading";
import LightCountSmall from "../components/LightCountSmall";

const RoomCard = (props) => {
  console.log(props);
  return (
    <Link to={props.url}>
      <div
        key={props.id}
        className="Room-card p-5 pb-4 flex flex-col gap-5 rounded-3xl bg-white"
      >
        <figure className="Room-card__figure">
          <Icon src={props.img} alt={props.name} />
        </figure>
        <article className="Room-card__article">
          <CardHeading text={props.name} />
          <LightCountSmall text={props.lights} />
        </article>
      </div>
    </Link>
  );
};

export default RoomCard;
