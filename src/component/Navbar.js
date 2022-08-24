import React from "react";
import { useSelector } from "react-redux";
import { GiShoppingBag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cartCount=useSelector((state)=> state.cart.cartList.length);
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
              <div className="cartIcon position-relative">
                <GiShoppingCart className="react-icon" activeclassname='active' />
                {
                  cartCount >= 1 && <span>{cartCount}</span>
                }
                
              </div>
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
