import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex  w-1/6 flex-col h-screen bg-blue-100  pt-10">
        <ul className="pt-20 pb-1 space-y-10 text-sm">
          <li>
            <Link to="/" className="grid justify-items-center">
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="grid justify-items-center">
              <span>Charts and maps</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
