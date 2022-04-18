import React, {useState} from "react";
import { Link, Outlet } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <nav>
        <div className="navbar-logo" title="Kabir Kalsi">Kabir Kalsi</div>
        <div className={mobileMenu ? "mobile-menu__link" : "menu__link"}>
        <ul>
          <li>
            <Link to="/" className="nav-link"> Home</Link>
           
          </li>
          <li>
            <Link to="/about" className="nav-link"> About</Link>
           
          </li>
   
          <li>
            <Link to="/contact" className="nav-link">
            Contact
            </Link>
           
          </li>
        </ul>
        </div>
        <div className="hamburger__menu">
            <FaBars onClick={()=> setMobileMenu(!mobileMenu)}/>
        </div>
        
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
