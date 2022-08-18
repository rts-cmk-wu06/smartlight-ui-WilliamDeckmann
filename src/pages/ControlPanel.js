// Templates
import Header from "../templates/Header";
import Main from "../templates/Main";
import RoomSelector from "../templates/RoomSelector";

// Components
import PageHeading from "../components/PageHeading";
import ProfileIcon from "../components/ProfileIcon";
import BackgroundCircles from "../components/BackgroundCircles";

// Assets
import Dog from "../assets/dog.jpg";

const ControlPanel = () => {
  return (
    <div
      className="Control-panel grid"
      style={{ height: "calc(100vh - 70px)", gridTemplateRows: "auto 1fr" }}
    >
      <Header>
        <BackgroundCircles />
        <article className="Control-panel__article mt-16 flex justify-between">
          <PageHeading text="Control Panel" />
          <ProfileIcon src={Dog} active={true} />
        </article>
      </Header>
      <Main>
        <RoomSelector />
      </Main>
    </div>
  );
};

export default ControlPanel;
