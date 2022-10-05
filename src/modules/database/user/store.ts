import { createContext } from "react";
import { storeProps } from "./interface";

const Store = createContext<storeProps | undefined>(undefined);
export default Store;
