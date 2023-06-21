import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive, isPending }) =>
          isActive
            ? {
                fontWeight: "bold",
                // backgroundColor: "white",
                color: "blue",
                textDecoration: "none",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Home 🏠
      </NavLink>
      &nbsp;
      <NavLink
        to="/add"
        style={({ isActive, isPending }) =>
          isActive
            ? {
                fontWeight: "bold",
                // backgroundColor: "white",
                color: "blue",
                textDecoration: "none",
              }
            : {
                textDecoration: "none",
              }
        }
      >
        Add User ➕
      </NavLink>
    </div>
  );
};

export default Navigation;
