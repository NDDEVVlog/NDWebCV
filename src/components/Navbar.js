import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Navbar; 