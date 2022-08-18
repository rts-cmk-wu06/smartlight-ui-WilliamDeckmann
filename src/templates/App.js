// Imports
import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Sentry from "@sentry/react";

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
import ColorContext from "../context/ColorContext";

function App() {
  // Use context
  const context = useContext(ApiContext);
  const [ colorValue, setColorValue ] = useState("#ffffff");
  const color = { colorValue, setColorValue };

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
      className="App h-screen grid bg-background"
      style={{ maxWidth: "375px", gridTemplateRows: "auto 1fr auto" }}
    >
      <ApiContext.Provider value={context}>
        <ColorContext.Provider value={color}>

          {/* Background circles */}
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

          {/* Header */}
          <Header>
            <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    element={
                      <ControlPanelHeader variants={variants} />
                    }
                  />
                  <Route
                    exact
                    path="/:id"
                    element={
                      <RoomAdjusterHeader
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

          {/* Main */}
          <Main>
            <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
              <AnimatePresence exitBeforeEnter>
                {<Routes location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    element={
                      <ControlPanelMain variants={variants} />
                    }
                  />
                  <Route
                    exact
                    path="/:id"
                    element={
                      <RoomAdjusterMain variants={variants} />
                    }
                  />
                  <Route path="*" element="Nothing found..." />
                </Routes>}
              </AnimatePresence>
            </Sentry.ErrorBoundary>
          </Main>
          
          {/* Footer */}
          <Footer>
            <Navigation />
          </Footer>
        </ColorContext.Provider>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
