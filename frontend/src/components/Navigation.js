import React from 'react';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav>
        <Link to="/">HomePage</Link>
        <Link to="/log">Log Page</Link>
        <Link to="/create">Create New Match</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order">Order Page</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/staff">Staff Page</Link>
        <Link to="/topics">Topics Page</Link>

    </nav>
  );
}

export default Menu;
