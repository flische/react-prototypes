import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

// This works because by default <NavLink> adds a class of active to an active link. Bootstrap uses a class of active for its nav items so it all works nicely together.

export default props => (
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <NavLink exact to="/" activeClassName="active selected" className="nav-link">Welcome</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/our-macarons" activeClassName="active selected" className="nav-link">Our Macarons</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/gifts-parties" activeClassName="active selected" className="nav-link">Gifts & Parties</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/contact" activeClassName="active selected" className="nav-link">Contact</NavLink>
        </li>
    </ul>
)