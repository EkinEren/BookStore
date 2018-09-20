import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Container from "./Browse";
import Cart from "./ShoppingCart";

const Main = () => (
  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/container">Browse</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/container" component={Container} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  </Router>
);
export default Main;
