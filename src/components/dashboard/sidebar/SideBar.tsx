import { useContext } from "react";
import React from "react";
import { useUserContext } from "../context";

interface SideBarProps {}

export default function SideBar({}: SideBarProps) {

    // const user = useContext(DashboardContext);
    const user = useUserContext();

    return (
        <div>
            this is Sidebar - {user?.isSubscribed ? 'is alerady subscribed' : 'not subscribed'}
        </div>
    );
}
