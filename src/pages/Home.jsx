// src/pages/Home.jsx
// Author: Suyash Gour | Date: 25 October 2025
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Plant Store</h1>
      <p>Discover your perfect plants!</p>
      <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Home;
