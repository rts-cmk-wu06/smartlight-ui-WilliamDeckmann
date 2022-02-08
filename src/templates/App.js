// Imports
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

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
  const location = useLocation();

  const variants = {
    start: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    }
  }

  return (
    <div className="App h-screen grid bg-background" style={{maxWidth: "375px", gridTemplateRows: "auto 1fr auto"}}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}> 
            <Route exact path="/" element={<motion.div className="Animation-container" initial={{rotate: "0deg"}} exit={{rotate: "-45deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/bed-room" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/living-room" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/kitchen" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/bathroom" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/outdoor" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route exact path="/balcony" element={<motion.div className="Animation-container" initial={{rotate: "-45deg"}} exit={{rotate: "0deg"}} transition={{duration: 2}}><BackgroundCircles /></motion.div>} />
            <Route path="*" element="Nothing found..." />
          </Routes>
        </AnimatePresence>
        <Header>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}> 
              <Route exact path="/" element={<ControlPanelHeader variants={variants} />} />
              <Route exact path="/bed-room" element={<RoomAdjusterHeader name="Bed Room" lights={4} variants={variants} />} />
              <Route exact path="/living-room" element={<RoomAdjusterHeader name="Living Room" lights={2} variants={variants} />} />
              <Route exact path="/kitchen" element={<RoomAdjusterHeader name="Kitchen" lights={5} variants={variants} />} />
              <Route exact path="/bathroom" element={<RoomAdjusterHeader name="Bathroom" lights={1} variants={variants} />} />
              <Route exact path="/outdoor" element={<RoomAdjusterHeader name="Outdoor" lights={5} variants={variants} />} />
              <Route exact path="/balcony" element={<RoomAdjusterHeader name="Balcony" lights={2} variants={variants} />} />
              <Route path="*" element="Nothing found..." />
            </Routes>
          </AnimatePresence>
        </Header>
        <Main>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<ControlPanelMain variants={variants} />} />
              <Route exact path="/bed-room" element={<RoomAdjusterMain variants={variants} />} />
              <Route exact path="/living-room" element={<RoomAdjusterMain variants={variants} />} />
              <Route exact path="/kitchen" element={<RoomAdjusterMain variants={variants} />} />
              <Route exact path="/bathroom" element={<RoomAdjusterMain variants={variants} />} />
              <Route exact path="/outdoor" element={<RoomAdjusterMain variants={variants} />} />
              <Route exact path="/balcony" element={<RoomAdjusterMain variants={variants} />} />
              <Route path="*" element="Nothing found..." />
            </Routes>
          </AnimatePresence>
        </Main>
      <Footer>
        <Navigation />
      </Footer>
    </div>
  );
}

export default App;