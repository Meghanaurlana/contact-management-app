import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
              <span>Contacts</span>
            </Link>
          </li>
          <li className="rounded-sm">
            <Link
              to="/dashboard"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <span>Charts And Maps</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
