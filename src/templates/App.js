// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import ControlPanel from "../pages/ControlPanel";
import BedRoom from "../pages/BedRoom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ControlPanel />} />
        <Route path="/bed-room" element={<BedRoom />} />
        <Route path="/living-room" element={<BedRoom />} />
        <Route path="/kitchen" element={<BedRoom />} />
        <Route path="/bathroom" element={<BedRoom />} />
        <Route path="/outdoor" element={<BedRoom />} />
        <Route path="/balcony" element={<BedRoom />} />
      </Routes>
    </div>
  );
}

export default App;