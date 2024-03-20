import { createContext, useContext } from "react";
import { User } from "./DashboardWrapper";

export const DashboardContext = createContext<User | undefined>(undefined);

/* custom hook to handle the undfined case*/
export function useUserContext() {
    const user = useContext(DashboardContext);

    if (user === undefined) {
        throw new Error ("userUserContext must be used with a Dashboard context");
    }

    return user;
};
