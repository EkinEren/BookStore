import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import About from "./About";
import Container from "./Browse";
import Cart from "./ShoppingCart";

class MainContent extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/container">Browse</Link></li>
                  <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart <span className="badge">{this.props.numberOfItems}</span></Link></li>
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
    )
  }
}

const mapStateToProps = state => ({
  numberOfItems: state.cartReducer.itemsInCart.length
});

let Main = connect(mapStateToProps, null)(MainContent);

export default Main;
