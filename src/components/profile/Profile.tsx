import React, { useContext } from "react";
import { useUserContext } from "../dashboard/context";

interface profileProps {}

export default function Profile({}: profileProps) {
    // const user = useContext(DashboardContext);
    const user = useUserContext();

    return (
        <div>
            this is Profile - name: {user?.name}
        </div>
    );
}
