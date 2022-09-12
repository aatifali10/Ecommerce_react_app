import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span className="web">Ecomerce Websites</span>
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="cart" to="cart">
        Cart
      </Link>
      <span className="item">Items : 0</span>
    </div>
  );
};

export default Navbar;
