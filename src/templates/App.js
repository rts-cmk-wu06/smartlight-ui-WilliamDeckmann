// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import BedRoom from "../pages/BedRoom";

// Templates
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header>
        Header
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<ControlPanel />} />
          <Route path="/bed-room" element={<BedRoom />} />
          <Route path="/living-room" element={<BedRoom />} />
          <Route path="/kitchen" element={<BedRoom />} />
          <Route path="/bathroom" element={<BedRoom />} />
          <Route path="/outdoor" element={<BedRoom />} />
          <Route path="/balcony" element={<BedRoom />} />
        </Routes>
      </Main>
      <Footer>
        Footer
      </Footer>
    </div>
  );
}

export default App;