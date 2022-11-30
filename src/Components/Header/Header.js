import React from "react";
import { NavLink} from "react-router-dom";

const Header = () => {

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light pb-2">
      <div className="container fs-4 ">
              Library fund
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-4 " >
            <NavLink to="/library" className="nav-link"
            >
              Library
              
            </NavLink>
            <NavLink to="/Client" className="nav-link">
              Client
            </NavLink>
            <NavLink
              className="nav-link"
              to="/Book"
            >
              Book
            </NavLink>
            <NavLink
              className="nav-link"
              to="/Author"
            >
              Author
            </NavLink> 
            <NavLink
              className="nav-link"
              to="/Query"
            >
              Query
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header ;