import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import "./Product.css";

const Product = props => {
  const { product } = props;
  return (
    <Card
      image={require(`../../static/data/products/${product.sku}_1.jpg`)}
      header={product.title}
      description={`$ ${product.price}`}
      extra={
        <Button
          icon
          labelPosition="right"
          onClick={() => {
            props.addItem(product);
          }}
        >
          Add to cart
          <Icon name="shop" />
        </Button>
      }
    />
  );
};

export default Product;
