import React, { useState } from "react";
import { DashboardContext } from "./context";
import Dashboard from "./Dashboard";

export interface User {
    isSubscribed: boolean;
    name: string;
}

export default function DashboardWrapper () {
    const [userr] = useState<User>({
        isSubscribed: true,
        name: 'Peter'
      });

    return (
        <DashboardContext.Provider value={userr}>
          <h4>holaa</h4>
          <Dashboard />
        </DashboardContext.Provider>
    );
}
