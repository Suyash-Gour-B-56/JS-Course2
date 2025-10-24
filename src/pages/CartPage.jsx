// Author: Suyash Gour | Date: 25 October 2025
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{total}</p>

      {items.length === 0 ? <p>No items in cart. <Link to="/products">Continue shopping</Link></p> : (
        <div className="cart-list">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-controls">
                  <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-actions">
            <button onClick={() => alert("Coming Soon!")}>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}
