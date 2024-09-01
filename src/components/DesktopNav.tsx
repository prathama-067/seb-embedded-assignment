import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNav = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/transactions"
      >
        <li>Transactions</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/fund-transfer"
      >
        <li>Fund Transfer</li>
      </NavLink>
    </>
  );
};

export default DesktopNav;
