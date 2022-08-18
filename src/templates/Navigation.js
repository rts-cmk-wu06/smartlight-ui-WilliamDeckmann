// Assets
import Lightbulb from "../assets/lightbulb.png";
import House from "../assets/house.png";
import Gear from "../assets/gear.png";

// Components
import NavigationLink from "../components/NavigationLink";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list flex gap-16">
        <NavigationLink url="" alt="light bulb" src={Lightbulb} />
        <NavigationLink url="" src={House} />
        <NavigationLink url="" src={Gear} />
      </ul>
    </nav>
  );
};

export default Navigation;
