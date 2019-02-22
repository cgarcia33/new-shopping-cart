import React, { Component } from "react";
import Product from "../Product/Product.js";
import { Grid } from "semantic-ui-react";
import "./Catalog.css";

class Catalog extends Component {
  render() {
    const { products } = this.props;
    return (
      <Grid className="catalog" columns={4}>
        {products.map(product => (
          <Grid.Column>
            <Product product={product} key={product.id} />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default Catalog;
