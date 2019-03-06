import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import "./Product.css";

const btn = (
  <Button icon labelPosition="right">
    Add to cart
    <Icon name="shop" />
  </Button>
);

const Product = props => {
  const { product } = props;
  return (
    <Card
      image={require(`../../static/data/products/${product.sku}_1.jpg`)}
      header={product.title}
      description={`$ ${product.price}`}
      extra={btn}
    />
  );
};

export default Product;
