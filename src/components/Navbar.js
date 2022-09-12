import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <span className="web">Ecomerce Websites</span>
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="cart" to="cart">
        Cart
      </Link>
      <span className="item">Cart Items :{items.length}</span>
    </div>
  );
};

export default Navbar;
