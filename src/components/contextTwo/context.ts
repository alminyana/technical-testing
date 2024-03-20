import { createContext } from "react"
import { Data } from "./ContextTwo";

export const TryContextData = createContext<Data | undefined>(undefined);
