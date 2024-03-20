import React from "react";

import './Dashboard.css';
import SideBar from "./sidebar/SideBar";
import Profile from "../profile/Profile";

interface DashboardProps {}

export default function Dashboard ({}: DashboardProps) {

    return (
        <div className="dashboard">
            <h3>useContext case</h3>
            <SideBar />
            <Profile />
        </div>
    );
}
