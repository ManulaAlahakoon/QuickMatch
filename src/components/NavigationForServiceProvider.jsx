// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

const NavigationForServiceProvider = () => (
  <nav className="nav-bar">
    <Link className="nav-link-1" to="/">Profile</Link>
    <Link className="nav-link-1" to="/finance">Finance</Link>
    <Link className="nav-link-1" to="/feedback">Feedback</Link>
    <Link className="nav-link-1" to="/requests">Notification</Link>
           

  </nav>
);

export default NavigationForServiceProvider;
