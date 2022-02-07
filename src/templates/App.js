// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import RoomAdjuster from "../pages/RoomAdjuster";

// Templates
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {

  const styles = {
    "maxWidth": "375px",
    "border": "1px solid red",
  }

  return (
    <div className="App bg-background" style={styles}>
      <Routes>
        <Route exact path="/" element={<ControlPanel />} />
        <Route exact path="/bed-room" element={<RoomAdjuster name="Bed Room" lights={4} />} />
        <Route exact path="/living-room" element={<RoomAdjuster name="Living Room" lights={2} />} />
        <Route exact path="/kitchen" element={<RoomAdjuster name="Kitchen" lights={5} />} />
        <Route exact path="/bathroom" element={<RoomAdjuster name="Bathroom" lights={1} />} />
        <Route exact path="/outdoor" element={<RoomAdjuster name="Outdoor" lights={5} />} />
        <Route exact path="/balcony" element={<RoomAdjuster name="Balcony" lights={2} />} />
        <Route path="*" element="Nothing found..." />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </div>
  );
}

export default App;