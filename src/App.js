/* eslint-disable import/no-webpack-loader-syntax */
import "./App.scss"
import React from "react";
import { Link } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li><Link className="wow" to="/">Homes</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/admin">Admin area</Link></li>
        </ul>
      </nav>
      <Routes />
    </div>
  )
}

export default App