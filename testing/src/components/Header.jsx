import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/components/Header.styl";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart?.length > 0 && <div className="Header-alert">{cart?.length}</div>}
      </div>
    </div>
  );
};

export default Header;
