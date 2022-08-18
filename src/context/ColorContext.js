import { createContext } from "react";

const ColorContext = createContext({
  colorValue: "#ffffff",
  setColorValue: () => {},
});
 
export default ColorContext;