import React from 'react';
import { Link } from 'react-router-dom';

const ResHome = () => {
  return (
    <div>
      <h2>Links</h2>
      <ol>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/fuel-savings">Search for a restaurant</Link></li>
        <li><Link to="/fuel-savings">View your restaurants</Link></li>
        <li><Link to="/fuel-savings">View a specific restaurant</Link></li>
        <li><Link to="/fuel-savings">View your restaurant history</Link></li>
      </ol>
    </div>
  );
};

export default ResHome;
