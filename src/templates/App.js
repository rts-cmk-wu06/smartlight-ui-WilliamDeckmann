// Imports
import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Sentry from "@sentry/react";

// Assets
import BedRoom from "../assets/bed_room.png";
import LivingRoom from "../assets/living_room.png";
import Kitchen from "../assets/kitchen.png";
import Bathroom from "../assets/bathroom.png";
import Outdoor from "../assets/outdoor.png";
import Balcony from "../assets/balcony.png";

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
import ErrorBoundary from "../components/ErrorBoundary";

// Context
import ApiContext from "../context/ApiContext";

// Room array
let RoomArray = [
  {
    id: 1,
    url: "bed-room",
    name: "Bed Room",
    lights: 4,
    img: BedRoom,
    alt: "bed room",
  },
  {
    id: 2,
    url: "living-room",
    name: "Living Room",
    lights: 2,
    img: LivingRoom,
    alt: "living room",
  },
  {
    id: 3,
    url: "kitchen",
    name: "Kitchen",
    lights: 5,
    img: Kitchen,
    alt: "kitchen",
  },
  {
    id: 4,
    url: "bathroom",
    name: "Bathroom",
    lights: 1,
    img: Bathroom,
    alt: "bathroom",
  },

  {
    id: 5,
    url: "outdoor",
    name: "Outdoor",
    lights: 5,
    img: Outdoor,
    alt: "outdoor",
  },

  {
    id: 6,
    url: "balcony",
    name: "Balcony",
    lights: 2,
    img: Balcony,
    alt: "balcony",
  },
];

function App() {
  // Use context
  const context = useContext(ApiContext);

  // Variables
  const location = useLocation();

  // Variants
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
    },
  };

  return (
    <div
      className="App h-screen grid bg-background overflow-hidden"
      style={{ maxWidth: "375px", gridTemplateRows: "auto 1fr auto" }}
    >
      <ApiContext.Provider value={context}>
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                element={
                  <motion.div
                    className="Animation-container absolute col-start-1 col-end-2 row-start-1 row-end-2"
                    initial={{ rotate: "0deg" }}
                    exit={{ rotate: "-45deg" }}
                    transition={{ duration: 2 }}
                  >
                    <BackgroundCircles />
                  </motion.div>
                }
              />
              <Route
                exact
                path="/:id"
                element={
                  <motion.div
                    className="Animation-container absolute col-start-1 col-end-2 row-start-1 row-end-2"
                    initial={{ rotate: "-45deg" }}
                    exit={{ rotate: "0deg" }}
                    transition={{ duration: 2 }}
                  >
                    <BackgroundCircles />
                  </motion.div>
                }
              />
              <Route path="*" element="Nothing found..." />
            </Routes>
          </AnimatePresence>
        </Sentry.ErrorBoundary>

        <Header>
          <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  element={
                    <ControlPanelHeader rooms={RoomArray} variants={variants} />
                  }
                />
                <Route
                  exact
                  path="/:id"
                  element={
                    <RoomAdjusterHeader
                      rooms={RoomArray}
                      name="Room"
                      lights={0}
                      variants={variants}
                    />
                  }
                />
                <Route path="*" element="Nothing found..." />
              </Routes>
            </AnimatePresence>
          </Sentry.ErrorBoundary>
        </Header>

        <Main>
          <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  element={
                    <ControlPanelMain rooms={RoomArray} variants={variants} />
                  }
                />
                <Route
                  exact
                  path="/:id"
                  element={
                    <RoomAdjusterMain rooms={RoomArray} variants={variants} />
                  }
                />
                <Route path="*" element="Nothing found..." />
              </Routes>
            </AnimatePresence>
          </Sentry.ErrorBoundary>
        </Main>

        <Footer>
          <Navigation />
        </Footer>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
