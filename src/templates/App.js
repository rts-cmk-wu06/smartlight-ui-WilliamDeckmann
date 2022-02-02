// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import RoomAdjuster from "../pages/RoomAdjuster";

// Templates
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route exact path="/" element={<ControlPanel />} />
          <Route exact path="/bed-room" element={<RoomAdjuster />} />
          <Route exact path="/living-room" element={<RoomAdjuster />} />
          <Route exact path="/kitchen" element={<RoomAdjuster />} />
          <Route exact path="/bathroom" element={<RoomAdjuster />} />
          <Route exact path="/outdoor" element={<RoomAdjuster />} />
          <Route exact path="/balcony" element={<RoomAdjuster />} />
          <Route path="*" element="Nothing found..." />
        </Routes>
      </Main>
      <Footer>
        Footer
      </Footer>
    </div>
  );
}

export default App;