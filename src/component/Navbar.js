import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark text-white py-3">
      <div className="container d-flex align-items-center">
        <a href="#Fixme" className="logo d-flex align-items-center">
          <GiShoppingBag />
          <h2 className="mb-0 ml-2">FakeKart</h2>
        </a>
        <ul className="ml-auto d-flex align-items-center">
          <li>
            <NavLink to="/products" activeclassname='active'>Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <GiShoppingCart className="react-icon" activeclassname='active'/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" activeclassname='active'>Orders</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
