// Author: Suyash Gour | Date: 25 October 2025
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/products" className="brand">GreenLeaf Houseplants</Link>
      </div>
      <nav className="header-right">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">Cart 🛒 <span className="cart-count">{totalItems}</span></Link>
      </nav>
    </header>
  );
}
