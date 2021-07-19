import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="error-page">
        <h1>404 page not found.</h1>
        <button><Link to="/" className="error-link">Return</Link></button>
    </div>
  );
};

export default NoMatch;