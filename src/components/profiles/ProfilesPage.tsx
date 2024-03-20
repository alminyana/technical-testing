import { NavLink, Outlet } from 'react-router-dom';
import './ProfilesPage.css';
import React from 'react';

export default function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className="profilesContainer">
           <div>
           <div className="title">Profiles</div>
            <div className='allLinks'>
            {profiles.map((profile) => (
                <NavLink className={({isActive}) => {
                    return isActive ? 'active' : 'noActive'
                }} key={profile} to={`/profiles/${profile}`}>
                    Go to profile {profile}
                </NavLink>
            ))}
            </div>
           </div>
            <Outlet />
        </div>
    );
}
