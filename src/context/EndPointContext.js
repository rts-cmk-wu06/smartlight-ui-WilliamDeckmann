import { createContext } from "react";

const EndPointContext = createContext({
  endPointValue: "...",
  setEndPointValue: () => {},
});
 
export default EndPointContext;