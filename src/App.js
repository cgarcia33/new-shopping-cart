import React, { Component } from "react";
import "./App.scss";

class Item extends Component {
  render() {
    const product = this.props.product;
    const title = product.title;
    const price = product.price;
    const sku = product.sku;

    return (
      <div className="shelf-item">
        <div>
          <img
            src={require(`./static/data/products/${sku}_1.jpg`)}
            alt={product.title}
          />
        </div>
        <div>{title}</div>
        <div>${price}</div>
        <div>
          <button type="button">Add to cart</button>
        </div>
      </div>
    );
  }
}

class ProductTable extends Component {
  render() {
    const rows = [];
    let PRODUCTS = this.props.products;
    for (let i = 0; i < PRODUCTS.products.length; i++) {
      rows.push(<Item product={PRODUCTS.products[i]} />);
    }

    return <div className="shelf-container">{rows}</div>;
  }
}

class App extends Component {
  render() {
    let PRODUCTS = require("./static/data/products.json");
    return (
      <div>
        <ProductTable products={PRODUCTS}> </ProductTable>
      </div>
    );
  }
}

export default App;
