// Author: Suyash Gour | Date: 25 October 2025
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1500&q=80')" }}>
      <div className="landing-overlay">
        <h1>GreenLeaf Houseplants</h1>
        <p>We bring nature closer to you with a curated selection of beautiful houseplants — perfect for homes and offices.</p>
        <Link to="/products"><button className="primary">Get Started</button></Link>
      </div>
    </div>
  );
}
