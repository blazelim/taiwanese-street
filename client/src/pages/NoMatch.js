import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  document.title = 'Fried Snacks Diner - 404 page not found';
  return (
    <div className="error-page">
      <h1>404 page not found.</h1>
      <button><Link to="/" className="error-link">Return</Link></button>
    </div>
  );
};

export default NoMatch;