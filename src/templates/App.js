// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import BedRoom from "../pages/BedRoom";

// Templates
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route exact path="/" element={<ControlPanel />} />
          <Route exact path="/bed-room" element={<BedRoom />} />
          <Route exact path="/living-room" element={<BedRoom />} />
          <Route exact path="/kitchen" element={<BedRoom />} />
          <Route exact path="/bathroom" element={<BedRoom />} />
          <Route exact path="/outdoor" element={<BedRoom />} />
          <Route exact path="/balcony" element={<BedRoom />} />
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