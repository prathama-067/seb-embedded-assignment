import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/"
      >
        <li className="hover:text-teal-700">Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/transactions"
      >
        <li className="hover:text-teal-700">Transactions</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        to="/fund-transfer"
      >
        <li className="hover:text-teal-700">Fund transfer</li>
      </NavLink>
    </>
  );
};

export default MobileNav;
