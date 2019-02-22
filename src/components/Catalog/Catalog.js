import React, { Component } from "react";
import Product from "../Product";

class Catalog extends Component {
  render() {
    const { products } = this.props;
    const components = products.map(product => (
      <Product product={product} key={product.id} />
    ));
    return <div className="shelf-container">{components}</div>;
  }
}

export default Catalog;
