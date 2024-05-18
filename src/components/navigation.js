import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/registration">registration</Link></li>
        <li><Link to="/account">account</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;