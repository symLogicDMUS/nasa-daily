import { createContext } from "react";
import { appDefaultState } from "./appDefaultState";

const AppContext = createContext(appDefaultState);
export default AppContext;
