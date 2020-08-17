import React, { Component } from "react";
import { getById } from "../api/products";

export default class ProductsDescrip extends Component {
  state = {
    product: {},
    loading: true,
    quantity: 1,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    getById(parseInt(id)).then((product) => {
      setTimeout(() => {
        this.setState({
          product,
          loading: false,
        });
      }, 1000);
    });
  }

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  render() {
    if (this.state.loading) {
      return "Loading.....";
    }
    const product = this.state.product;
    const quantity = this.state.quantity;

    return (
      <div>
        <div className={"row"}>
          <div className="col-6">
            <img src={product.image} width={"100%"} alt="cat" />
          </div>

          <div className="col-6">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <br /> <br />
            <input
              type="number"
              min="0"
              max="10"
              value={quantity}
              onChange={this.handleQuantity}
            />{" "}
            <br /> <br />
            <p>Total Price :{quantity * product.price} </p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
