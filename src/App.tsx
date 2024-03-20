import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function App() {

  const links = ['root', 'fetch', 'post', 'context', 'profiles', 'fetch-table', 'context-two'];

  return (
    <div className="menuContainer">
      <nav>
        <ul className="menu">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                className={({isActive}) => { return isActive ? 'active' : 'noActive'}}
                to={`/${link !== 'root' ? link : ''}`}>
                  {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
