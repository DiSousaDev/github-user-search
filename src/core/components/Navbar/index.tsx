import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
   <nav className="row">
       <Link to="/" className="nav-link">
            <h1 className="nav-title">Bootcamp DevSuperior</h1>
       </Link>
   </nav>
);

export default Navbar;