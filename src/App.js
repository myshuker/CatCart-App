import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsDescrip from "./pages/ProductsDescrip";
import CartIcon from './Components/CrtIcon'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {" "}
            CatsStore{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  {" "}
                  Products{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  {" "}
                  Cart{" "}
                </Link>
              </li>
            </ul>
          </div>
          <CartIcon />
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={ProductsDescrip} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </Router>
  );
}

export default App;
