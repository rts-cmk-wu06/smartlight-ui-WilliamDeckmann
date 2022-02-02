// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import RoomAdjuster from "../pages/RoomAdjuster";

// Templates
import Main from "./Main";
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route exact path="/" element={<ControlPanel />} />
          <Route exact path="/bed-room" element={<RoomAdjuster name="Bed Room" />} />
          <Route exact path="/living-room" element={<RoomAdjuster name="Living Room" />} />
          <Route exact path="/kitchen" element={<RoomAdjuster name="Kitchen" />} />
          <Route exact path="/bathroom" element={<RoomAdjuster name="Bathroom" />} />
          <Route exact path="/outdoor" element={<RoomAdjuster name="Outdoor" />} />
          <Route exact path="/balcony" element={<RoomAdjuster name="Balcony" />} />
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