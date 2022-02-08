// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanelHeader from "../pages/ControlPanelHeader";
import RoomAdjusterHeader from "../pages/RoomAdjusterHeader";
import ControlPanelMain from "../pages/ControlPanelMain";
import RoomAdjusterMain from "../pages/RoomAdjusterMain";

// Templates
import Header from "../templates/Header";
import Main from "../templates/Main"; 
import Footer from "./Footer";
import Navigation from "./Navigation";

// Components
import BackgroundCircles from "../components/BackgroundCircles";

function App() {
  return (
    <div className="App h-screen grid bg-background" style={{maxWidth: "375px", gridTemplateRows: "auto 1fr auto"}}>
      <Header>
        <BackgroundCircles />
        <Routes>
          <Route exact path="/" element={<ControlPanelHeader />} />
          <Route exact path="/bed-room" element={<RoomAdjusterHeader name="Bed Room" lights={4} />} />
          <Route exact path="/living-room" element={<RoomAdjusterHeader name="Living Room" lights={2} />} />
          <Route exact path="/kitchen" element={<RoomAdjusterHeader name="Kitchen" lights={5} />} />
          <Route exact path="/bathroom" element={<RoomAdjusterHeader name="Bathroom" lights={1} />} />
          <Route exact path="/outdoor" element={<RoomAdjusterHeader name="Outdoor" lights={5} />} />
          <Route exact path="/balcony" element={<RoomAdjusterHeader name="Balcony" lights={2} />} />
          <Route path="*" element="Nothing found..." />
        </Routes>
      </Header>

      <Main>
        <Routes>
          <Route exact path="/" element={<ControlPanelMain />} />
          <Route exact path="/bed-room" element={<RoomAdjusterMain />} />
          <Route exact path="/living-room" element={<RoomAdjusterMain />} />
          <Route exact path="/kitchen" element={<RoomAdjusterMain />} />
          <Route exact path="/bathroom" element={<RoomAdjusterMain />} />
          <Route exact path="/outdoor" element={<RoomAdjusterMain />} />
          <Route exact path="/balcony" element={<RoomAdjusterMain />} />
          <Route path="*" element="Nothing found..." />
        </Routes>
      </Main>

      <Footer>
        <Navigation />
      </Footer>
    </div>
  );
}

export default App;