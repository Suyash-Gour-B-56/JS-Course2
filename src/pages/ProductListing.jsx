// Author: Suyash Gour | Date: 25 October 2025
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 299, category: "Succulent", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=60" },
  { id: 2, name: "Snake Plant", price: 349, category: "Air-Purifying", image: "https://images.unsplash.com/photo-1587502537745-96b9f48c1b5b?auto=format&fit=crop&w=800&q=60" },
  { id: 3, name: "Pothos", price: 249, category: "Indoor", image: "https://images.unsplash.com/photo-1524594154908-1b3fa5acb4d6?auto=format&fit=crop&w=800&q=60" },
  { id: 4, name: "ZZ Plant", price: 399, category: "Air-Purifying", image: "https://images.unsplash.com/photo-1611352183972-1b5f6c0e3f7a?auto=format&fit=crop&w=800&q=60" },
  { id: 5, name: "Echeveria", price: 199, category: "Succulent", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60" },
  { id: 6, name: "Peace Lily", price: 459, category: "Indoor", image: "https://images.unsplash.com/photo-1612219699988-4f7e5c4b9f20?auto=format&fit=crop&w=800&q=60" }
];

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some(i => i.id === id);

  const grouped = plants.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  return (
    <div className="container">
      <h2>Our Plants</h2>
      {Object.keys(grouped).map(cat => (
        <section key={cat}>
          <h3>{cat}</h3>
          <div className="plant-grid">
            {grouped[cat].map(p => (
              <div key={p.id} className="plant-card">
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p>₹{p.price}</p>
                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={isInCart(p.id)}
                >
                  {isInCart(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
